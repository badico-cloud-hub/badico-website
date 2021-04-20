import React, { useEffect } from "react"
import Header from "../LandingPage/components/Header"
import TextIntroductory from "../LandingPage/components/TextIntroductory"

import { LayoutWrapper } from "./style"

const Layout = ({ language, children }) => {
  return (
    <LayoutWrapper>
      <Header language={language}/>
      <TextIntroductory language={language}/>
    </LayoutWrapper>
  )
}

export default Layout
