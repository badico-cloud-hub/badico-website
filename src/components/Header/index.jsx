import React from "react"
import Logobadico from "../../images/logo.svg"
import Container from "../Container/index"

//import HeaderWrapper from "./HeaderWrapper";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#02293f" }}>
      <Container>
        <Logobadico
          className="logo"
          alt="Badico's logo"
          style={{ margin: "2rem 0 0 2rem", width: "150px" }}
        />
      </Container>
    </div>
  )
}

export default Header
