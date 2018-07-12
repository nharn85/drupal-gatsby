/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
 const path = require(`path`)

// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `node__mandala`) {
    const slug = `/mandala/${node.field_mandala_id}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}