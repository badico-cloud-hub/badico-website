import styled from "styled-components"

export const Container = styled.div`
  overflow-x: hidden;
  width: 100%;
  height: 248px;
  display: flex;
  flex-direction: column;

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
    height: 360px;
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
    
  }

  div:nth-child(even) {
    display: flex;
    position: relative;
    top: 21px;

    @media(min-width: 768px){
      top: 46px;
    }
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
    height: 251px;
  }

  @media (min-width: 1366px) {
    align-items: center;
  }


  @media (min-width: 1920px) {
    height: 260px;
  }
`
export const ContainerScroll = styled.div`
  width: 105px;
  height: 8px;
  background: #E8E8E8;
  border-radius: 15px;
  margin: 50px auto 0 auto;
`

export const DivScroll = styled.div`
  width: 52px;
  height: 100%;
  position: relative;
  background: #A0A4A8;
  border-radius: 15px;
  right: ${props => (props.right)};
`