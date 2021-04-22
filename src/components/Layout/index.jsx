import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"
import Container from "../Container"
import Bg from "../../images/bgDesktop.svg"

import { LayoutWrapper } from "./style"

const Layout = ({ language, children }) => {
  return (
    <LayoutWrapper>
      <Header language={language} />
      <Bg fill="#0e273b" className="bgWave" />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
