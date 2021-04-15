import React, { useState, useEffect } from "react"
import * as typeformEmbed from "@typeform/embed"
import * as Styled from "./style"
import LogoBadico from "../../images/logo.svg"
import MenuIcon from "../../images/menu.svg"
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
    <Styled.HeaderWrapper isOpen={isOpen}>
      <div className="ghost" />
      <div className="logodiv">
        <LogoBadico className="logo" alt="Badico's logo" />
      </div>

      <div class="menu-drop">
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
              <a href="/">Home</a>
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
            {/* <li>
              <a href="#">Blog</a>
            </li> */}
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a
                onClick={() => {
                  form.open()
                }}
              >
                Contact
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
    </Styled.HeaderWrapper>
  )
}
export default Header
