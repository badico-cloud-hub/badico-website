import styled from "styled-components"
import media from "styled-media-query"

export const TeamWrapper = styled.div`
  width: 270px;
  height: ${props => props.height};
  overflow: ${props => props.overflow};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 97px auto 0 auto;

  ${media.greaterThan("768px")`
  width: 590px;
  `}

  ${media.greaterThan("1024px")`
  width: 884px;
  `}

  ${media.greaterThan("1920px")`
  width: 1181px;
  `}
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
export const Title = styled.h2`
  font-weight: 500;
  font-size: 1.1875rem;
  color: #02293f;
  margin: 0 auto 9px auto;
  text-align: center;

  ${media.greaterThan("768px")`
  font-size: 1.5rem;
  margin-bottom: 56px;
  `}

  ${media.greaterThan("1920px")`
  font-size: 2.125rem;
  `}
`
export const Description = styled.p`
  font-weight: 300;
  font-size: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  width: 100%;
  margin: 0 auto 25px auto;
  text-align: center;
  color: #52575C;

  ${media.greaterThan("768px")`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 auto 56px auto;
  `}

  ${media.greaterThan("1920px")`
  border: solid res 1px;
  font-size: 1.5rem;
  font-weight: 600;
  `}
`

export const ButtonDrop = styled.button`
  width: 214px;
  height: 25px;
  background: #E3F2F1;
  border: 0;
  border-radius: 27px;
  margin: 23px 0 0 0;

  svg {
    transform: ${props => props.rotate};
    transition: transform 0.4s linear;
  }

  ${media.greaterThan("768px")`
    width: 508px;
    height: 56px;
    svg {
      width: 37px;
      height: 20px;
    }
  `}
`
