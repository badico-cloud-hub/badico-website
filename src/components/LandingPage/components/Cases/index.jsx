import React from "react"
import * as Styled from "./style"
import Gallery from "../../../Cases/components/Gallery"
import lang from "../../../../intl/langs"

const Cases = ({ language }) => {
  return (
    <Styled.Container>
      <Styled.Title>{lang[language]["succescase.title"]}</Styled.Title>
      <Styled.Text>{lang[language]["succescase.text"]}</Styled.Text>
      <Gallery />
      <Styled.Button>{lang[language]["form.button"]}</Styled.Button>
    </Styled.Container>
  )
}

export default Cases
