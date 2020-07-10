import styled from "styled-components"
import media from "styled-media-query"

export const CardWrapper = styled.div`
  width: 44%;
  height: 135px;
  border: 4px solid #27debf;
  background-color: transparent;
  border-radius: 14px;
  padding: 0.3rem;
  position: relative;

  ${media.greaterThan("450px")`
  width: 45%;
  height: 135px;
  `}

  ${media.greaterThan("600px")`
  height: 160px;
  `}

  ${media.greaterThan("760px")`
    width: 40%;
  `}

  ${media.greaterThan("971px")`
    width: 25%;
  `}

  ${media.greaterThan("1000px")`
    width: 20%;
  `}

  ${media.greaterThan("1024px")`
    width: 21%;
    height: 170px;
  `}

  ${media.greaterThan("1350px")`
    height: 200px;
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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: .3rem;

  :after {
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

  ${media.greaterThan("450px")`
    height: 100%;
  `}

  ${media.greaterThan("500px")`
  :after{
    left: -6%;
    width: 105%;
    height: 106%;
  }
  `}

  ${media.greaterThan("600px")`
    left: -5%;
    padding-top: .6rem;
    padding-left: .6rem;
    padding-right: .3rem;

  `}
`
export const Content = styled.p`
  font-family: GalanoGrotesque;
  font-size: 0.7rem;
  margin: 0.3rem;

  ${media.greaterThan("450px")`
    font-size: 0.9rem;
  `}

  ${media.greaterThan("500px")`
    font-size: 1rem;
  `}

  ${media.greaterThan("600px")`
    font-size: 1.17rem;
  `}

  ${media.greaterThan("660px")`
    font-size: 1.1rem;
    margin: 0.6rem;
  `}

  ${media.greaterThan("1000px")`
    font-size: 0.9rem;
  `}

  ${media.greaterThan("1024px")`
    font-size: 1rem;
  `}

  ${media.greaterThan("1350px")`
    font-size: 1.25rem;
  `}
`
