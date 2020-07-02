import React from "react"
import HeroLayoutContent from "../HeroLayoutContent/index"
import { HeroImg } from "../../images/components/index"
import * as S from "./styled"


const HeroLayout = () => {
  return (
    <S.HeroWrapper className="container-wave" >
      <HeroLayoutContent className="content"/>
      <div className="imgWrapper">
        <HeroImg className="heroImg" />
        
      </div>
      
    </S.HeroWrapper>
  )
}

export default HeroLayout
