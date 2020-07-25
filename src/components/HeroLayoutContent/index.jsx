import React from "react"
import { ContentWrapper, Title, Text, Buttons, Call } from "./ContentWrapper"
import Calendly from "../Calendly"
//import Typeform from "../Typeform/index"

const HeroLayoutContent = () => {
  return (
    <ContentWrapper>
      <div>
        <Title>We are your IT department</Title>
        <Text>
          A Headache-free IT department. We take care of the tech side, so you
          can focus on the Business side.
        </Text>
      </div>

      <Buttons>
        {/*<Typeform/>*/}
        <Call>
          <Calendly />
        </Call>
      </Buttons>
    </ContentWrapper>
  )
}

export default HeroLayoutContent
