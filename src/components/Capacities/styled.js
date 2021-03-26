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

  ${media.greaterThan("760px")`
    width: 25%;
    margin-top: 2rem;

    .mobile {
    margin-top: 0;
    }

    p{
      height: 40%;
      max-width: 210px;
      max-height: 60px;
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
  ${media.greaterThan("940px")`
    margin-bottom: 5rem;
  `}
`
