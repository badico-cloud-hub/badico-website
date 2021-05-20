import styled from "styled-components"
import media from "styled-media-query"

export const MemberWrapper = styled.div`
  width: 113px;
  height: 152px;
  display: flex;
  flex-direction: column;
  margin: 0 0 16px 0;
  opacity: ${props => props.opacity};
  transition: opacity 0.8s linear;

  ${media.greaterThan("768px")`
  width: 254px;
  height: 353px;
  margin-bottom: 40px;
  `}
`

export const ContainerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.greaterThan("768px")`
  `}
`

export const ImgProfile = styled.img`
  width: 87px;
  height: 87px;
  border-radius: 50%;
  align-self: center;
  margin: 0 0 16px 0;

  ${media.greaterThan("768px")`
  width: 214px;
  height: 214px;
  margin-bottom: 24px;
  `}
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`

export const Name = styled.h2`
  font-weight: 500;
  font-size: 0.875rem;
  color: #02293f;
  text-align: center;
  margin: 0;

  ${media.greaterThan("768px")`
  font-size: 1.95rem;
  margin-bottom: 16px;
  `}
`

export const Position = styled.p`
  text-align: center;
  color: #8ccac4;
  font-weight: 500;
  font-size: 0.75rem;
  margin: 0;
  display: flex;

  ${media.greaterThan("768px")`
  font-size: 1.5rem;
  `}
`