import React from "react";
import HeroLayoutContent from "../HeroLayoutContent/index";
import { HeroImg } from "../../images/components/HeroImg/index";
import Ball from "../../images/bolinhas.svg"
import * as S from "./styled";



const HeroLayout = () => {
  return (
    <S.HeroWrapper className="container-wave" >
      <HeroLayoutContent className="content"/>
      <div className="imgWrapper">
        <HeroImg className="heroImg" />
      </div>
      <div className="imgBallWrapper">
        <Ball className="ball"/>
      </div>
      
    </S.HeroWrapper>
  )
}

export default HeroLayout
