import React, { useState, useEffect } from "react"
import Calendly from "../Calendly"
import { HeroWrapper, Info, Buttons, Button } from "./styled"
import { useStaticQuery, graphql } from "gatsby"
import * as typeformEmbed from "@typeform/embed"

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
  const [Form, setForm] = useState(null)
  useEffect(() => {
    const contactForm = typeformEmbed.makePopup(
      "https://ask767898.typeform.com/to/rRIqbEzo",
      {
        mode: "drawer_right",
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: function () {
          console.log("Typeform sucessfully submitted")
        },
      }
    )
    setForm(contactForm)
  }, [])

  return (
    <HeroWrapper>
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
          <Button
            className="contact"
            onClick={() => {
              Form.open()
            }}
          >
            Contact us
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
