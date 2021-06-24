import React from "react"
import CalendlyButton from "../CalendlyButton"
import TypeformButton from '../TypeformButton'
import Hourglass from "../../images/ampulheta.svg"
import Wave from "../../images/wave.svg"
import Ball from "../../images/ball.svg"
import * as Styled from "./styled"
import lang from "../../intl/langs"

const HeroLayout = ({ language }) => {
  return (
    <Styled.HeroWrapper>
      <Wave className="wave" />
      <Styled.Container>
        <Styled.Info>
          <Styled.Title>{lang[language]["hero.info.h1"]}</Styled.Title>
          <Styled.Text>{lang[language]["hero.info.p"]}</Styled.Text>
          <Styled.Buttons>
            <TypeformButton language={language}/>
            <CalendlyButton language={language} type="primary"/>
          </Styled.Buttons>
        </Styled.Info>
        <Styled.BoxImage>
          <Hourglass className="hourglass" />
        </Styled.BoxImage>
      </Styled.Container>
      <Styled.BoxBall>
        <Ball className="ball" />
      </Styled.BoxBall>
    </Styled.HeroWrapper>
  )
}

export default HeroLayout
