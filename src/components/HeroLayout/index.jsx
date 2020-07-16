import React from "react"
import HeroLayoutContent from "../HeroLayoutContent/index"
import { HeroImg } from "../../images/components/HeroImg/index"
import Ball from "../../images/bolinhas.svg"
import { HeroWrapper, Img, ImgBall } from "./styled"
import Container from "../Container/index"

const HeroLayout = () => {
  return (
    <HeroWrapper>
      <Container>
        <HeroLayoutContent className="content" />
        <Img>
          <HeroImg className="heroImg"/>
        </Img>
        <ImgBall>
          <Ball className="ball" />
        </ImgBall>
      </Container>
    </HeroWrapper>
  )
}

export default HeroLayout
