import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} 
      ({post.frontmatter.date}){" "} 
      {post.frontmatter.type} {" "}
      {post.frontmatter.tag} {" "}
      {post.frontmatter.author}
    </Link>
  </div>
)

export default PostLink