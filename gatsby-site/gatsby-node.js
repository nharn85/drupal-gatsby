/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.downloadMediaFiles = ({ nodes, store, cache, createNode, _auth }) => {
  nodes.map(async node => {
    let fileNode;
    // Ensures we are only processing Media Files
    // `wordpress__wp_media` is the media file type name for Wordpress
    if (node.__type === `mandala`) {
      try {
        fileNode = await createRemoteFileNode({
          id: node.field_mandala_id,
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

    // Adds a field `localFile` to the node
    // ___NODE appendix tells Gatsby that this field will link to another node
    if (fileNode) {
      node.localFile___NODE = fileNode.id;
    }
  });
};

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   switch (stage) {
//     case "develop":
//       config.loader("js", {
//         include: 'node_modules/basicightbox/src/main.js',
//       });

//       break;

//     case "build-javascript":
//       config.loader("js", {
//         include: 'node_modules/basicightbox/src/main.js',
//       });

//       break;
//   }

//   return config;
// };