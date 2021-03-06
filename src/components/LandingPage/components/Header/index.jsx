import React, { useState, useEffect } from "react"
import * as typeformEmbed from "@typeform/embed"
import * as Styled from "./style"
import LogoBadico from "../../images/logo.svg"
import MenuIcon from "../../images/menu.svg"
import Close from "../../images/close.svg"
import lang from "../../../../intl/langs"

const Header = ({ language }) => {
  const [form, setForm] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

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
    <Styled.HeaderWrapper isOpen={isOpen}>
      <Styled.Container>
        <Styled.Ghost />
        <Styled.BoxLogo>
          <LogoBadico className="logo" alt="Badico's logo" />
        </Styled.BoxLogo>

        <div className="menudrop">
          <div
            className="back"
            onClick={() => {
              setIsOpen(false)
            }}
          />
          <button
            type="button"
            className="open"
            onClick={() => {
              setIsOpen(true)
            }}
          >
            <MenuIcon />
          </button>
          <nav className="drop-content">
            <ul>
              <li>
                <a href="/">{lang[language]["menu.div.options.0"]}</a>
              </li>
              {/* <li>
              <a href="#">Our Process</a>
            </li> */}
              {/* <li>
              <a href="#">Meet Our Time</a>
            </li> */}
              <li>
                <a href="/#capacities">
                  {lang[language]["menu.div.options.1"]}
                </a>
              </li>
              {/* <li>
              <a href="#">Blog</a>
            </li> */}
              <li>
                <a href="/#about">{lang[language]["menu.div.options.4"]}</a>
              </li>
              <li>
                <a
                  onClick={() => {
                    form.open()
                  }}
                >
                  {lang[language]["menu.div.options.5"]}
                </a>
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
      </Styled.Container>
    </Styled.HeaderWrapper>
  )
}
export default Header
