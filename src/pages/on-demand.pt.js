import React from "react"
import LanguageProvider from "../providers/LanguageProvider"
import Layout from "../components/LayoutLandingPage"
import TextAndContact from "../components/LandingPage/components/TextAndContact"
import TeamComplete from "../components/LandingPage/components/TeamComplete"
import Beneficies from "../components/LandingPage/components/Beneficies"
import Cases from "../components/LandingPage/components/Cases"
import TeamAdvantages from '../components/LandingPage/components/TeamAdvantages'

import { WebsiteProvider } from "../contexts"

const IndexPage = () => {
  const language = "pt"

  return (
    <WebsiteProvider>
      <LanguageProvider>
        <Layout language={language}>
          <TextAndContact language={language} />
          <TeamComplete language={language} />
          <Beneficies language={language} />
          <Cases language={language} />
          <TeamAdvantages language={language} />
        </Layout>
      </LanguageProvider>
    </WebsiteProvider>
  )
}

export default IndexPage
