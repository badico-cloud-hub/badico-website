import React from "react"
import LanguageProvider from "../providers/LanguageProvider"
import MainPage from '../components/Main'
import { WebsiteProvider } from '../contexts'


const language = "en"

const IndexPage = () => {
  
  return (
    <WebsiteProvider>
      <LanguageProvider >
        <MainPage language={language}/>
      </LanguageProvider>
    </WebsiteProvider>
  )}

export default IndexPage
