import React, { useState, useEffect } from "react"
import Logobadico from "../../images/logo.svg"
import * as typeformEmbed from "@typeform/embed"
import { HeaderWrapper, Container } from "./style"
import Typeform from "../Typeform/index"
import MenuIcon from "../../images/menuwhite.svg"
import Close from "../../images/close.svg"


const Header = () => {
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
    <HeaderWrapper isOpen={isOpen}>
      <Container>
      <div className="ghost" />
      <div className="logodiv">
        <Logobadico className="logo" alt="Badico's logo" />
      </div>
      <div class="menudrop">
        <div className="back" />
        <button
          type="button"
          className="open"
          onClick={() => {
            setIsOpen(true)
          }}
        >
          <MenuIcon />
        </button>
        <nav class="drop-content">
          <ul>
            <li>
              <a href="#">{intl.formatMessage({ id: "home" })}</a>
            </li>
            {/* <li>
              <a href="#">Our Process</a>
            </li> */}
            {/* <li>
              <a href="#">Meet Our Time</a>
            </li> */}
            <li>
              <a href="#capacities">
                {intl.formatMessage({ id: "capacities" })}
              </a>
            </li>
            {/* <li>
              <a href="#">Blog</a>
            </li> */}
            <li>
              <a href="#about">{intl.formatMessage({ id: "about" })}</a>
            </li>
            <li>
              <a
                onClick={() => {
                  form.open()
                }}
              >
                {intl.formatMessage({ id: "contact" })}
              </li>
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
      </Container>
    </HeaderWrapper>
  )
}

export default Header
