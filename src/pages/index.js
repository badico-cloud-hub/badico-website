import React from "react"

import CraftmanshipLayout from "../components/CraftmanshipLayout/index"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroLayout from "../components/HeroLayout"
import About from "../components/About"
import Capacities from "../components/Capacities"
import FloatingButton from "../components/FloatingButton/index"
import Companies from '../components/Companies'

const IndexPage = () => (
  <Layout>
    <SEO title="Badico Cloud Engineering | We are you IT departament" />
    <HeroLayout />
    <FloatingButton />
    <Companies/>
    <CraftmanshipLayout />
    <Capacities />
    <About />
  </Layout>
)

export default IndexPage
