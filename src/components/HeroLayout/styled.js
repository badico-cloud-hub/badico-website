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
    top: -300px;
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

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 560px;
    background-color: #0e273b;

    .bgWave {
      top: 250px;
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
    background-color: #0e273b;

    .bgWave {
      top: 250px;
    }

    .heroImg {
      width: 55%;
      margin-top: -50px;
      margin-left: 320px;
    }
  }

  @media (max-width: 360px) {
    flex-direction: column;
    height: 400px;
    background-color: #0e273b;

    .bgWave {
      top: 330px;
    }

    .heroImg {
      width: 70%;
      height: 350px;
      margin-top: 30px;
      margin-left: 140px;
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
    margin-top: 290px;
    margin-right: 440px;
    width: 40%;

    h1 {
      font-size: 50px;
    }
  }
  @media (max-width: 768px) {
    margin-top: 210px;
    margin-right: 300px;
    width: 40%;

    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 360px) {
    margin-top: 190px;
    margin-right: 90px;
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

    .iconCalendar{
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
