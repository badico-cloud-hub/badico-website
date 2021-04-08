import React, { useEffect } from "react"

import CraftmanshipLayout from "../components/CraftmanshipLayout/index"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import HeroLayout from "../components/HeroLayout"
import About from "../components/About"
import Capacities from "../components/Capacities"
import FloatingButton from "../components/FloatingButton/index"
import Companies from "../components/Companies"
import Cases from "../components/Cases"
import TechStacks from "../components/TechStacks"
import LanguageProvider from "../components/LanguageProvider"

const IndexPage = () => (
  <LanguageProvider language="en">
    <Layout>
      <SEO title="Badico Cloud Engineering | We are you IT departament" />
      <HeroLayout />
      <FloatingButton />
      <Companies />
      <CraftmanshipLayout />
      <TechStacks />
      <Capacities />
      <Cases />
      <About />
    </Layout>
  </LanguageProvider>
)

export default IndexPage
