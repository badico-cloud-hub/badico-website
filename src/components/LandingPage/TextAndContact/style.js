import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  position: relative;
  margin: 0 auto;
  
  @media (min-width: 1366px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
