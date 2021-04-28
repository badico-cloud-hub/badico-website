import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  position: relative;
`

export const FloatingButton = styled.div`
  display: flex;
  width: 76px;
  height: 56px;
  position: fixed;
  bottom: 16px;
  right: 0;
  z-index: 2;
  cursor: pointer;
  font-family: "Roboto";

  .back {
    visibility: hidden;
    opacity: 0;
    width: 100vw;
    height: 150vh;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: -120px;
    right: 0;
    z-index: -100;

    @media (min-width: 1366px) {
      display: none;
    }
  }

  :hover {
    .back {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.3s cubic-bezier(1, -0.01, 0.38, 0.26);
    }
  }

  .back:hover {
    display: none;
  }

  @media (min-width: 428px) {
    width: 93px;
    bottom: 14px;
  }

  @media (min-width: 428px) {
    width: 103px;
    bottom: 7px;
  }

  @media (min-width: 1366px) {
    width: 122px;
    bottom: 16px;
  }

  @media (min-width: 1920px) {
    width: 138px;
  }
`

export const ContactUs = styled.div`
  display: flex;
  width: 56px;
  height: 56px;
  background: #27debf;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0px 3px 6px #0000005e;

  :hover {
    .cloud,
    .cloud2,
    .cloud3,
    .cloud4 {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.3s cubic-bezier(1, -0.01, 0.38, 0.26);
    }

    .contact,
    .email,
    .calendarbutton,
    .calendar,
    .buttons {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.3s cubic-bezier(1, -0.01, 0.38, 0.26);
    }
  }

  .cloud {
    visibility: hidden;
    opacity: 0;
    display: flex;
    background: #ffffff;
    width: 70px;
    height: 70px;
    position: absolute;
    border-radius: 50%;
    right: -60px;
    bottom: 10px;
    z-index: -100;

    @media (min-width: 768px) {
      width: 90px;
      height: 90px;
      right: -93px;
      bottom: -29px;
    }

    @media (min-width: 1366px) {
      display: none;
    }
  }

  .cloud2 {
    visibility: hidden;
    opacity: 0;

    display: flex;
    background: #ffffff;
    width: 90px;
    height: 90px;
    position: absolute;
    border-radius: 50%;
    right: -19px;
    bottom: -19px;
    z-index: -100;

    @media (min-width: 768px) {
      width: 100px;
      height: 100px;
      right: -24px;
      bottom: -24px;
    }

    @media (min-width: 1366px) {
      display: none;
    }
  }

  .cloud3 {
    visibility: hidden;
    opacity: 0;
    display: flex;
    background: #ffffff;
    width: 70px;
    height: 70px;
    position: absolute;
    border-radius: 50%;
    right: 10px;
    bottom: -68px;
    z-index: -100;

    @media (min-width: 768px) {
      right: 24px;
      bottom: -60px;
    }

    @media (min-width: 1366px) {
      display: none;
    }
  }

  .cloud4 {
    visibility: hidden;
    opacity: 0;
    display: flex;
    background: #ffffff;
    width: 70px;
    height: 70px;
    position: absolute;
    border-radius: 50%;
    right: -55px;
    bottom: -35px;
    z-index: -100;

    @media (min-width: 768px) {
      bottom: -32px;
    }

    @media (min-width: 1366px) {
      display: none;
    }
  }

  .buttons {
    display: flex;
    position: relative;

    @media (min-width: 1366px) {
      visibility: hidden;
      position: absolute;
      right: 10px;
      opacity: 0;
      height: 56px;
      background: #27debf;
      border-radius: 28px;
      align-items: center;
      width: 477px;
      z-index: -1;
      box-shadow: 0px 3px 6px #00000029;
    }
  }

  .contact {
    visibility: hidden;
    opacity: 0;
    display: flex;
    position: absolute;
    top: -116px;
    right: 18px;
    border-radius: 15px;
    width: 150px;
    border: none;
    color: #0e273b;
    background: #ffffff;
    font-size: 12px;
    line-height: 16px;
    min-height: 30px;
    align-items: center;
    padding: 0 24px 0 14px;
    box-shadow: 0px 3px 6px #00000029;

    @media (min-width: 428px) {
      font-size: 16px;
      width: 173px;
      height: 35px;
      top: -118px;
      padding: 0 24px 0 24px;
      line-height: 18px;
    }

    @media (min-width: 1366px) {
      position: static;
      width: 215px;
      height: 56px;
      border-radius: 28px 0 0 28px;
      justify-content: center;
      font-size: 20px;
      line-height: 24px;
      color: #FFFFFF;
      background: #27DEBF;
      padding: 0;

      :after {
        content: "";
        width: 1px;
        height: 30px;
        position: absolute;
        left: 216px;
        background: #FFFFFF;
        opacity: 0.52;
      }
    }
  }

  .email {
    visibility: hidden;
    opacity: 0;
    display: flex;
    position: absolute;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #ffffff;
    top: -125px;
    right: -8px;
    box-shadow: 0px 3px 6px #0000005e;

    .emailsvg {
      width: 24px;
      height: 17px;
    }

    @media (min-width: 1366px) {
      display: none;
    }
  }

  .calendarbutton {
    visibility: hidden;
    opacity: 0;
    display: flex;
    position: absolute;
    top: -45px;
    right: 108px;
    border-radius: 15px;
    width: 150px;
    border: none;
    color: #0e273b;
    background: #ffffff;
    font-size: 12px;
    line-height: 16px;
    min-height: 30px;
    align-items: center;
    padding: 0 24px 0 14px;
    box-shadow: 0px 3px 6px #00000029;

    @media (min-width: 428px) {
      font-size: 16px;
      line-height: 18px;
      width: 180px;
      height: 35px;
      top: -47px;
      right: 106px;
      padding: 0 24px 0 24px;
    }

    @media (min-width: 1366px) {
      position: static;
      width: 223px;
      height: 56px;
      border-radius: 0;
      background: #27DEBF;
      justify-content: center;
      color: #FFFFFF;
      box-shadow: none;
      font-size: 20px;
      line-height: 24px;
      padding: 0;
    }
  }

  .calendar {
    visibility: hidden;
    opacity: 0;
    display: flex;
    position: absolute;
    top: -54px;
    right: 78px;
    width: 48px;
    height: 48px;
    background: #ffffff;
    box-shadow: 0px 3px 6px #0000005e;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    .calendarsvg {
      width: 24px;
      height: 22px;
    }

    @media (min-width: 1366px) {
      display: none;
    }
  }
`
