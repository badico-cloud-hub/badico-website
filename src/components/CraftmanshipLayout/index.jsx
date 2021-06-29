import React from "react"

import Container from "../Container/index"
import Cards from "./Cards"
import CraftmanshipLayoutContent from "./CraftmanshipLayoutContent"
import Wrapper from "./CraftWrapper"

const CraftmanshipLayout = ({ language }) => {
  return (
    <Wrapper>
      <Container>
        <CraftmanshipLayoutContent language={language} />
        <Cards language={language}/>
      </Container>
    </Wrapper>
  )
}

export default CraftmanshipLayout
