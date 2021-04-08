import React from "react"

import Container from "../Container/index"
import Cards from "../Cards/index"
import CraftmanshipLayoutContent from "../CraftmanshipLayoutContent/index"
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
