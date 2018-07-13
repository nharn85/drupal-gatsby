import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

const IndexPage = ({data}) => (
<div>
      <h1>Mandalas</h1>
      <div>
        {data.allNodeMandala.edges.map(({ node }) => (
          <article key={node.id}>
            <strong>{node.title}</strong>
            <div>{node.field_mandala_id}</div>
            {/* {node.relationships.field_download_file.url} */}
            {/* {node.relationships.field_mandala_image.url} */}
            <Img title={node.title} alt={node.title} sizes={node.relationships.field_mandala_thumbnail_image.localFile.childImageSharp.sizes} />

            {node.relationships.field_download_file.url}
          </article>
        ))}
        <hr/>
      </div>
  </div>
)

export default IndexPage

export const query = graphql`
query allNodeMandala {
  allNodeMandala {
    edges {
      node {
      	id
        title
        fields {
          slug
        }
        relationships {
          field_download_file {
            url
          }
          field_mandala_thumbnail_image {
            localFile {
              childImageSharp {
                sizes(maxWidth: 300) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
}
`