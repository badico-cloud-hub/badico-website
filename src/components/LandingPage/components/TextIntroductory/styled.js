import styled from "styled-components"

export const Container = styled.div`
  padding: 100px 25px 0px;
  position: relative;
  overflow-x: hidden;

  h1 {
    width: 95%;
    margin-bottom: 30px;

    letter-spacing: 0.2px;

    color: #1d4c68;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    color: #52575c;
  }

  .default-right {
    fill: #fdeadf;
    z-index: -1;
  }
/* 
  .ondaRight {
    position: absolute;
    left: 40px;
    top: -147px;
    right: -271px;
  }
  .ondaLeft {
    display: none;
  } */

  @media (min-width: 480px) {
    /* .ondaRight {
      left: 110px;
    } */
  }

  @media (min-width: 768px) {
    padding: 100px 0px 0px 70px;

    h1 {
      width: 94%;
      margin-bottom: 30px;

      letter-spacing: 0.2px;

      color: #1d4c68;
      font-size: 34px;
    }

    p {
      width: 75%;
      font-size: 24px;
      color: #52575c;
    }

    /* .ondaRight {
      width: 50%;
      left: 300px;
      top: -121px;
      right: -461px;
    }

    .ondaLeft {
      display: block;
      position: absolute;
      width: 50%;
      left: -140px;
      top: -300px;
    } */
  }
  @media (min-width: 1024px) {
    padding: 0px 90px 0px;

    h1 {
      width: 80%;
      margin-bottom: 30px;

      letter-spacing: 0.2px;

      color: #1d4c68;
      font-size: 34px;
    }

    p {
      width: 75%;
      font-size: 24px;
      color: #52575c;
    }

    /* .ondaRight {
      left: 710px;
    }
    .ondaLeft {
      top: -400px;
      left: -195px;
    } */
  }
  @media (min-width: 1366px) {
    width: 40%;
    padding: 100px 0px 0px 130px;
    /* position: inherit; */

    h1 {
      width: 80%;
      margin-bottom: 30px;

      letter-spacing: 0.2px;

      color: #1d4c68;
      font-size: 34px;
    }

    p {
      width: 85%;
      font-size: 24px;
      color: #52575c;
    }
/* 
    .ondaRight {
      left: 1350px;
    }
    .ondaLeft {
      width: 20%;
      top: -150px;
      left: -105px;
    } */
  }
`
