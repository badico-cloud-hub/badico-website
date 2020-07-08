import styled from "styled-components"
import media from "styled-media-query"

export const CardWrapper = styled.div`
  width: 43%;
  border: 4px solid #27debf;
  background-color: transparent;
  border-radius: 14px;
  padding: 0.4rem;
  position: relative;

  div {
    width: 100%;
    height: 100%;
  }

  div:after {
    content: "";
    border: solid 5px #dbf5e7;
    border-radius: 14px;
    background-color: transparent;
    z-index: -1;
    display: inline-block;
    width: 107%;
    height: 108%;
    position: absolute;
    top: 1%;
    left: -9%;
  }

  div p {
    font-family: GalanoGrotesque;
    font-size: 0.7rem;
  }

  ${media.greaterThan("450px")`
  width: 45%;
  height: 135px;
  

  div{
    height: 100%;
  }

  div p{
    font-size: 0.9rem;
  }
  `}

  ${media.greaterThan("500px")`
  div:after{
    left: -6%;
    width: 105%;
    height: 106%;
  }

  div p{
    font-size: 1rem;
  }
  `}

  ${media.greaterThan("600px")`
  height: 160px;

  div:after{
    left: -5%;
  }

  div p{
    font-size: 1.17rem;
  }
  `}

  ${media.greaterThan("660px")`
   div p{
      font-size: 1.1rem;
    }
  `}

  ${media.greaterThan("760px")`
    width: 40%;
  `}

  ${media.greaterThan("971px")`
    width: 25%;
  `}

  ${media.greaterThan("1000px")`
    width: 20%;

    div p{
      font-size: 0.9rem;
    }
  `}

  ${media.greaterThan("1024px")`
    width: 21%;
    height: 170px;

    div p{
      font-size: 1rem;
    }
  `}

  ${media.greaterThan("1350px")`
    height: 200px;

    div p{
      font-size: 1.25rem;
    }
  `}

  ${media.greaterThan("1440px")`
  width: 19%;
  height: 210px;
  `}

  ${media.greaterThan("1580px")`
  width: 17%;
  height: 210px;
  `}
`
