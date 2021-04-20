import React, { useEffect } from "react"
import Header from "../LandingPage/components/Header"
import ContactForm from '../LandingPage/components/ContactForm'
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
