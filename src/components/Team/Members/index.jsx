import React from "react"
import Member from "./Member/index"
import { MembersWrapper } from "./MembersWrapper"

const Members = () => {
  return (
    <MembersWrapper>
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
    </MembersWrapper>
  )
}

export default Members
