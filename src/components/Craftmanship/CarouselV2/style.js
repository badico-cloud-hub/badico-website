import styled from "styled-components"

export const Container = styled.div`
  overflow-x: auto;
  height: 248px;

  ::-webkit-scrollbar {
    padding-left: 50px;
    
    height: 0px;
  }

  :hover {
    ::-webkit-scrollbar {
      height: 8px;
      background: #e8e8e8;
      border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb {
      background: #a0a4a8;
      border-radius: 15px;
    }
  }

  @media (min-width: 428px) {
    height: 262px;
  }

  @media (min-width: 768px) {
    height: 290px;
  }

  @media (min-width: 1920px) {
    height: 308px;
  }
`

export const Items = styled.div`
  display: flex;
  height: 208px;

  div:nth-child(odd) {
    align-self: flex-start;
  }

  div:nth-child(even) {
    align-self: flex-end;
  }


  :first-child {
    @media (min-width: 768px) {
      margin-left: 40px;
    }

    @media (min-width: 1366px) {
      margin-left: 100px;
    }
  }

  @media (min-width: 428px) {
    height: 222px;
  }

  @media (min-width: 768px) {
    height: 250px;
  }

  @media (min-width: 1920px) {
    height: 260px;
  }
`
