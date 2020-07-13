import React from "react";
import Members from "../Members/index"
import { TeamWrapper, Title, Description } from "./TeamWrapper"

const Team = () => {
  return (
    <TeamWrapper>
      <Title>Meet Our Team</Title>
      <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
      </Description>
      <Members/>
    </TeamWrapper>
  )
}

export default Team;
