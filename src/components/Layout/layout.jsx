import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"

import { LayoutWrapper } from './style'

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
