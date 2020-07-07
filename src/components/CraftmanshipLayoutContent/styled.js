import styled from "styled-components";
import media from "styled-media-query";

export const ContentWrapper = styled.div`
  font-family: GalanoGrotesque;
  h1 {
    font-size: 1.1rem;
    line-height: 1.6rem;
    font-weight: bold;
    width: 96%;
    position: relative;
  }
  h1:after {
    content: "";
    background: transparent;
    border: solid 6px #27debf;
    opacity: 68%;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: inline-block;
    position: absolute;
    left: -13px;
    top: -22px;
    z-index: -1;
  }

  ${media.greaterThan("570px")`
    h1{
      font-size: 1.2rem;
    }
  `}

  ${media.greaterThan("760px")`
    h1{
      font-size: 1.4rem;
      text-align: center;
      line-height: 2.5rem;
    }

    h1:after {
      width: 90px;
      height: 90px;
      border: solid 13px #27debf;
      top: -45%;
      left: -3%;
    }
  `}

  ${media.greaterThan("850px")`
  h1:after {
    left: 0%;
  }
  `}
  ${media.greaterThan("880px")`
  h1:after {
    left: 4%;
  }
  `}

  ${media.greaterThan("885px")`
  h1:after {
    left: -4%;
  }
  `}
  ${media.greaterThan("913px")`
  h1:after {
    left: -2%;
  }
  `}
  
  ${media.greaterThan("971px")`
  h1{
    font-size: 1.9rem;
  }
  `}
`
