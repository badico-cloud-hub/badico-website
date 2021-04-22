import React from "react"
import Container from "../Container/index"
import * as S from "./styled"
import lang from "../../intl/langs"

const About = ({ language }) => {
  return (
    <S.AboutUs>
      <Container>
        <h1>{lang[language]["about.h1"]}</h1>
        <h2>{lang[language]["about.h2"]}</h2>
        <S.Text class="text-about" width="92.5%">
          {lang[language]["about.text.0"]}
        </S.Text>
        <S.Text class="text-about" width="90%">
          {lang[language]["about.text.1"]}
        </S.Text>
      </Container>
    </S.AboutUs>
  )
}

export default About
