import React from "react"

import CraftmanshipLayout from "../components/CraftmanshipLayout/index"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroLayout from "../components/HeroLayout"
import About from "../components/About"
import Capacities from "../components/Capacities"
import FloatingButton from "../components/FloatingButton/index"
import Cases from "../components/Cases"

const IndexPage = () => (
  <Layout>
    <SEO title="Badico Cloud Engineering | Your IT departament" />
    <HeroLayout />
    <FloatingButton />
    <CraftmanshipLayout />
    <Capacities />
    <Cases />
    <About />
  </Layout>
)

export default IndexPage
