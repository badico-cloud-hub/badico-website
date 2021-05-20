import styled from "styled-components"
import media from "styled-media-query"

export const MembersWrapper = styled.div`
  width: 270px;
  height: ${props => props.height};
  overflow: ${props => props.overflow};
  transition: height 1s linear;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1040px;

  ${media.greaterThan("768px")`
  width: 590px;
  `}
`
