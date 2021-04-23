import React from "react"
import Container from "../Container"
import Header from "../LandingPage/components/Header"
import { LayoutWrapper } from "./style"

const Layout = ({ language, children }) => {
  return (
    <LayoutWrapper>
      <Header language={language} />
      <Container>
        <main>{children}</main>
      </Container>
    </LayoutWrapper>
  )
}

export default Layout
