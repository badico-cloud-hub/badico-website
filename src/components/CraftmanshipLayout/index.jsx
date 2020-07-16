import React from "react"

import Container from "../Container/index"
import Cards from "../Cards/index"
import CraftmanshipLayoutContent from "../CraftmanshipLayoutContent/index"
import Wrapper from "./CraftWrapper"

const CraftmanshipLayout = () => {
  return (
    <Wrapper
      style={{
        height: "100%",
        margin: "4rem 0",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container>
        <CraftmanshipLayoutContent />
        <Cards />
      </Container>
    </Wrapper>
  )
}

export default CraftmanshipLayout
