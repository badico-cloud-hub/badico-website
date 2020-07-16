import React from "react"
import { ContentWrapper, Container, Title, Text, Buttons, Call } from "./ContentWrapper"
import Typeform from "../Typeform/index"
import Calendly from "../Calendly"

const HeroLayoutContent = () => {
  return (
    <ContentWrapper>
      <div>
        <Title>IT department Headache-free for startups</Title>
        <Text>We are your IT department</Text>
      </div>

      <Buttons>
        <Typeform/>
        <Call>
          <Calendly />
        </Call>
      </Buttons>
    </ContentWrapper>
  )
}

export default HeroLayoutContent
