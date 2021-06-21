import React from "react"

import Container from "../Container/index"
import Cards from "./Components/Cards"
import CraftmanshipLayoutContent from "./Components/CraftmanshipLayoutContent"
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
