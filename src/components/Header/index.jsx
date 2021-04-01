import React from "react"
import Logobadico from "../../images/logo.svg"
import * as typeformEmbed from "@typeform/embed"
import { HeaderWrapper } from "./HeaderWrapper"
// import Container from "../Container/index"
// import MenuIcon from "../../images/menu.svg"
// import Close from "../../images/close.svg"
// import  MenuRoundedIcon  from '@material-ui/icons/MenuRounded';
import Typeform from "../Typeform/index"

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header">
        <div className="menu" />
        <div className="menuOptions" />
        <div className="menuOptionsMobile">
          <a href="#">
            <p>Home</p>
          </a>
          <hr />
          <a href="#">
            <p>Our Process</p>
          </a>
          <hr />
          <a href="#">
            <p>Meet Our Time</p>
          </a>
          <hr />
          <a href="#">
            <p>Portfolio</p>
          </a>
          <hr />
          <a href="#">
            <p>Blog</p>
          </a>
          <hr />
          <a href="#">
            <p>About Us</p>
          </a>
        </div>
        <Logobadico className="logo" alt="Badico's logo" />
        <div className="options">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#capacities">Capacities</a>
            </li>
            {/* <li>
              <a href="#">Our Process</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li> */}
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <Typeform />
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
