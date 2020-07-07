import React from "react"
import * as S from "./styled"
import Typeform from "../Typeform/index"
import Calendly from "../Calendly"

const HeroLayoutContent = () => {
  return (
    <S.ContentWrapper>
      <div className="container">
        <h1>IT department Headache-free for startups</h1>
        <p>We are your IT department</p>
      </div>

      <S.Buttons>
        <Typeform />
        <button className="call">
          <Calendly />
        </button>
      </S.Buttons>
    </S.ContentWrapper>
  )
}

export default HeroLayoutContent
