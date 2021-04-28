import styled from "styled-components"

export const Case = styled.div`
  display: flex;
`

export const CaseWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto;
  align-items: center;
  margin-bottom: 0.5rem;

  @media(min-width: 768px){
    margin-bottom: 1rem;
  }

  @media(min-width: 1024px){
    margin-bottom: 1.25rem;
  }

  @media(min-width: 1366px){
    margin-bottom: 1.5rem;
  }
`

export const Title = styled.h1`
  font-size: 20px;
  line-height: 24px;
  color: #0E273B; 
  font-weight: 600;
  margin: 0;

  @media(min-width: 768px){
    font-size: 24px;
    line-height: 29px;
    font-weight: 500;
  }

  @media(min-width: 1920px){
    font-size: 34px;
    line-height: 41px;
  }
`
