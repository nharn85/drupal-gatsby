/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
 const path = require('path')

// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'node__mandala') {
    const slug = '/mandala/pdfs/${node.field_mandala_id}'
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.downloadMediaFiles = ({ nodes, store, cache, createNode, _auth }) => {
  nodes.map(async node => {
    let fileNode;
    // Ensures we are only processing Media Files
    // 'wordpress__wp_media' is the media file type name for Wordpress
    if (node.__type === 'mandala') {
      try {
        fileNode = await createRemoteFileNode({
          url: node.url,
          store,
          cache,
          createNode,
          auth: _auth,
        });
      } catch (e) {
        // Ignore
      }
    }

    // Adds a field 'localFile' to the node
    // ___NODE appendix tells Gatsby that this field will link to another node
    if (fileNode) {
      node.localFile___NODE = fileNode.id;
    }
  });
};