import React, { useState, useEffect } from "react"
import * as typeformEmbed from "@typeform/embed"


import * as Styled from "./style"
import MenuIcon from "../../../images/menuwhite.svg"
import Close from "../../../images/close.svg"

const Menudrop = ({ lang, language }) => {
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
    <Styled.MenudropWrapper isOpen={isOpen}>
      <div
        className="back"
        onClick={() => {
          setIsOpen(false)
        }}
      />
      <Styled.ButtonOpen
        type="button"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        <MenuIcon />
      </Styled.ButtonOpen>
      <Styled.Nav isOpen={isOpen}>
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
            <a href="#capacities">{lang[language]["menu.div.options.1"]}</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#about">{lang[language]["menu.div.options.4"]}</a>
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
      </Styled.Nav>
      <Styled.ButtonClose
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(false)
        }}
      >
        <Close />
      </Styled.ButtonClose>
    </Styled.MenudropWrapper>
  )
}

export default Menudrop
