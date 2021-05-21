import styled from "styled-components"
import media from "styled-media-query"

export const MembersWrapper = styled.div`
  width: 100%;
  height: ${props => props.height};
  overflow: ${props => props.overflow};
  transition: height 1s linear;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1040px;
`
