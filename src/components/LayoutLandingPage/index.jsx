import React, { useEffect } from "react"
import Header from "../LandingPage/compoments/Header"

import { LayoutWrapper } from "./style"

const Layout = ({ language, children }) => {
  return (
    <LayoutWrapper>
      <Header language={language}/>
    </LayoutWrapper>
  )
}

export default Layout
