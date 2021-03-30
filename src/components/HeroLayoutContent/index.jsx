import React from "react"
import { ContentWrapper, Text, Buttons, Call } from "./ContentWrapper"
//import Calendly from "../Calendly"
import Typeform from "../Typeform/index"
import BgMobile from "../../images/bgMobile.svg"

const HeroLayoutContent = () => {
  return (
    <ContentWrapper>
      <BgMobile className="bgMobile"/>
      <Text>
        <h1>IT department Headache-free for startups</h1>
        <p>We are your IT department</p>
      </Text>
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
