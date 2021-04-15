import React from "react"

import LanguageProvider from "../providers/LanguageProvider"
import { WebsiteProvider } from '../contexts'
import Layout from '../components/LayoutLandingPage'


const language = "pt"

const IndexPage = () => {
  
  return (
    <WebsiteProvider>
      <LanguageProvider >
        <Layout language={language}>
        </Layout>
      </LanguageProvider>
    </WebsiteProvider>
  )}

export default IndexPage
