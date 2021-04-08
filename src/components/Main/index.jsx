import React from "react"

import CraftmanshipLayout from "../CraftmanshipLayout/index"
import Layout from "../Layout/layout"
import SEO from "../seo"
import HeroLayout from "../HeroLayout"
import About from "../About"
import Capacities from "../Capacities"
import FloatingButton from "../FloatingButton"
import Companies from "../Companies"

const MainPage = ({ language }) => {
  return (
    <Layout language={language}>
      <SEO title="Badico Cloud Engineering | We are you IT departament" />
      <HeroLayout language={language} />
      <FloatingButton language={language} />
      <Companies language={language} />
      <CraftmanshipLayout language={language} />
      <Capacities language={language} />
      <About language={language} />
    </Layout>
  )
}

export default MainPage
