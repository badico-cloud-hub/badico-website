import React from "react"
import ContactForm from "./components/ContactForm"
import Text from "./components/TextIntroductory"
import * as Styled from "./style"

const TextAndContact = () => {
  return (
    <Styled.Container>
      {/* <Waveleft className="waveleft" /> */}
      {/* <Waveright className="waveright" /> */}
      <Text />
      <ContactForm />
    </Styled.Container>
  )
}

export default TextAndContact
