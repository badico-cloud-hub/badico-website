import React from "react"
import Coder from "../../../../images/coder.svg"
import * as Styled from "./style"
import lang from "../../../../../../intl/langs"

const ContactForm = ({ language }) => {
  return (
    <Styled.Container>
      <Styled.Box>
        <Styled.DivCoder>
          <Coder className="coder" />
        </Styled.DivCoder>
        <Styled.Title>{lang[language]["form.header"]}</Styled.Title>
        <Styled.Form method="post">
          <Styled.Input placeholder="Seu nome" />
          <Styled.Input placeholder="Seu e-mail" />
          <Styled.Input placeholder="Lorem ipsum" />
          <Styled.Button type="submit">
            {lang[language]["form.button"]}
          </Styled.Button>
        </Styled.Form>
      </Styled.Box>
    </Styled.Container>
  )
}

export default ContactForm
