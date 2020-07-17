import React from "react"

import CraftmanshipLayout from "../components/CraftmanshipLayout/index"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroLayout from "../components/HeroLayout"
import About from "../components/About"
import Capacities from "../components/Capacities"

const IndexPage = () => (
  <Layout>
    <SEO title="Badico Cloud Engineering | Your IT departament" />
    <HeroLayout />
    <CraftmanshipLayout />
    <Capacities />
    <About />
  </Layout>
)

export default IndexPage
