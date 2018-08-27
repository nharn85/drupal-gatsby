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
            <Img sizes={node.relationships.field_mandala_thumbnail_image.localFile.childImageSharp.sizes} />


            {node.fields.slug}
            
            {/* <Img sizes={node.relationships.field_mandala_image.localFile.childImageSharp.sizes.src} /> */}

            <a href={node.relationships.field_download_file.localFile.publicURL} target="_blank">Download</a>
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
        field_mandala_id
        fields {
          slug
        }
        relationships {
          field_mandala_thumbnail_image {
            localFile {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          field_download_file {
            localFile {
              id
              publicURL
            }
          }
          field_mandala_image {
            localFile {
              childImageSharp {
                sizes {
                  src
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