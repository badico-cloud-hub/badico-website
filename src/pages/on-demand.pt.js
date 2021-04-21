import React from "react"
import LanguageProvider from "../providers/LanguageProvider"
import Layout from "../components/LayoutLandingPage"
import TextAndContact from "../components/LandingPage/components/TextAndContact"
import TeamComplete from "../components/LandingPage/components/TeamComplete"
import Beneficies from "../components/LandingPage/components/Beneficies"
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
        </Layout>
      </LanguageProvider>
    </WebsiteProvider>
  )
}

export default IndexPage
