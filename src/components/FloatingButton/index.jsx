import React from "react"
import ButtonStyle from "./ButtonStyle"
import Calendly from "../Calendly"
import Typeform from "../Typeform/index"

const FloatingButton = () => {
  return (
    <ButtonStyle>
      <div className="buttonsFilho">
        <Typeform/>
        <button><Calendly/></button>
      </div>
    </ButtonStyle>
  )
}

export default FloatingButton
