import React from "react"
import * as S from "./styled"

const HeroLayoutContent = () => {
  return (
    <S.ContentWrapper>
      <div className="container">
        <h1>IT department Headache-free for startups</h1>
        <p>We are your IT department</p>
      </div>

      <S.Buttons>
        <button type="button" className="contact">
          Contact us
        </button>
        <button type="button" className="call">
          Schedule a call
        </button>
      </S.Buttons>
    </S.ContentWrapper>
  )
}

export default HeroLayoutContent
