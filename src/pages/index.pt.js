import React from "react"

import LanguageProvider from "../providers/LanguageProvider"
import MainPage from '../components/Main'


const language = "pt"

const IndexPage = () => {
  
  return (
    <LanguageProvider >
      <MainPage language={language}/>
    </LanguageProvider>
  )}

export default IndexPage
