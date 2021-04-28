import React from "react"
import { openPopupWidget } from "react-calendly"
import * as Styled from "./style"

const Calendly = ({ children }) => {
  const onClick = () => openPopupWidget({ url: "https://calendly.com/badico" })

  return (
    <>
      <Styled.Button onClick={onClick}>
        {children}
        <span /> <span /> <span /> <span />
      </Styled.Button>
    </>
  )
}

export default Calendly
