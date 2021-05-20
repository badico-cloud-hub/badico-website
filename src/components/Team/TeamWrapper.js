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
`
export const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${media.greaterThan("768px")`
  margin-bottom: 32px;
    `}
`
export const Title = styled.h2`
  font-weight: 500;
  font-size: 1.1875rem;
  color: #02293f;
  margin: 0.5rem auto;
  text-align: center;

  ${media.greaterThan("450px")`
  font-size: 1.2rem;
  `}

  ${media.greaterThan("768px")`
  font-size: 1.5rem;
  `}
`
export const Description = styled.p`
  font-weight: 300;
  font-size: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  width: 100%;
  max-width: 392px;
  margin: 0 auto 8px auto;
  text-align: center;
  color: #52575C;

  ${media.greaterThan("768px")`
  font-size: 1.25rem;
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
`
