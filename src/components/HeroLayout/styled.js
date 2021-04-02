import styled from "styled-components"
import media from "styled-media-query"

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 600px;

  margin-top: 80px;

  .bgWave {
    position: absolute;
    margin-top: -65%;
    z-index: -1;
  }

  svg {
    width: 100%;
  }

  .heroImg {
    width: 35%;
    height: 50vh;
    margin-top: 30px;
    margin-right: 2%;
  }
  @media (max-width: 1200px) and (min-width: 1025px) {
    .bgWave {
      margin-top: -50%;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 560px;

    .bgWave {
      margin-top: -15%;
    }

    .heroImg {
      width: 55%;
      height: 450px;
      margin-top: -90px;
      margin-left: 460px;
      margin-right: 15%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 560px;

    .bgWave {
      margin-top: -5%;
    }

    .heroImg {
      width: 55%;
      margin-top: 0px;
      margin-left: 320px;
    }
  }

  @media (max-width: 550px) {
    background-color: #0e273b;

    .bgWave {
      margin-top: 40%;
    }
  }

  @media (max-width: 480px) {
    background-color: #0e273b;
    
    .heroImg {
      width: 45%;
      height: 190px;
      margin-top: 13%;
      margin-left: 52%;
    }
  }

  @media (max-width: 360px) {
    flex-direction: column;
    height: 400px;

    .bgWave {
      margin-top: 55%;
    }

    .heroImg {
      width: 50%;
      height: 35%;
      margin-top: 20%;
      margin-left: 40%;
    }
  }

  /* .ball{
    width: 300px;
    height: 300px;
    right: -150px;
    position: absolute;
  } */
`
export const Info = styled.div`
  width: 29%;

  color: #fff;
  letter-spacing: 1px;
  margin-right: 14%;

  h1 {
    font-size: 50px;
  }

  @media (max-width: 1024px) {
    margin-top: 29%;
    margin-right: 44%;
    width: 40%;

    h1 {
      font-size: 50px;
    }
  }
  @media (max-width: 768px) {
    margin-top: 30%;
    margin-right: 30%;
    width: 40%;

    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 480px) {
    width: 80%;
    margin-right: 10%;
  }

  @media (max-width: 360px) {
    margin-top: 40%;
    margin-right: 9%;
    width: 60%;

    h1 {
      font-size: 30px;
    }
  }
`
export const Buttons = styled.div`
  width: 100%;
  margin-top: 25px;

  .contact {
    background-color: transparent;

    font-weight: bold;
    letter-spacing: 1px;

    border: 3px solid #27debf;
    color: #27debf;
  }

  .call {
    margin-left: 10px;

    color: #0e273b;
    font-weight: bold;
    background-color: #27debf;

    a {
      color: #0e273b;
      padding: 20px;
    }
    a:hover {
      text-decoration: none;
    }

    .iconCalendar {
      display: none;
    }
  }

  @media (max-width: 1650px) and (min-width: 1023px) {
    display: flex;
    flex-direction: column;

    .call {
      margin-top: 10px;
      margin-left: 0px;
    }
  }

  @media (max-width: 1024px) {
    .contact {
      width: 200px;
      height: 50px;
    }

    .call {
      display: none;
    }
  }
  @media (max-width: 360px) {
    .contact {
      width: 200px;
      height: 50px;
    }

    .call {
      display: none;
    }
  }
`
export const Button = styled.button`
  width: 234px;
  height: 63px;

  border: none;
  border-radius: 30px;
  :focus {
    outline: none;
  }
`
