import React, {useState} from "react"
import Members from "./components/Members/index"
import Arrow from "../../images/arrow_down.svg"
import { TeamWrapper, Container, Title, Description, ButtonDrop } from "./TeamWrapper"

const Team = () => {
  const [down, setDown] = useState(false)
  const [height, setHeight] = useState({
    mobile: "336px"
  })
  const [rotate, setRotate] = useState("rotate(0)")

  const dropDown = () => {
    console.log(down)
    setDown(!down)

    setHeight( (prev) => {
      if(prev.mobile == "504px"){
        return {
          mobile: "336px"
        }
      } else {
        return {
          mobile: "504px"
        }
      }
    })

    setRotate( (prev) => {
      if( prev == "rotate(180deg)"){
        return "rotate(0)"
      } else {
        return "rotate(180deg)"
      }
    })
  }

  return (
    <TeamWrapper>
      <Container>
        <Title>Meet Our Team</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        </Description>
      </Container>
      <Members down={down} height={height}/>
      <ButtonDrop onClick={dropDown} rotate={rotate}>
        <Arrow/>
      </ButtonDrop>
    </TeamWrapper>
  )
}

export default Team
