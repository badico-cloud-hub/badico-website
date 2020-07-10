import React from "react"

import Card from "../Card/index"
import Wrapper from "./CardsWrapper"

const Cards = () => {
  return (
    <Wrapper>
      <Card
        content="Not only working software, but also "
        bold="well-crafted software"
      />
     <Card
        content="Not only responding to change, but also "
        bold="steadily adding value;"
      />
      <Card
        content="Not only individuals and interactions, but also "
        bold="a community of professionals;"
      />
      <Card
        content="Not only customer collaboration, but also "
        bold="productive partnerships."
     />
    </Wrapper>
  )
}

export default Cards
