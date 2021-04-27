import React, { useEffect } from "react"
import Container from "../Container"
import Header from "../LandingPage/components/Header"
import Footer from "../LandingPage/components/Footer"

import { LayoutWrapper } from "./style"

const Layout = ({ language, children }) => {
  return (
    <LayoutWrapper>
      <Header language={language} />
      <main>{children}</main>
      <Footer language={language} />
    </LayoutWrapper>
  )
}

export default Layout
