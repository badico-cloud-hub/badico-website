import React from "react"
import * as S from "./styled"
import {Link} from 'gatsby';

const HeroLayoutContent = () => {
  return (
    <S.ContentWrapper>
      <div className="container">
        <h1>IT department Headache-free for startups</h1>
        <p>We are your IT department</p>
      </div>

      <S.Buttons>
      <Link to="https://wellingtondomingosgomes.typeform.com/to/U119jLZD" className="link" target="_blank">
        <button type="button" className="contact">
          Contact us
        </button>
        </Link>
        <Link to="https://calendly.com/s/HARwspdG" className="link2" target="_blank">
        <button type="button" className="call">
          Schedule a call 
        </button>
        </Link>
      </S.Buttons>
    </S.ContentWrapper>
  )
}

export default HeroLayoutContent
