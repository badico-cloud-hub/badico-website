import React from "react";

import { CardWrapper, Content, Container } from "./CardWrapper";

const Card = props => {
  return (
    <CardWrapper>
      <Container>
        <Content>
          {props.content}
          <strong>{props.bold}</strong>
        </Content>
      </Container>
    </CardWrapper>
  )
}

export default Card;
