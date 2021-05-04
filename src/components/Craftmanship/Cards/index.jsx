import React from "react"
import * as Styled from "./styled"
import CheckedIcon from "../../LandingPage/images/checkedicon.svg"

const Cards = ({ language, ...props }) => {
  return (
    <Styled.Card>
      <Styled.TitleImg>
        <Styled.DivSvg>
          <CheckedIcon className="icon"/>
        </Styled.DivSvg>
        <Styled.Title>{props.Title}</Styled.Title>
      </Styled.TitleImg>
      <Styled.Text>{props.Text}</Styled.Text>
    </Styled.Card>
  )
}

export default Cards
