import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
<div>
      <h1>Recipes</h1>
      <div>
        {data.allRecipes.edges.map(({ node }) => (
          <article>
            <strong>{node.title}</strong>
            <p>{node.difficulty}</p>
            Prep Time: {node.preparationTime} - Total Time: {node.totalTime}
            <div>{node.ingredients}</div>
            
            <div>{node.instructions}</div>
            
          </article>
        ))}
        <hr/>
      </div>
  </div>
)

export default IndexPage

export const query = graphql`
query allRecipes {
    allRecipes {
      edges {
        node {
          id
          title
          difficulty
          preparationTime
          totalTime
          ingredients
          instructions
        }
      }
    }
  }
`