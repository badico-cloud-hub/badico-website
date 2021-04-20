import styled from "styled-components"

export const Container = styled.div`
  padding: 74px 25px 0px;
  position: relative;

  h1 {
    width: 95%;
    min-width: 286px;
    margin-bottom: 30px;
    color: #1d4c68;
    font-size: 24px;
  }

  p {
    min-width: 286px;
    font-size: 16px;
    color: #52575c;
  }

  @media (min-width: 428px) {
    h1 {
    min-width: 353px;
    margin-bottom: 16px;
    font-size: 34px;
    }

    p {
      min-width: 353px;
      font-size: 20px;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    padding: 118px 0px 0px 80px;

    h1 {
      width: 94%;
      margin-bottom: 30px;
      font-size: 34px;
    }

    p {
      width: 75%;
      font-size: 24px;
    }
  }
  @media (min-width: 1024px) {
    padding: 74px 90px 0px;

    h1 {
      width: 80%;
      margin-bottom: 30px;
      font-size: 34px;
    }

    p {
      width: 75%;
      font-size: 24px;
    }

  }

  @media (min-width: 1366px) {
    width: 478px;
    padding: 210px 0px 0px;

    h1 {
      width: 100%;
      margin-bottom: 30px;
      font-size: 34px;
    }

    p {
      width: 85%;
    }
  }
  
  @media (min-width: 1920px) {
    width: 860px;
    padding: 270px 0px 0px;

    h1 {
      width: 100%;
      font-size: 60px;
      margin-bottom: 32px;
    }

    p {
      width: 532px;
    }
`
