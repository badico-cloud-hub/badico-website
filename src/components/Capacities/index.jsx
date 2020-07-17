import React from "react"
import Container from "../Container"
import Mobile from "../../images/capacities/Mobile-development-with-fluter.svg"
import Web from "../../images/capacities/Web-development.svg"
import Clean from "../../images/capacities/Clean.svg"
import Infra from "../../images/capacities/Infra-as-code.svg"
import Cloud from "../../images/capacities/Cloud-arquiteture.svg"
import Serverless from "../../images/capacities/Serverless-arquiteture.svg"
import Continuos from "../../images/capacities/Continuos.svg"
import Ux from "../../images/capacities/UX-strategy.svg"
import { Title, CapacitiesWrapper, Images, Cards } from "./styled"

const Capacities = () => {
  return (
    <CapacitiesWrapper>
      <Container>
        <Title>Capacities</Title>
        <Cards>
          <Images>
            <Mobile className="img mobile" />
            <p className="mobileText">Mobile development with fluter</p>
          </Images>
          <Images>
            <Web className="img" />
            <p>Web development with vue and react</p>
          </Images>
          <Images>
            <Clean className="img" />
            <p>Clean software arquiteture</p>
          </Images>
          <Images>
            <Infra className="img" />
            <p>Infra as code</p>
          </Images>
          <Images>
            <Cloud className="img" />
            <p>Cloud arquiteture</p>
          </Images>
          <Images>
            <Serverless className="img" />
            <p>Serverless arquiteture</p>
          </Images>
          <Images>
            <Continuos className="img" />
            <p>Continuos integration and delivery</p>
          </Images>
          <Images>
            <Ux className="img" />
            <p>UX strategy</p>
          </Images>
        </Cards>
      </Container>
    </CapacitiesWrapper>
  )
}

export default Capacities
