import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
<div>
      <h1>Mandalas</h1>
      <div>
      {data.allNodeMandala.site.siteMetadata.baseUrl}
        {data.allNodeMandala.edges.map(({ node }) => (
          <article key={node.id}>
            <strong>{node.title}</strong>
            {/* {node.relationships.field_download_file.url} */}
            {/* {node.relationships.field_mandala_image.url} */}
            
            <img src={node.relationships.field_mandala_thumbnail_image.url} alt={node.title}/>
          </article>
        ))}
        <hr/>
      </div>
  </div>
)

export default IndexPage

export const query = graphql`
query allNodeMandala {
  site {
    siteMetadata {
      baseUrl
    }
  }
  allNodeMandala {
    edges {
      node {
        id
        title
        relationships {
          field_download_file {
            url
          }
          field_mandala_image {
            url
          }
          
          field_mandala_thumbnail_image {
            url
          }
        }
      }
    }
  }
  }
`