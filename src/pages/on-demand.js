import React from "react"
import LanguageProvider from "../providers/LanguageProvider"
import { WebsiteProvider } from "../contexts"
import Layout from "../components/LayoutLandingPage"

const language = "en"

const IndexPage = () => {
  return (
    <WebsiteProvider>
      <LanguageProvider>
        <Layout language={language} />
      </LanguageProvider>
    </WebsiteProvider>
  )
}

export default IndexPage
