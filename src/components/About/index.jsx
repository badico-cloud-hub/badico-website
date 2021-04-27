import React from "react"
import Container from "../Container/index"
import * as Styled from "./styled"
import lang from "../../intl/langs"

const About = ({ language }) => {
  return (
    <Styled.AboutUs>
        <Styled.Title>{lang[language]["about.h1"]}</Styled.Title>
        <Styled.SubTitle>{lang[language]["about.h2"]}</Styled.SubTitle>
        <Styled.Text class="text-about" width="92.5%">
          {lang[language]["about.text.0"]}
        </Styled.Text>
        <Styled.Text class="text-about" width="90%">
          {lang[language]["about.text.1"]}
        </Styled.Text>
    </Styled.AboutUs>
  )
}

export default About
