import React, {useState, useEffect} from "react"
import Members from "./Members/index"
import Arrow from "../../images/arrow_down.svg"
import {useWindowSize} from "../../hooks/useWindowsSize"
import { TeamWrapper, Container, Title, Description, ButtonDrop } from "./TeamWrapper"

const Team = () => {
  const [down, setDown] = useState(false)
  const size = useWindowSize()
  const [height, setHeight] = useState("")
  const [rotate, setRotate] = useState("rotate(0)")

  useEffect( () => {
    if(size.width < 768){
      return setHeight("336px")
    }
    if(size.width >= 768 && size.width < 1024){
      return setHeight("786px")
    }
    if(size.width >= 1024 && size.width < 1920){
      return setHeight("391px")
    }
    if(size.width >= 1920){
      return setHeight("439px")
    }
  }, [size.width])

  const dropDown = () => {
    setDown(!down)

    setHeight( (prev) => {
      if (prev =='336px') {
        return "1176px"
      } 
      if (prev == "1176px"){
        return "336px"
      } 
      if (prev == "786px") {
        return '2751px'
      }
      if (prev == '2751px') {
        return '786px'
      }
      if(prev == "391px"){
        return "1955px"
      }
      if(prev == "1955px"){
        return "391px"
      }
      if(prev == "439px"){
        return "2195px"
      }
      if(prev == "2195px"){
        return "439px"
      }
    })
    
    setRotate( (prev) => {
      if( prev === "rotate(180deg)"){
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
