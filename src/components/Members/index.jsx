import React from "react"
import Member from "../Member/index"

const Members = () => {
  return (
    <div>
      <Member
        img=""
        name="Lucas Badico"
        position="Cloud Engineer | CTO"
        description="Devops Specialist, Solutions architect, Backend Specialist."
      />
      <Member
        img=""
        name="Pedro Soares"
        position="Frontend Engineer"
        description="Micro Frontends, Nodejs contributor AWS Developer."
      />
      <Member
        img=""
        name="Danilo Sampaio"
        position="Fullstack Engineer"
        description="REST API, Frontend Integrations, AWS Developer"
      />
    </div>
  )
}

export default Members
