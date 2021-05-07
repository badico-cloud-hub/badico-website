import styled from "styled-components"

export const Container = styled.div`
  overflow-x: hidden;
  height: 248px;
  display: flex;

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
  position: relative;
  height: 208px;
  right: ${props => (props.right)};
  transition: right 0.4s linear;
  

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
