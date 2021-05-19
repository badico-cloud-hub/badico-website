import React from "react"
import {
  MemberWrapper,
  ImgProfile,
  Content,
  Name,
  Position,
  ContainerContent,
} from "./MemberWrapper"

const Member = props => {
  return (
    <MemberWrapper>
      <ContainerContent>
        <ImgProfile src="https://via.placeholder.com/150" />
        <Content>
          <Name>{props.name}</Name>
          <Position>{props.position}</Position>
        </Content>
      </ContainerContent>
    </MemberWrapper>
  )
}

export default Member
