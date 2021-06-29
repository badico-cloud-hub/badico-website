import React from "react"
import * as Styled from "./style"

const ButtonCloud = ({ children, action, type }) => {

  return (
    <>
      <Styled.Button onClick={action} type={type}>
        {children}
        <span /> <span /> <span /> <span />
      </Styled.Button>
    </>
  )
}

export default ButtonCloud;
