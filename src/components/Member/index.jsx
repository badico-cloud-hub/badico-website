import React from "react"
import {
  MemberWrapper,
  ImgProfile,
  Content,
  Name,
  PositionContainer,
  Position,
  Description,
} from "./MemberWrapper"

const Member = props => {
  return (
    <MemberWrapper>
      <ImgProfile src="https://via.placeholder.com/150" />
      <Content>
        <Name>{props.name}</Name>
        <PositionContainer>
          <Position>{props.position}</Position>
          <Description>{props.description}</Description>
        </PositionContainer>
      </Content>
    </MemberWrapper>
  )
}

export default Member
