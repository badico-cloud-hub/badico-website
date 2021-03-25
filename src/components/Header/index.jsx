import React, { useState } from "react"
import Logobadico from "../../images/logo.svg"
import Container from "../Container/index"
import MenuIcon from "../../images/menu.svg"
import Close from "../../images/close.svg"
import { HeaderWrapper } from "./HeaderWrapper"
import  MenuRoundedIcon  from '@material-ui/icons/MenuRounded';

const Header = () => {''
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderWrapper isOpen={isOpen}>
      <Container>
        <div class="menu-drop">
          <div className="back"></div>
          <button
            type="button"
            className="open"
            onClick={() => {
              setIsOpen(true)
            }}
          >
            <MenuRoundedIcon style={{fontSize: '38px'}}/>
          </button>
          <nav class="drop-content">
            <ul>
              {/*<li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our Process</a>
              </li>
              <li>
                <a href="#">Meet Our Time</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>*/}
              <li>
                <a href="#about">About us</a>
              </li>
            </ul>
          </nav>
          <button
            className="close"
            onClick={() => {
              setIsOpen(false)
            }}
          >
            <Close />
          </button>
        </div>
        <Logobadico className="logo" alt="Badico's logo" />
      </Container>
    </HeaderWrapper>
  )
}

export default Header
