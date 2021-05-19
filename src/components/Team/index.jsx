import React from "react"
import Members from "./Members/index"
import { TeamWrapper, Container, Title, Description } from "./TeamWrapper"

const Team = () => {
  return (
    <TeamWrapper>
      <Container>
        <Title>Meet Our Team</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        </Description>
      </Container>

      <Members/>
    </TeamWrapper>
  )
}

export default Team
