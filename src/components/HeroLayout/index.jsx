import React, { useState, useEffect } from "react"
import Calendly from "../Calendly"
import { HeroWrapper, Info, Buttons, Button } from "./styled"
import { useStaticQuery, graphql } from "gatsby"
import * as typeformEmbed from "@typeform/embed"
import lang from "../../intl/langs"

const HeroLayout = ({ language }) => {
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
        <h1>{lang[language]["hero.info.h1"]}</h1>
        <p>{lang[language]["hero.info.p"]}</p>
        <Buttons>
          <Button
            className="contact"
            onClick={() => {
              Form.open()
            }}
          >
            {lang[language]["hero.buttons.0"]}
          </Button>
          <Button className="call">
            <Calendly text={lang[language]["hero.buttons.1"]} />
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
