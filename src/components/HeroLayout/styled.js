import styled from "styled-components";
import media from "styled-media-query";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #02293f;

  .imgWrapper{
    width: 70%;
    align-self: flex-end;
    margin: 0;
    z-index: 2;
    position: relative;
    bottom: 50px;
  }

  

  ${media.greaterThan("medium")`

    flex-direction: row;
    justify-content: space-around;
    padding: 0 5%;

    
    .imgWrapper{
      min-width: 200px;
      width: 43%;
      display: inline;
    }

    .ball{
      position: relative;
      bottom: 0px;
      left: 0px;
    }
  `}
`
