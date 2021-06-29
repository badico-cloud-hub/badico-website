import React from "react"
import * as Styled from "./style"

import Decrease from "../images/income.svg"
import Increase from "../images/increase.svg"
import Diversification from "../images/diversification.svg"

import lang from "../../../intl/langs"

const Beneficies = ({ language }) => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Box>
          <Styled.Opportunities>
            <Styled.AlignOpportunities>
              <Styled.MiniBox>
                <Decrease className="decrease" />
                <Styled.Title>{lang[language]["iconbox.0.title"]}</Styled.Title>
                <Styled.Text>{lang[language]["iconbox.0.text"]}</Styled.Text>
              </Styled.MiniBox>
              <Styled.MiniBox>
                <Increase className="increase" />
                <Styled.Title>{lang[language]["iconbox.1.title"]}</Styled.Title>
                <Styled.Text>{lang[language]["iconbox.1.text"]}</Styled.Text>
              </Styled.MiniBox>
            </Styled.AlignOpportunities>
            <Styled.MiniBox>
              <Diversification className="diversification" />
              <Styled.Title>{lang[language]["iconbox.2.title"]}</Styled.Title>
              <Styled.Text>{lang[language]["iconbox.2.text"]}</Styled.Text>
            </Styled.MiniBox>
          </Styled.Opportunities>
          <Styled.Button>{lang[language]["form.button"]}</Styled.Button>
        </Styled.Box>
      </Styled.Wrapper>
      <Styled.Background />
    </Styled.Container>
  )
}

export default Beneficies
