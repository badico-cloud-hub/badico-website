import React from "react"
import Container from "../Container"
import Gallery from "./components/Gallery"
import { Case, CaseWrapper, Title } from "./styled"

const Cases = () => {
  return (
    <Case>
      <Container>
        <CaseWrapper>
          <Title>Success cases</Title>
        </CaseWrapper>
        <div>
          <Gallery />
        </div>
      </Container>
    </Case>
  )
}

export default Cases
