import React from "react"
import * as Styled from "./style"
import Cards from "./Cards"
import Carousel from './CarouselV2'
const Craftmanship = ({ language }) => {

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>
          We deliver value every week to our clients. Value means code in
          production ready.
        </Styled.Title>
        <Styled.SubTitle>
          Lorem ipsum ut litora interdum donec etiam sollicitudin quis, quisque
          fringilla urna mollis rhoncus ante habitant sit
        </Styled.SubTitle>
        <Carousel />
      </Styled.Wrapper>
    </Styled.Container>
  )
}
export default Craftmanship
