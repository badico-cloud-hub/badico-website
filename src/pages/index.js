import React from "react"
import LanguageProvider from "../providers/LanguageProvider"
import MainPage from '../components/Main'
import { WebsiteProvider } from '../../contexts'


const language = "en"

const IndexPage = () => {
  
  return (
    <WebsiteContext>
      <LanguageProvider >
        <MainPage language={language}/>
      </LanguageProvider>
    </WebsiteContext>
  )}

export default IndexPage
