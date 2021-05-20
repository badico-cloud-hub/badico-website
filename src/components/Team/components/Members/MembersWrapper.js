import styled from "styled-components"

export const MembersWrapper = styled.div`
  width: 270px;
  height: ${props => props.height};
  overflow: ${props => props.overflow};
  transition: height 0.4s linear;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1040px;
`
