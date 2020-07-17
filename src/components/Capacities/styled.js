import styled from "styled-components"
import media from "styled-media-query"

export const CapacitiesWrapper = styled.div`
  margin: 6rem 2rem;
  font-family: GalanoGrotesque;

  ${media.greaterThan("760px")`
  margin: 5rem 3rem 4rem 3rem;
  `}
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`
export const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 50%;
  margin-top: 1rem;

  p {
    font-size: 0.9rem;
    margin: 0;
    padding: 0.1rem;
    height: 42px;
  }

  .img {
    width: 50%;
  }

  .mobile {
    width: 30%;
  }

  ${media.greaterThan("760px")`
    width: 25%;
    margin-top: 2rem;

    .mobile {
    margin-top: 0;
    }

    p{
      padding: 0 0.5rem;
      width: 90%;
      height: 40%;
      font-size: 0.9rem;
    }
    .img {
      max-width: 160px;
    }
  `}

  ${media.greaterThan("940px")`
  p {
    margin-top: 1.5rem;
    font-size: 1.1rem;
  }
  `}

  ${media.greaterThan("940px")`
  p {
    max-width: 210px;
  }
  `}
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  color: #02293f;
  ${media.greaterThan("940px")`
    margin-bottom: 5rem;
  `}
`
