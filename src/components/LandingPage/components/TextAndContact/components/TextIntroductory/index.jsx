import React from "react"
import * as Styled from "./style"
import lang from "../../../../../../intl/langs"

const TextIntroductory = ({ language }) => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>{lang[language]["hero.title"]}</Styled.Title>
        <Styled.Text>{lang[language]["hero.subtitle"]}</Styled.Text>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default TextIntroductory
