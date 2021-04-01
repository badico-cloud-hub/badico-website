import React from "react"

import Container from "../Container/index"
import Cards from "../Cards/index"
import CraftmanshipLayoutContent from "../CraftmanshipLayoutContent/index"
import Wrapper from "./CraftWrapper"

const CraftmanshipLayout = () => {
  return (
    <Wrapper>
      <Container>
        <CraftmanshipLayoutContent />
        <Cards />
      </Container>
    </Wrapper>
  )
}

export default CraftmanshipLayout
