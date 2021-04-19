import React, { useEffect } from "react"
import Header from "../LandingPage/compoments/Header"
import ContactForm from '../LandingPage/compoments/ContactForm'
import { LayoutWrapper } from "./style"

const Layout = ({ language, children }) => {
  return (
    <LayoutWrapper>
      <Header language={language}/>
      
      <ContactForm language={language} />
    </LayoutWrapper>
  )
}

export default Layout
