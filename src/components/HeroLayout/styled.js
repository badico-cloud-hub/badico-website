import styled from "styled-components"
import media from "styled-media-query"

export const HeroWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: #02293f;
  z-index: 1;
  position: relative;

  ${media.greaterThan("400px")`
    height: 550px;
    flex-direction: row;
    margin-right: 5%;
    overflow: hidden;
    position: relative;

    .imgBallWrapper{
      z-index: 1;
      width: 20%;
      position: absolute;
      top: 100px;
      right: -100px;
    }

    .ball{
      width: 100%;
      height: 100%;
    }
  `}

  ${media.greaterThan("510px")`
    height: 550px;
  `}
  ${media.greaterThan("600px")`
    height: 550px;
  `}

  ${media.greaterThan("768px")`
  height: 500px;
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
  width: 70%;
  align-self: flex-end;
  margin: 0;
  z-index: 2;
  position: absolute;
  right: 8%;
  top: 50%;

  ${media.greaterThan("400px")`
      min-width: 200px;
      width: 65%;
      display: inline;
      position: absolute;
      top: 45%;
      right: 10%;
  `}

  ${media.greaterThan("510px")`
        min-width: 200px;
        width: 70%;
        display: inline;
        position: absolute;
        top: 35%;
        right: 10%;
        z-index: 2;
  `}

  ${media.greaterThan("600px")`
      min-width: 200px;
      width: 65%;
      display: inline;
      position: absolute;
      top: 30%;
      right: 10%;
      z-index: 2;
  `}

  ${media.greaterThan("700px")`
      min-width: 200px;
      max-width: 60%;
      display: inline;
      position: absolute;
      top: 30%;
      right: 10%;
      z-index: 2;
  `}

  ${media.greaterThan("768px")`
      width: 820px;
      top: 0%;
      right: 5%;
  `}



  ${media.greaterThan("850px")`{
      width: 55%;
  `}

  ${media.greaterThan("940px")`
    width: 50%;
`}
  ${media.greaterThan("1070px")`
    width: 55%;
`}

${media.greaterThan("1400px")`
    width: 50%;
`}

${media.greaterThan("1500px")`
    width: 820px;

`}

${media.greaterThan("2200px")`
    right: 15%;

`}

`

export const ImgBall = styled.div`
  position: absolute;
  bottom: 100px;
  z-index: 0;
  width: 1px;
  overflow: hidden;

  ${media.greaterThan("400px")`
      z-index: 1;
      width: 20%;
      position: absolute;
      top: 100px;
      right: -100px;

    .ball{
      width: 100%;
      height: 100%;
    }
  `}

  ${media.greaterThan("510px")`
      z-index: 1;
      width: 15%;
      position: absolute;
      top: 100px;
      right: -100px;
  `}

  ${media.greaterThan("600px")`
      z-index: 1;
      width: 15%;
      position: absolute;
      top: 100px;
      right: -130px;
    }
  `}

  ${media.greaterThan("700px")`
      z-index: 1;
      width: 15%;
      position: absolute;
      top: 100px;
      right: -130px;
  `}

  ${media.greaterThan("768px")`
      width: 20%;
      position: absolute;
      top: 15%;
      right: -12%;
  `}
`
