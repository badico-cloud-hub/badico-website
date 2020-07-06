import React from "react"

import CraftmanshipLayout from "../components/CraftmanshipLayout/index"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroLayout from "../components/HeroLayout/index"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroLayout />
    <CraftmanshipLayout />
  </Layout>
)

export default IndexPage
