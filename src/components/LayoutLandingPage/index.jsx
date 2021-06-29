import React from "react"
import Header from "../LandingPage/Header"
import Footer from "../LandingPage/Footer"

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
