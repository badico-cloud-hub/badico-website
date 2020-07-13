import React from "react"

import Team from "../components/Team/index"
import CraftmanshipLayout from "../components/CraftmanshipLayout/index"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroLayout from "../components/HeroLayout"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroLayout />
    <CraftmanshipLayout />
<<<<<<< HEAD
    <About />
=======
    <Team/>
>>>>>>> feat(pages): add component team on page
  </Layout>
)

export default IndexPage
