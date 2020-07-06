import React from "react";

import Card from "../Card/index";
import * as S from "./styled";

const Cards = () => {
    return (
        <S.CardsWrapper>
            <Card content="Not only working software, but also " bold="well-crafted software" />
            <Card content="Not only responding to change, but also " bold="steadily adding value;"/>
            <Card content="Not only individuals and interactions, but also " bold="a community of professionals;"/>
            <Card content="Not only customer collaboration, but also " bold="productive partnerships."/>
        </S.CardsWrapper>
    )
}

export default Cards;