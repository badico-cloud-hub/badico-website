import React, { useEffect } from "react"
import Container from "../Container"
import Header from "../LandingPage/components/Header"
import TextAndContact from "../LandingPage/components/TextAndContact"
import TeamComplete from '../LandingPage/components/TeamComplete'
import Beneficies from '../LandingPage/components/Beneficies'
import { LayoutWrapper } from "./style"

const Layout = ({ language, children }) => {
  return (
    <LayoutWrapper>
      <Header language={language} />
      <Container>
        <TextAndContact />
        <TeamComplete />
        <Beneficies />
      </Container>
    </LayoutWrapper>
  )
}

export default Layout
