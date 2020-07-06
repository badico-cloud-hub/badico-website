import React from "react"

import Cards from "../Cards/index"
import CraftmanshipLayoutContent from "../CraftmanshipLayoutContent/index"
import * as S from "./styled"

const CraftmanshipLayout = () => {
  return (
    <>
      <S.CraftmanshipLayoutWrapper>
        <CraftmanshipLayoutContent />
        <Cards />
      </S.CraftmanshipLayoutWrapper> 
    </>
  )
}

export default CraftmanshipLayout
