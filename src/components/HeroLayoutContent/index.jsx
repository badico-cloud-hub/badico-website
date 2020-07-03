import React from "react"
import * as S from "./styled"
import { Link } from "gatsby"
import Typeform from "../Typeform/index"

const HeroLayoutContent = () => {
  return (
    <S.ContentWrapper>
      <div className="container">
        <h1>IT department Headache-free for startups</h1>
        <p>We are your IT department</p>
      </div>

      <S.Buttons>
        <Typeform />
        <Link
          to="https://calendly.com/s/HARwspdG"
          className="link2"
          target="_blank"
        >
          <button type="button" className="call">
            Schedule a call
          </button>
        </Link>
      </S.Buttons>
    </S.ContentWrapper>
  )
}

export default HeroLayoutContent
