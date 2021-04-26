import React, { useState, useEffect } from "react"
import Calendly from "../Calendly"
import Chat from "../../images/chat.svg"
import Calendar from "../../images/calendar.svg"
import Email from "../../images/email.svg"
import { openPopupWidget } from "react-calendly"
import * as typeformEmbed from "@typeform/embed"
import * as Styled from "./style"
import lang from "../../intl/langs"

const FloatingButton = ({ language }) => {
  const [form, setForm] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const openPopup = () =>
    openPopupWidget({ url: "https://calendly.com/badico" })

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
    <Styled.Container>
      <Styled.FloatingButton>
        <div className="back" />
        <Styled.ContactUs>
          <Chat className="chat" />
          <div className="cloud" />
          <div className="cloud2" />
          <div className="cloud3" />
          <div className="cloud4" />
          <div className="buttons">
            <button
              className="contact"
              onClick={() => {
                form.open()
              }}
            >
              {lang[language]["hero.buttons.0"]}
            </button>
            <div className="email">
              <Email className="emailsvg" />
            </div>
            <button className="calendarbutton" onClick={openPopup}>
              {lang[language]["hero.buttons.1"]}
            </button>
            <div className="calendar">
              <Calendar className="calendarsvg" />
            </div>
          </div>
        </Styled.ContactUs>
      </Styled.FloatingButton>
    </Styled.Container>
  )
}

export default FloatingButton
