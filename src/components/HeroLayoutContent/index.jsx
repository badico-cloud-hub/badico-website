import React from "react"
import { ContentWrapper, Title, Text, Buttons, Call } from "./ContentWrapper"
//import Calendly from "../Calendly"
import Typeform from "../Typeform/index"

const HeroLayoutContent = () => {
  return (
    <ContentWrapper>
      <div>
        <Title>IT department Headache-free for startups</Title>
        <Text>We are your IT department</Text>
      </div>

      <Buttons>
        <Typeform className="contact"/>
        {/*<Call>
          <Calendly />
        </Call>*/}
      </Buttons>
    </ContentWrapper>
  )
}

export default HeroLayoutContent
