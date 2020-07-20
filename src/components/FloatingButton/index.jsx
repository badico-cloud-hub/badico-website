import React from "react"
import FloatWrap from "./FloatWrap"
import Calendly from "../Calendly"
import Typeform from "../Typeform/index"
import { Chat } from "../../images/components/Chat/index"

const FloatingButton = () => {
  return (
    <FloatWrap>
      <div className="icon">
        <Chat className="chat" />
      </div>
      <div className="buttonsFilho">
        <Typeform />
        <button>
          <Calendly />
        </button>
      </div>
    </FloatWrap>
  )
}

export default FloatingButton
