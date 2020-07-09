import React from "react"

import Cards from "../Cards/index"
import CraftmanshipLayoutContent from "../CraftmanshipLayoutContent/index"
import Wrapper from "./wrapper";

const CraftmanshipLayout = () => {
  return (
    <>
      <Wrapper>
        <CraftmanshipLayoutContent />
        <Cards />
      </Wrapper> 
    </>
  )
}

export default CraftmanshipLayout
