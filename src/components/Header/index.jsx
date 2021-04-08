import React, { useState, useEffect } from "react"
import Logobadico from "../../images/logo.svg"
import * as typeformEmbed from "@typeform/embed"
import { HeaderWrapper } from "./HeaderWrapper"
// import Container from "../Container/index"
// import MenuIcon from "../../images/menu.svg"
// import Close from "../../images/close.svg"
// import  MenuRoundedIcon  from '@material-ui/icons/MenuRounded';
// import Typeform from "../Typeform/index"
// import { useIntl } from "gatsby-plugin-intl"
import lang from '../../intl/langs';

const Header = ({ language }) => {
  // const intl = useIntl()

  const [Form, setForm] = useState(null)
  useEffect(() => {
    const contactForm = typeformEmbed.makePopup(
      "https://ask767898.typeform.com/to/rRIqbEzo",
      {
        mode: "drawer_right",
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: function () {
          console.log("Typeform sucessfully submitted")
        },
      }
    )
    setForm(contactForm)
  }, [])
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
          <a href="#about">
            <p>About Us</p>
          </a>
        </div>
        <Logobadico className="logo" alt="Badico's logo" />
        <div className="options">
          <ul>
            <li>
              <a href="#">{lang[language].home}</a>
            </li>
            <li>
              <a href="#capacities">
                {lang[language].capacities}
              </a>
            </li>
            {/* <li>
              <a href="#">Our Process</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li> */}
            <li>
              {/* <a href="#about">{intl.formatMessage({ id: "about" })}</a> */}
            </li>
            <li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  Form.open()
                }}
              >
                {/* {intl.formatMessage({ id: "contact" })} */}
              </li>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
