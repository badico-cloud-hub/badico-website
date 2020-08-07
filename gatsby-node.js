const path = require("path")

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@typeform/,
            loader: "null-loader",
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(
    `./src/components/TemplatePost/index.jsx`
  )

  const resultCase = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { value: { eq: "use-case" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const resultPost = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { value: { eq: "post" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (resultPost.errors && resultCase.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  resultPost.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  resultCase.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/usecase/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

}
