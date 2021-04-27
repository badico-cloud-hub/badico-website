import React from "react"
import * as Styled from "./style"
import Jump from "../../images/jump.png"
import ZemoPay from "../../images/zemo.svg"
import Tailor from "../../images/tailor.svg"
import Harv from "../../images/harv.svg"
import Bizaline from "../../images/bizaline.svg"
import lang from "../../intl/langs"

const Companies = ({ language }) => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
      <Styled.TextCompanies>{lang[language]["companies.text"]}</Styled.TextCompanies>
      <Styled.DivImages>
        <Styled.PrimaryDiv>
          <img src={Jump} className="logoJump" />
          <ZemoPay className="logoZemo" />
          <Tailor className="logoTailor" />
        </Styled.PrimaryDiv>
        <Styled.SecondDiv>
          <Harv className="logoHarv" />
          <Bizaline className="logoBizaline" />
        </Styled.SecondDiv>
      </Styled.DivImages>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default Companies
