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
import lang from "../../intl/langs"

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
            <p>{lang[language]["menu.div.options.0"]}</p>
          </a>
          <hr />
          <a href="#">
            <p>{lang[language]["menu.div.options.1"]}</p>
          </a>
          <hr />
          {/* <a href="#">
            <p>{lang[language]["menu.div.options.2"]}</p>
          </a>
          <hr />
          <a href="#">
            <p>{lang[language]["menu.div.options.3"]}</p>
          </a>
          <hr /> */}
          <a href="#about">
            <p>{lang[language]["menu.div.options.4"]}</p>
          </a>
          <hr />
          <a href="#">
            <p>{lang[language]["menu.div.options.5"]}</p>
          </a>
        </div>
        <Logobadico className="logo" alt="Badico's logo" />
        <div className="options">
          <ul>
            <li>
              <a href="#">{lang[language]["menu.div.options.0"]}</a>
            </li>
            <li>
              <a href="#capacities">{lang[language]["menu.div.options.1"]}</a>
            </li>
            {/* <li>
              <a href="#">{lang[language]["menu.div.options.2"]}</a>
            </li>
            <li>
              <a href="#">{lang[language]["menu.div.options.3"]}</a>
            </li> */}
            <li>
              <a href="#about">{lang[language]["menu.div.options.4"]}</a>
            </li>
            <li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  Form.open()
                }}
              >
                {lang[language]["menu.div.options.5"]}
              </li>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
