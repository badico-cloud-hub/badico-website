import React, { useState } from "react"
import { Render, Content, Image, DivText, Title, Text } from "./styled"

export const CardsCase = props => {
  return (
    <>
      <Render className="front">
        <Content>
          <img className="img" src={props.Image} />
          <Image>
            <props.Logo />
          </Image>
        </Content>
      </Render>
      <Render className="back">
        <Content>
          <DivText>{props.children}</DivText>
          <Image>
            <props.Logo />
          </Image>
        </Content>
      </Render>
    </>
  )
}

export const CardCaseJump = props => {
  const [state, setState] = useState(false)
  console.log(state)
  return (
    <>
      {state === false ? (
        <Render onClick={() => setState(!state)}>
          <Content>
            <img src={props.Image} />
            <Image
              style={{
                top: props.top,
                height: props.height,
                width: props.width,
              }}
            >
              <img src={props.LogoJump} />
            </Image>
          </Content>
        </Render>
      ) : (
        <Render onClick={() => setState(!state)}>
          <Content>
            <DivText>{props.children}</DivText>
            <Image
              style={{
                top: props.top,
                height: props.height,
                width: props.width,
              }}
            >
              <img
                src={props.LogoJump}
                style={{ height: props.height, width: props.width }}
              />
            </Image>
          </Content>
        </Render>
      )}
    </>
  )
}
