import React, { useEffect } from "react"
import Header from "../LandingPage/components/Header"
import TextAndContact from "../LandingPage/components/TextAndContact"
import { LayoutWrapper } from "./style"
import Container from "../Container"

const Layout = ({ language, children }) => {
  return (
    <LayoutWrapper>
      <Header language={language} />
      <Container>
        <TextAndContact />
      </Container>
    </LayoutWrapper>
  )
}

export default Layout
