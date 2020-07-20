import React from "react"
import ButtonStyle from "./ButtonStyle"
import Calendly from "../Calendly"
import Typeform from "../Typeform/index"
import { Chat } from "../../images/components/Chat/index"

const FloatingButton = () => {
  return (
    <ButtonStyle>
      <div className="buttonsFilho">
        <Typeform/>
        <button><Calendly/></button>
      </div>
      <Chat className = "chat"/>
    </ButtonStyle>
  )
}

export default FloatingButton
