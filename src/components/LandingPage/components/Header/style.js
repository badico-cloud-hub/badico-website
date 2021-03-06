import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;
  height: 72px;
  top: 0;
  font-family: "Roboto";
  position: sticky;
  z-index: 3;
  border-radius: 0px 0px 20px 20px;

  .back {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
  }

  .menudrop {
    width: 10%;
    min-width: 72px;
    height: 42px;
    display: flex;

    .drop-content,
    .close,
    .back {
      ${props =>
        props.isOpen &&
        css`
          display: block;
        `}
    }
  }

  .open {
    display: flex;
    border: none;
    cursor: pointer;
    background-color: #ffffff;
    align-items: center;
    padding: 0;

    :focus {
      outline: none;
    }
  }

  .close {
    display: none;
    border: none;
    cursor: pointer;
    font-size: 15px;
    position: relative;
    bottom: 0px;
    right: 35px;

    :focus {
      outline: none;
    }
  }

  .drop-content {
    display: none;
    background-color: #ffffff;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0px 0px 30px 30px;
    box-shadow: 0px 3px 6px #00000029;
    width: 100%;

    a {
      color: #0e273b;
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
    }

    ul {
      padding-top: 75px;
      list-style: none;
    }

    li {
      margin: 0 58px 0 38px;
      padding: 16px 5px;
      border-bottom: 1px solid #00000029;
    }

    li:last-child {
      border: none;
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    height: 121px;

    .menudrop {
      min-width: 110px;

      .drop-content {
        width: 589px;

        a {
          font-weight: 600;
          font-size: 20px;
        }

        li {
          padding: 32px 6px;
          border-bottom: 1px solid #00000029;
        }

        li:last-child {
          border: none;
          margin-bottom: 0;
        }

        ul {
          margin-top: 24px;
        }
      }
    }
  }

  @media (min-width: 1366px) {
    .open,
    .close {
      display: none;
    }

    .menudrop {
      width: 70%;

      .drop-content {
        width: 100%;
        display: flex;
        position: static;
        flex-direction: row;
        background: #ffffff;
        justify-content: flex-end;
        box-shadow: none;

        a {
          color: #0e273b;
          font-size: 20px;
          font-weight: 600;
        }

        ul {
          padding: 0;
          margin: 0 106px 0 0;
        }

        li {
          margin: 0 32px 0 0;
          padding: 0;
          display: inline;
          border: 0;
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .menudrop {
      .drop-content {
        ul {
          margin-right: 92px;
        }

        li {
          margin: 0 48px 0 0;
        }
      }
    }
  }
`

export const BoxLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  min-width: 114px;
  height: 40px;
  .logo {
    width: 114px;
    height: 40px;
  }
  @media (min-width: 768px) {
    width: 182px;
    height: 62px;
    .logo {
      width: 182px;
      height: 62px;
    }
  }
  @media (min-width: 1366px) {
    width: 164px;
    height: 54px;
    margin-left: 140px;
    .logo {
      width: 164px;
      height: 54px;
    }
  }
  @media (min-width: 1920px) {
    width: 200px;
    height: 64px;
    margin-left: 140px;
    .logo {
      width: 200px;
      height: 64px;
    }
  }
`

export const Ghost = styled.div`
  width: 10%;
  min-width: 72px;
  height: 42px;
  background: #ffffff;
  @media (min-width: 768px) {
    min-width: 110px;
  }
  @media (min-width: 1366px) {
    display: none;
  }
`
