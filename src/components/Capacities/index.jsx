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
import lang from "../../intl/langs"

const Capacities = ({ language }) => {
  return (
    <CapacitiesWrapper>
      <Container>
        <Title id="capacities">{lang[language]["capacities.title"]}</Title>
        <Cards>
          <Images pMarginTop="10px" width="92%">
            <Mobile className="img mobile" />
            <p className="mobileText">{lang[language]["capacities.cards.0"]}</p>
          </Images>
          <Images pMarginTop="10px" width="92%">
            <Web className="img" />
            <p>{lang[language]["capacities.cards.1"]}</p>
          </Images>
          <Images pMarginTop="18px" width="60%">
            <Cloud className="img" />
            <p>{lang[language]["capacities.cards.2"]}</p>
          </Images>
          <Images pMarginTop="18px" width="60%">
            <Serverless className="img" />
            <p>{lang[language]["capacities.cards.3"]}</p>
          </Images>
          <Images pMarginTop="18px" width="92%">
            <Clean className="img" />
            <p>{lang[language]["capacities.cards.4"]}</p>
          </Images>
          <Images pMarginTop="18px" width="92%">
            <Infra className="img" />
            <p>{lang[language]["capacities.cards.5"]}e</p>
          </Images>
          <Images pMarginTop="10px" width="92%">
            <Continuos className="img" />
            <p>{lang[language]["capacities.cards.6"]}</p>
          </Images>
          <Images pMarginTop="10px" width="92%">
            <Ux className="img" />
            <p>{lang[language]["capacities.cards.7"]}</p>
          </Images>
        </Cards>
      </Container>
      <div id="about"></div>
    </CapacitiesWrapper>
  )
}

export default Capacities
