import React from "react"
import Container from "../Container/index"
import * as S from "./styled"

const About = () => {
  return (
    <S.AboutUs id="about">
      <Container>
        <h1>About us</h1>
        <h2>Who We are</h2>
        <p>
          We specialize in web and mobile development, providing all stages of
          the product, from the first design to the final product for users. Our
          methodology allows us to integrate companies in a homogeneous way,
          building and developing the company's technology department together.
        </p>
        <p>
          If your company doesn't just want to develop an application, but build
          a product that proudly generates knowledge and impact, we can and want
          to help you.
        </p>
      </Container>
    </S.AboutUs>
  )
}

export default About
