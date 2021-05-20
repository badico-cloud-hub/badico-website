import React, { useState } from "react"
import Member from "./components/Member/index"
import {useWindowSize} from "../../../../hooks/useWindowsSize"
import { MembersWrapper } from "./MembersWrapper"

const Members = (props) => {
  const size = useWindowSize()

  let down = props.down
  let height = props.height

  return (
    <MembersWrapper height={size.width < 768 && height.mobile} overflow={down == false ? "hidden" : "visible"}>
      <Member
        img=""
        name="Lucas Badico"
        position="Cloud Engineer | CTO"
      />
      <Member
        img=""
        name="Pedro Soares"
        position="Frontend Engineer"
      />
      <Member
        img=""
        name="Danilo Sampaio"
        position="Fullstack Engineer"
      />
      <Member
        img=""
        name="Renata Zadravec"
        position="Business and People Manager"
      />
      <Member
        img=""
        name="Ana Lúcia"
        position="Finance Analyst"
        opacity={down == false ? 0 : 1}
      />
      <Member
        img=""
        name="Stephany Soares"
        position="UI/UX Designer"
        opacity={down == false ? 0 : 1}
      />
    </MembersWrapper>
  )
}

export default Members
