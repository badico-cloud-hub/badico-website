import React, { Component } from "react"
import { openPopupWidget } from "react-calendly"
import Calendar from "../../images/calendar.svg"
import * as Styled from "./style"
import lang from "../../intl/langs"

const Calendly = ({ url, language }) => {
  const onClick = () => openPopupWidget({ url: "https://calendly.com/badico" })

  return (
    <>
      <Styled.Button onClick={onClick}>
        {lang[language]["hero.buttons.1"]}
        <span /> <span /> <span /> <span />
      </Styled.Button>
    </>
  )
}

export default Calendly
