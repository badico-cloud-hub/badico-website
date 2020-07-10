import React from "react"
import PropTypes from "prop-types"
import Header from "../components/Header/index"
import NewFooter from "../components/NewFooter"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <NewFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
