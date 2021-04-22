import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  position: relative;

  @media (min-width: 1366px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
