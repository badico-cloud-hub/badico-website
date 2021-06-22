import React, { useState } from "react"
import Member from "./Member/index"
import {useWindowSize} from "../../../hooks/useWindowsSize"
import { MembersWrapper } from "./MembersWrapper"

const Members = ({ height, down }) => {
  const size = useWindowSize()

  return (
    <MembersWrapper height={height} overflow={down == false ? "hidden" : "visible"}>
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
        opacity={size.width >= 1366 && down == false ? 0 : 1}
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
      <Member
        img=""
        name="Thamara Mendes"
        position="Graphic Designer"
        opacity={down == false ? 0 : 1}
      />
      <Member
        img=""
        name="Camilla Vieira"
        position="Graphic Designer"
        opacity={down == false ? 0 : 1}
      />
      <Member
        img=""
        name="Yasmy Santana"
        position="Moviemaker"
        opacity={down == false ? 0 : 1}
      />
      <Member
        img=""
        name="Edson Júnior"
        position="FullStack Trainee"
        opacity={down == false ? 0 : 1}
      />
      <Member
        img=""
        name="Fabio Seixas"
        position="Fullstack Engineer"
        opacity={down == false ? 0 : 1}
      />
      <Member
        img=""
        name="Italo Feitosa"
        position="Fullstack Engineer"
        opacity={down == false ? 0 : 1}
      />
      <Member
        img=""
        name="Yuri Androulis"
        position="Frontend Engineer"
        opacity={down == false ? 0 : 1}
      />
      <Member
        img=""
        name="Wellington Gomes"
        position="CS Undergraduated"
        opacity={down == false ? 0 : 1}
      />
    </MembersWrapper>
  )
}

export default Members
