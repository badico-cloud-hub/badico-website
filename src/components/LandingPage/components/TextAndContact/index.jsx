import React from "react"
import ContactForm from "./components/ContactForm"
import Text from "./components/TextIntroductory"
import * as Styled from "./style"
// import Waveleft from "../../images/ondaleft.svg"
// import Waveright from "../../images/ondaright.svg"

const TextAndContact = ({ language }) => {
  return (
    <Styled.Container>
      {/* <Waveleft className="waveleft" /> */}
      {/* <Waveright className="waveright" /> */}
      <Text language={language} />
      <ContactForm language={language} />
    </Styled.Container>
  )
}

export default TextAndContact
