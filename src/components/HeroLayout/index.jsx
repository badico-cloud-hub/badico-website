import React from "react"
import Calendly from "../Calendly"
import Bg from "../../images/bgDesktop.svg"
import { HeroWrapper, Info, Buttons, Button } from "./styled"
import { useStaticQuery, graphql } from "gatsby"
import * as typeformEmbed from "@typeform/embed"
import Typeform from "../Typeform/index"

const HeroLayout = () => {
  const { img } = useStaticQuery(
    graphql`
      query {
        img: file(relativePath: { eq: "ampulheta2.png" }) {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <HeroWrapper>
      <Bg fill="#0e273b" className="bgWave" />
      <Info>
        <h1>
          IT department
          <br />
          Headache-free
          <br />
          for startups
        </h1>
        <p>We are your IT department</p>
        <Buttons>
          <Button className="contact">
            <Typeform />
          </Button>
          <Button className="call">
            <Calendly />
          </Button>
        </Buttons>
      </Info>
      <img
        src={img.childImageSharp.fluid.src}
        className="heroImg"
        alt="An image of a hourglass"
      />
      {/* <Ball className="ball" /> */}

      {/* <HeroLayoutContent className="content" /> */}
      {/* <Img>
          <HeroImg className="heroImg"/>
        </Img>
        <ImgBall>
          <Ball className="ball" />
        </ImgBall> */}
    </HeroWrapper>
  )
}

export default HeroLayout
