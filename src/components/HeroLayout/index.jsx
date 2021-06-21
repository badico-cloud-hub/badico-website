import React, { useState, useEffect } from "react"
import Calendly from "../Calendly"
import Hourglass from "../../images/ampulheta.svg"
import Wave from "../../images/wave.svg"
import Ball from "../../images/ball.svg"
import * as typeformEmbed from "@typeform/embed"
import * as Styled from "./styled"
import lang from "../../intl/langs"

const HeroLayout = ({ language }) => {
  const [form, setForm] = useState(null)

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
    <Styled.HeroWrapper>
      <Wave className="wave" />
      <Styled.Container>
        <Styled.Info>
          <Styled.Title>{lang[language]["hero.info.h1"]}</Styled.Title>
          <Styled.Text>{lang[language]["hero.info.p"]}</Styled.Text>
          <Styled.Buttons>
            <Styled.ButtonContact
              onClick={() => {
                form.open()
              }}
            >
              {lang[language]["hero.buttons.0"]}
              <span /> <span /> <span /> <span />
            </Styled.ButtonContact>
            <Calendly >
              {lang[language]["hero.buttons.1"]}
            </Calendly>
          </Styled.Buttons>
        </Styled.Info>
        <Styled.BoxImage>
          <Hourglass className="hourglass" />
        </Styled.BoxImage>
      </Styled.Container>
      <Styled.BoxBall>
        <Ball className="ball" />
      </Styled.BoxBall>
    </Styled.HeroWrapper>
  )
}

export default HeroLayout
