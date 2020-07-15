import styled from "styled-components"
import media from "styled-media-query"

export const MemberWrapper = styled.div`
  width: 50%;
  max-width: 193px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  ${media.greaterThan("1150px")`
  width: 80%;
  max-width: 230px;
  `}
`

export const ImgProfile = styled.img`
  width: 63.5%;
  border-radius: 50%;
  align-self: center;

  ${media.greaterThan("450px")`
  width: 65%;
  `}

  ${media.greaterThan("768px")`
  width: 75%;
  `}
`
export const Content = styled.div`
  padding: 0;
`

export const Name = styled.h1`
  font-family: GalanoGrotesque;
  font-weight: 500;
  font-size: 0.75rem;
  color: #02293f;
  text-align: center;
  margin: 0.5rem 0 0.2rem 0;

  ${media.greaterThan("450px")`
  font-size: 0.85rem;
  `}

  ${media.greaterThan("768px")`
  font-size: 1.2rem;
  `}
`
export const PositionContainer = styled.div`
  margin-left: 1rem;
`

export const Position = styled.h2`
  color: #8ccac4;
  font-family: GalanoGrotesque;
  font-weight: 500;
  font-size: 0.689rem;
  margin: 0 0 0.6rem 0;

  ${media.greaterThan("450px")`
  font-size: 0.75rem;
  `}

  ${media.greaterThan("768px")`
  font-size: 1rem;
  `}
`

export const Description = styled.p`
  font-family: GalanoGrotesque;
  color: #000000;
  font-weight: 300;
  font-size: 0.6rem;
  text-align: left;

  ${media.greaterThan("450px")`
  font-size: 0.65rem;
  `}

  ${media.greaterThan("768px")`
  font-size: 1rem;
  `}
`
