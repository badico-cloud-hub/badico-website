import styled from "styled-components"
import media from "styled-media-query"

export const HeroWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 600px;
  display: flex;
  flex-direction: column;
  opacity: 1;
  z-index: 1;
  position: relative;
  top: -100px;

  ${media.greaterThan("768px")`
    height: 810px;
  `}

  ${media.greaterThan("1070px")`
  height: 600px;
`}

${media.greaterThan("1270px")`
  height: 650px;
`}

${media.greaterThan("1400px")`
  height: 750px;
`}
`

export const Img = styled.div`
  width: 312px;
  margin: 0;
  z-index: 2;
  position: absolute;
  top: 410px;
  right: 8%;

  ${media.greaterThan("768px")`
    width: 536px;
    top: 380px;
    right: 2%;
  `}  
`

export const ImgBall = styled.div`
  position: absolute;
  bottom: 100px;
  z-index: 0;
  width: 1px;
  overflow: hidden;
  display: none;


  ${media.greaterThan("768px")`
      width: 20%;
      position: absolute;
      top: 15%;
      right: -12%;
  `}
`
