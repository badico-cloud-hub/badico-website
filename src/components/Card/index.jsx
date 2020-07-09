import React from "react"

import * as S from "./styled"

const Card = props => {
  return (
    <S.CardWrapper>
      <div className="container">
        <p>
          {props.content}
          <strong>{props.bold}</strong>
        </p>
      </div>
    </S.CardWrapper>
  )
}

export default Card
