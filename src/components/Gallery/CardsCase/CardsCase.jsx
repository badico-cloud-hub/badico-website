import React, { useState } from "react"
import { Render, Content, Image, DivText, Title, Text } from "./styled"

export const CardsCase = props => {
  return (
    <>
      <Render className="front">
        <Content>
          <img className="img" src={props.Image} />
          <Image height={props.height} width={props.width} top={props.top}>
            <props.Logo />
          </Image>
        </Content>
      </Render>
      <Render className="back">
        <Content>
          <DivText>{props.children}</DivText>
          <Image height={props.height} width={props.width} top={props.top}>
            <props.Logo />
          </Image>
        </Content>
      </Render>
    </>
  )
}