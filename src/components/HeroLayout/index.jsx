import React from "react";
import HeroLayoutContent from "../HeroLayoutContent/index";
import { HeroImg } from "../../images/components/HeroImg/index";
import Ball from "../../images/bolinhas.svg"
import { HeroWrapper, Img, ImgBall } from "./styled";



const HeroLayout = () => {
  return (
    <HeroWrapper>
      <HeroLayoutContent className="content"/>
      <Img>
        <HeroImg className="heroImg" />
      </Img>
      <ImgBall>
        <Ball className="ball"/>
      </ImgBall>
    </HeroWrapper>
  )
}

export default HeroLayout
