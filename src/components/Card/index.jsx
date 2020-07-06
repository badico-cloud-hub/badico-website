import React from "react"

import * as S from "./styled"

const Card = props => {
  return (
    <S.CardWrapper>
        <p>
          {props.content}
          <strong>{props.bold}</strong>
        </p>
    </S.CardWrapper>
  )
}

export default Card
