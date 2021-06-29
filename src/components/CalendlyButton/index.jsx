import React from "react"
import { openPopupWidget } from "react-calendly"
import CloudButton from '../CloudButton';
import lang from "../../intl/langs"

const CalendlyButton = ({ language, type }) => {
  const handleClick = () => openPopupWidget({ url: "https://calendly.com/badico" })

  return (
      <CloudButton action={handleClick} type={type}>
        {lang[language]["hero.buttons.1"]}
      </CloudButton>
  )
}

export default CalendlyButton;
