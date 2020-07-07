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
    right: 8%;
    top: 50%;
  }

  .imgBallWrapper { 
    position: absolute;
    bottom: 100px;
    z-index: 0;
    width: 1px;
    overflow: hidden;
  }



  ${media.greaterThan("400px")`
    height: 550px;
    flex-direction: row;
    padding: 0 5%;
    overflow: hidden;
    position: relative;

    .imgWrapper{
      min-width: 200px;
      width: 65%;
      display: inline;
      position: absolute;
      top: 45%;
      right: 10%;
    }

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

    .imgWrapper{
        min-width: 200px;
        width: 70%;
        display: inline;
        position: absolute;
        top: 35%;
        right: 10%;
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
  ${media.greaterThan("600px")`
    height: 550px;
    
    .imgWrapper{
      min-width: 200px;
      width: 65%;
      display: inline;
      position: absolute;
      top: 30%;
      right: 10%;
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

  ${media.greaterThan("700px")`
    height: 600px;
    
    .imgWrapper{
      min-width: 200px;
      max-width: 60%;
      display: inline;
      position: absolute;
      top: 30%;
      right: 10%;
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

  ${media.greaterThan("768px")`
    height: 500px;
    
    .imgWrapper{
      min-width: 200px;
      max-width: 60%;
      display: inline;
      position: absolute;
      top: 0%;
      right: 5%;
      z-index: 2;
    }

    .imgBallWrapper{
      z-index: 1;
      width: 20%;
      position: absolute;
      top: 15%;
      right: -12%;
    }
  `}

  ${media.greaterThan("970px")`
    height: 500px;
    
    .imgWrapper{
      width: 55%;
    }
  `}

  ${media.greaterThan("1070px")`
  height: 600px;
  
  .imgWrapper{
    width: 55%;
  }
`}

${media.greaterThan("1270px")`
  height: 650px;
  
  .imgWrapper{
    width: 55%;
  }
`}

${media.greaterThan("1400px")`
  height: 700px;
  
  .imgWrapper{
    width: 50%;
  }
`}

${media.greaterThan("1500px")`
  
  .imgWrapper{
    width: 45%;
  }
`}
`
