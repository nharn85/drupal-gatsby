import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

import Lightbox from '../components/lightbox'

import './mandalas.css'

const MandalasPage = ({ data }) => (
  <div className="page-wrapper">
    <div className="lightbox">
      {/* <img src={node.relationships.field_mandala_image.localFile.publicURL} /> */}
      <Lightbox />
    </div>
    <div className="grid-wrapper">
      {data.allNodeMandala.edges.map(({ node }) => (
        <article className="mandala grid-item" key={node.id}>
          <a href="#">
            <Img
              title={node.title}
              alt={node.title}
              className="mandala-thumb"
              resolutions={node.relationships.field_mandala_thumbnail_image.localFile.childImageSharp.resolutions}
            />
          </a>
          <div className="title">{node.title}</div>
          <a className="link" href={node.relationships.field_download_file.localFile.publicURL} target="_blank">Download</a>
        </article>
      ))}
    </div>
  </div>
)

export default MandalasPage

export const query = graphql`
  query query {
    allNodeMandala {
      edges {
        node {
          id
          title
          relationships {
            field_download_file {
              localFile {
                publicURL
              }
            }
            field_mandala_image {
              localFile {
                publicURL
              }
            }
            field_mandala_thumbnail_image {
              localFile {
                publicURL
                childImageSharp {
                  resolutions(width: 250, height: 250) {
                    ...GatsbyImageSharpResolutions
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