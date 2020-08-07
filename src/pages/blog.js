import React, { useState } from "react"
import { graphql } from "gatsby"
import PostLink from "../components/PostLink/index.jsx"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  const [ author, setAuthor] = useState("")
  
  const Posts = edges
    .filter(edge => edge.node.frontmatter.author === author) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)


  return (
    <>
      <div>{Posts}</div>
      <a href="/usecase">Use case</a>

      <input id="search" type="text" value={author} onChange={event => setAuthor(event.target.value)}></input>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { value: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            type
            tag
            author
          }
        }
      }
    }
  }
`
