import React from "react"
import * as Styled from "./style"
import lang from "../../../../intl/langs"

const TeamComplete = ({ language }) => {
  return (
    <Styled.Container>
      <Styled.Title>{lang[language]["section.0.title"]}</Styled.Title>
      <Styled.Text>{lang[language]["section.0.text"]}</Styled.Text>
    </Styled.Container>
  )
}

export default TeamComplete
