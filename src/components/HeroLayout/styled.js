import styled from "styled-components"
import media from "styled-media-query"

export const HeroWrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  background: #02293f;
  z-index: 1;
  position: relative;

  .imgWrapper {
    width: 70%;
    align-self: flex-end;
    margin: 0;
    z-index: 2;
    position: absolute;
    right: 0;
    top: 250px;
  }

  .imgBallWrapper { 
    position: absolute;
    bottom: 100px;
    z-index: 0;
    width: 1px;
    overflow: hidden;
  }



  ${media.greaterThan("medium")`
    height: 400px;
    flex-direction: row;
    padding: 0 5%;
    overflow: hidden;
    position: relative;

    .imgWrapper{
      min-width: 200px;
      width: 60%;
      display: inline;
      position: absolute;
      top: 0px;
      right: 10px;
    }

    .imgBallWrapper{
      z-index: 1;
      width: 20%;
      position: absolute;
      top: 100px;
      right: -90px;
    }

    .ball{
      width: 100%;
      height: 100%;
    }
  `}

  ${media.greaterThan("1024px")`
    height: 500px;

    .imgWrapper{
        min-width: 200px;
        width: 50%;
        display: inline;
        position: absolute;
        top: 0;
        right: 50px;
        z-index: 2;
    }

    .imgBallWrapper{
      z-index: 1;
      width: 15%;
      position: absolute;
      top: 100px;
      right: -80px;
    }
  `}
  ${media.greaterThan("1300px")`
    height: 650px;
    
    .imgWrapper{
      min-width: 200px;
      width: 50%;
      display: inline;
      position: absolute;
      top: 0;
      right: 50px;
      z-index: 2;
    }

    .imgBallWrapper{
      z-index: 1;
      width: 15%;
      position: absolute;
      top: 100px;
      right: -130px;
    }
  `}
`
