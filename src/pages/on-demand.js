import React from "react"
import LanguageProvider from "../providers/LanguageProvider"
import Layout from "../components/LayoutLandingPage"
import TextAndContact from "../components/LandingPage/TextAndContact"
import TeamComplete from "../components/LandingPage/TeamComplete"
import Beneficies from "../components/LandingPage/Beneficies"
import Cases from "../components/LandingPage/Cases"
import TeamAdvantages from '../components/LandingPage/TeamAdvantages'

import { WebsiteProvider } from "../contexts"

const IndexPage = () => {
  const language = "en"

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
