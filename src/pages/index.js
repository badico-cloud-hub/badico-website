import React from "react"
import LanguageProvider from "../providers/LanguageProvider"

import Team from "../components/Team/index"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroLayout from "../components/HeroLayout"
import Companies from "../components/Companies"
import FloatingButton from "../components/FloatingButton"
import Craftmanship from "../components/Craftmanship"
import CraftmanshipLayout from "../components/CraftmanshipLayout/index"
import TechStacks from "../components/TechStacks"
import Capacities from "../components/Capacities"
import Cases from "../components/Cases"
import About from "../components/About"
import Process from "../components/ProcessLayout"


import { WebsiteProvider } from "../contexts"

const IndexPage = () => {
  const language = "en"
  
  return (
    <WebsiteProvider>
      <LanguageProvider>
        <Layout language={language}>
          <SEO title="Badico Cloud Engineering | We are you IT departament" />
          <HeroLayout language={language} />
          <FloatingButton language={language} />
          <Companies language={language} />
          <Craftmanship language={language} />
          <CraftmanshipLayout language={language} />
          <TechStacks language={language} />
          <Process language={language} />
          <Capacities language={language} />
          <Cases language={language} />
          <Team language={language}/>
          <About language={language} />
        </Layout>
      </LanguageProvider>
    </WebsiteProvider>
  )
}

export default IndexPage
