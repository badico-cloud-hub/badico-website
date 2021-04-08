import React from "react"

import LanguageProvider from "../providers/LanguageProvider"
import { WebsiteProvider } from '../contexts'
import Header from "../components/Header"



const language = "pt"

const IndexPage = () => {
  
  return (
    <WebsiteProvider>
      <LanguageProvider >
        <Header language={language}/>
      </LanguageProvider>
    </WebsiteProvider>
  )}

export default IndexPage
