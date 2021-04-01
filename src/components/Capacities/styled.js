import styled from "styled-components"
import media from "styled-media-query"

export const CapacitiesWrapper = styled.div`
  margin: 4rem 2rem;

  ${media.greaterThan("760px")`
  margin: 5rem 3rem 4rem 3rem;
  `}
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  width: 311px;
  margin: 0 auto;
  flex-wrap: wrap;
  height: 100%;

  ${media.greaterThan('768px')`
  width: 600px;
  `}
`
export const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 148px;
  margin-top: 1rem;

  p {
    font-size: 0.875rem;
    margin: 0;
    height: 42px;
    width: ${props => props.width};
  }

  .img {
    width: 50%;
  }

  .mobile {
    width: 30%;
  }

  ${media.greaterThan("768px")`
    width: 260px;
    margin-top: 2rem;

    .mobile {
    margin-top: 0;
    }

    p{
      height: 40%;
      width: 100%;
      max-width: 250px;
      max-height: 60px;
      font-size: 1.25rem;
      font-weight: 600;
      margin-top: ${props => props.pMarginTop};
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

  
`

export const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 1.25rem;
  color: #02293f;
  position: relative;
  top: 40px;
  ${media.greaterThan("768px")`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 3.5625rem;
  `}
`
