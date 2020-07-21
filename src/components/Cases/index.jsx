import React from "react"
import Container from "../Container"
import Gallery from "../Gallery"
import { Case, CaseWrapper, View, Title } from "./styled"

const Cases = () => {
  return (
    <Case>
      <Container>
        <CaseWrapper>
          <Title>Portfolio</Title>
          <View>View more</View>
        </CaseWrapper>
        <div>
          <Gallery />
        </div>
      </Container>
    </Case>
  )
}

export default Cases
