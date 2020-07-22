import React from "react"
import FloatWrap from "./FloatWrap"
import Calendly from "../Calendly"
import Typeform from "../Typeform/index"
import { Chat } from "../../images/components/Chat/index"
import Calendar from "../../images/calendar.svg"
import Email from "../../images/email.svg"

const FloatingButton = () => {
  return (
    <FloatWrap>
      <div className="back cloud"></div>
      <div className="div1 cloud"></div>
      <div className="div2 cloud"></div>
      <div className="div3 cloud"></div>
      <div className="div4 cloud"></div>
      <div className="icon">
        <Chat className="chat" />
      </div>
      <div className="buttonsFilho">
        <Typeform className="contact">
          
        </Typeform>

        <button className="call">
          <Calendly>
  
          </Calendly>
        </button>
      </div>
    </FloatWrap>
  )
}

export default FloatingButton
