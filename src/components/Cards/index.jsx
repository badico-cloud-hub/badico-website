import React from "react"

import Card from "../Card/index"
import Wrapper from "./CardsWrapper"
import lang from "../../intl/langs"

const Cards = ({ language }) => {
  return (
    <Wrapper>
      <Card
        content={lang[language]["cards.card.0"]}
        bold={lang[language]["cards.card.0.bold"]}
      />
      <Card
        content={lang[language]["cards.card.1"]}
        bold={lang[language]["cards.card.1.bold"]}
      />
      <Card
        content={lang[language]["cards.card.2"]}
        bold={lang[language]["cards.card.2.bold"]}
      />
      <Card
        content={lang[language]["cards.card.3"]}
        bold={lang[language]["cards.card.3.bold"]}
      />
    </Wrapper>
  )
}

export default Cards
