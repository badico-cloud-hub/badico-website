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
        <Title id="capacities">Capacities</Title>
        <Cards>
          <Images pMarginTop='10px' width='92%'>
            <Mobile className="img mobile" />
            <p className="mobileText">Mobile development with flutter</p>
          </Images>
          <Images pMarginTop='10px' width='92%'>
            <Web className="img" />
            <p>Web development with vue and react</p>
          </Images>
          <Images pMarginTop='18px' width='60%'>
            <Cloud className="img" />
            <p>Cloud architeture</p>
          </Images>
          <Images pMarginTop='18px' width='60%'>
            <Serverless className="img" />
            <p>Serverless architeture</p>
          </Images>
          <Images pMarginTop='18px' width='92%'>
            <Clean className="img" />
            <p>Clean software architeture</p>
          </Images>
          <Images pMarginTop='18px' width='92%'>
            <Infra className="img"/>
            <p>Infra as code</p>
          </Images>
          <Images pMarginTop='10px' width='92%'>
            <Continuos className="img" />
            <p>Continuous integration and continuous delivery</p>
          </Images>
          <Images pMarginTop='10px' width='92%' >
            <Ux className="img" />
            <p>UX strategy</p>
          </Images>
        </Cards>
      </Container>
      <div id="about"></div>
    </CapacitiesWrapper>
  )
}

export default Capacities
