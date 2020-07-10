import React from "react";
import Logobadico from "../../images/logo.svg";

//import HeaderWrapper from "./HeaderWrapper";

const Header = () => {
  return (
    <div style={{backgroundColor: "#02293f"}}>
      <Logobadico className="logo" alt="Badico's logo" style={{margin: "2rem 0 0 2rem", width: "150px"}}/>
    </div>
  )
}

export default Header;
