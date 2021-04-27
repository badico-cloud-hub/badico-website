import React from "react"
import * as Styled from "./style"

import Decrease from "../../images/income.svg"
import Increase from "../../images/increase.svg"
import Diversification from "../../images/diversification.svg"

const Beneficies = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Box>
          <Styled.Opportunities>
            <Styled.AlignOpportunities>
              <Styled.MiniBox>
                <Decrease className="decrease" />
                <Styled.Title>Diminuir custo</Styled.Title>
                <Styled.Text>
                  Lorem ipsum nisi facilisis torquent suspendisse non, quis
                  lobortis interdum ante conubia.
                </Styled.Text>
              </Styled.MiniBox>
              <Styled.MiniBox>
                <Increase className="increase" />
                <Styled.Title>Aumentar renda</Styled.Title>
                <Styled.Text>
                  Lorem ipsum nisi facilisis torquent suspendisse non, quis
                  lobortis interdum ante conubia.
                </Styled.Text>
              </Styled.MiniBox>
            </Styled.AlignOpportunities>
            <Styled.MiniBox>
              <Diversification className="diversification" />
              <Styled.Title>Diminuir riscos</Styled.Title>
              <Styled.Text>
                Lorem ipsum nisi facilisis torquent suspendisse non, quis
                lobortis interdum ante conubia.
              </Styled.Text>
            </Styled.MiniBox>
          </Styled.Opportunities>
          <Styled.Button>Quero ter um time incrível</Styled.Button>
        </Styled.Box>
      </Styled.Wrapper>
      <Styled.Background />
    </Styled.Container>
  )
}

export default Beneficies
