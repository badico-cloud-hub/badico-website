import React, {useState, useEffect, useCallback} from "react"
import Card from "../Cards"
import * as Styled from "./style"
import {useWindowSize} from "../../../hooks/useWindowsSize"
import { setRef } from "@material-ui/core"

const Carousel = () => {
  const [right, setRight] = useState(0)
  const [rightScroll, setRightScroll] = useState(0)
  const [refInterval, setRefInterval] = useState({
    right: null,
    left: null
  })
  const [refIntervalScroll, setRefIntervalScroll] = useState({
    right: null,
    left: null
  })
  const [mouseX, setMouseX] = useState(null)
  const size = useWindowSize()

  const intervalLeft = () => {
    if(refInterval.right != null){
      clearInterval(refInterval.right)
    }
    const value = setInterval(() => {
      setRight( (prev) => {
        if(prev == 0){
          //clearInterval(refInterval.left)
          return prev
        }
        return prev - 50
      })
      console.log("right", right)
    }, 300)

    setRefInterval({
      right: null,
      left: value
    })
  }

  const intervalRight = () => {
    if(refInterval.left != null){
      clearInterval(refInterval.left)
    }
    const value = setInterval(() => {
      setRight((prev) => {
        if(prev == 3880){
          //clearInterval(refInterval.right)
          return prev
        }
        return prev + 50
      })
      console.log("right", right)
    }, 300)
    
    setRefInterval({
      right: value,
      left: null
    })
  }

  const intervalLeftScroll = () => {
    if(refIntervalScroll.right != null){
      clearInterval(refIntervalScroll.right)
    }
    const value = setInterval(() => {
      setRightScroll( (prev) => {
        if(prev == 0){
          //clearInterval(refInterval.left)
          return prev
        }
        return prev + 1
      })
      console.log("scroll")
    }, 460)

    setRefIntervalScroll({
      right: null,
      left: value
    })
  }

  const intervalRightScroll = () => {
    if(refIntervalScroll.left != null){
      clearInterval(refIntervalScroll.left)
    }
    const value = setInterval(() => {
      setRightScroll((prev) => {
        if(prev == 50){
          //clearInterval(refInterval.right)
          return prev
        }
        return prev - 1
      })
      console.log("scroll")
    }, 460)
    
    setRefIntervalScroll({
      right: value,
      left: null
    })
  }

  const onMouseEnterFunction = (positionX) => {
    if(positionX < (size.width / 2) && right != 0){
      if(!refInterval.left){
        intervalLeft()
      }
      if(!refIntervalScroll.left){
        intervalLeftScroll()
      }
    } else if(positionX > (size.width / 2) && right < 3880) {
      if(!refInterval.right){
        intervalRight()
      }
      if(!refIntervalScroll.right){
        intervalRightScroll()
      }
    }
  }

  const onMouseLeaveFunction = () => {
    console.log("teste")
    clearInterval(refInterval.right)
    clearInterval(refInterval.left)
    clearInterval(refIntervalScroll.right)
    clearInterval(refIntervalScroll.left)
    setRefInterval({
      right: null,
      left: null
    })
    setRefIntervalScroll({
      right: null,
      left: null
    })
  }
  
  useEffect(() => {
    if(right >= 3880){
      clearInterval(refInterval.right)
      clearInterval(refIntervalScroll.right)
    }
    if(right <= 0){
      clearInterval(refInterval.left)
      clearInterval(refIntervalScroll.left)
    }
  },[right])

  useEffect( () => {
    onMouseEnterFunction(mouseX)
  }, [mouseX])
  
  return (
    <Styled.Container onMouseMove={(event) => setMouseX(event.clientX)} onMouseLeave={onMouseLeaveFunction}>
      <Styled.Items className="items" right={right+"px"}>
        <Card
          className="teste"
          Title="Lorem ipsum nisi bibendum platea donec, orci volutpat mi"
          Text="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula curabitur, odio vehicula platea condimentum. eleifend nunc blandit purus aenean "
        />
        <Card
          Title="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula"
          Text="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula curabitur, odio vehicula platea condimentum. eleifend nunc blandit purus aenean "
        />

        <Card
          Title="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula"
          Text="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula curabitur, odio vehicula platea condimentum. eleifend nunc blandit purus aenean "
        />

        <Card
          Title="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula"
          Text="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula curabitur, odio vehicula platea condimentum. eleifend nunc blandit purus aenean "
        />

        <Card
          Title="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula"
          Text="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula curabitur, odio vehicula platea condimentum. eleifend nunc blandit purus aenean "
        />
        <Card
          Title="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula"
          Text="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula curabitur, odio vehicula platea condimentum. eleifend nunc blandit purus aenean "
        />
        <Card
          Title="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula"
          Text="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula curabitur, odio vehicula platea condimentum. eleifend nunc blandit purus aenean "
        />
        <Card
          Title="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula"
          Text="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula curabitur, odio vehicula platea condimentum. eleifend nunc blandit purus aenean "
        />
        <Card
          Title="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula"
          Text="Lorem ipsum nisi bibendum platea donec, orci volutpat mi vehicula curabitur, odio vehicula platea condimentum. eleifend nunc blandit purus aenean "
        />
      </Styled.Items>
      <Styled.ContainerScroll>
        <Styled.DivScroll right={rightScroll+"px"}/>
      </Styled.ContainerScroll >
    </Styled.Container>
  )
}
export default Carousel
