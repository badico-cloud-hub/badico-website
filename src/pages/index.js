import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroLayout from "../components/HeroLayout/index"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroLayout/>
  </Layout>
)

export default IndexPage
