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
        <HeroLayout />
        <FloatingButton />
        <Companies />
        <CraftmanshipLayout />
        <Capacities />
        <About />
      </Layout>
  )}

export default MainPage
