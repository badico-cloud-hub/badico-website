import React from "react"
import { ProcessWrapper, Title, Steps, Content, Cards, Card } from "./ProcessWrapper"
import Container from "../Container/index"
import PizzaIcon from "../../images/pizza-icon.svg"
import SetIcon from "../../images/setting-icon.svg"
import ToolIcon from "../../images/tool-icon.svg"
import AvatarIcon from "../../images/avatar-icon.svg"
import Step1 from "../../images/mobile1.svg"
import Step2 from "../../images/mobile2.svg"
import Step3 from "../../images/mobile3.svg"
import Step4 from "../../images/mobile4.svg"
import Producao from "../../images/produção1.svg"
import StepsDesktop from "../../images/desktop.svg"

const ProcessLayout = () => {
  return (
    <ProcessWrapper>
      <Container>
        <Title>Our process</Title>
        <Producao className="prodImg"/>
        {/*<Producao/>*/}
        <Steps>
          <StepsDesktop className="stepsDesktop" />
          <Cards>
          <Card className="no-reverse card1">
            <Step1 className="step1 none" />
            <Content className="content1">
              <PizzaIcon className="icon" />
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer</p>
            </Content>
          </Card>
          <Card className="reverse card2">
            <Step2 className="none" />
            <Content className="content2">
              <SetIcon className="icon" />
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer</p>
            </Content>
          </Card>
          <Card className="no-reverse card3">
            <Step3 className="none" />
            <Content className="content3">
              <ToolIcon className="icon" />
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer</p>
            </Content>
          </Card>
          <Card className="reverse card4">
            <Step4 className="none" />
            <Content className="content4">
              <AvatarIcon className="icon" />
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer</p>
            </Content>
          </Card>
          </Cards> 
        </Steps>
      </Container>
    </ProcessWrapper>
  )
}

export default ProcessLayout
