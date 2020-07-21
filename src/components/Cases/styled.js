import styled from "styled-components"

export const Case = styled.div`
  display: flex;
  margin: 0 2rem 5.5rem 2rem;
`

export const CaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: GalanoGrotesque;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
`

export const View = styled.button`
  border: 1px solid black;
  border-radius: 38px;
  width: 6rem;
  font-size: 0.8rem;
  height: 1.6rem;
  padding: 0 0 1rem 0;
  background: transparent;

  :focus {
    outline: none;
  }
`
