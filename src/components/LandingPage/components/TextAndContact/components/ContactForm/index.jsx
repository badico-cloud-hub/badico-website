import React from "react"
import Coder from "../../../../images/coder.svg"
import * as Styled from "./style"

const ContactForm = () => {
  return (
    <Styled.Container>
      <Styled.Box>
        <Styled.DivCoder>
          <Coder className="coder"/>
        </Styled.DivCoder>
        <Styled.Title>
          Lorem ipsum nisi facilisis torquent suspendisse non
        </Styled.Title>
        <Styled.Form method="post">
          <Styled.Input placeholder="Seu nome" />
          <Styled.Input placeholder="Seu e-mail" />
          <Styled.Input placeholder="Lorem ipsum" />
          <Styled.Button type="submit">
            Quero ter um time incrível
          </Styled.Button>
        </Styled.Form>
      </Styled.Box>
    </Styled.Container>
  )
}

export default ContactForm
