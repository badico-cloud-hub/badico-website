import styled, { css } from "styled-components"
import media from "styled-media-query"

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
  background-color: #FFFFFF;
  width: 100%;
  height: 72px;
  top: 0;
  font-family: "Roboto";
  position: sticky;
  z-index: 3;
  border-radius: 0px 0px 20px 20px;

  .ghost {
    width: 10%;
    min-width: 72px;
    height: 42px;
    background: #FFFFFF;
  }

  .logodiv {
    display: flex;
    justify-content: center;
    width: 80%;
    min-width: 114px;
    height: 40px;

    .logo {
      width: 114px;
      height: 40px;
    }
  }

  .back {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    :hover {
      display: none;
    }
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
    background-color: #FFFFFF;
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
    left: 0;
    top: 0;
    border-radius: 0px 0px 30px 30px;
    width: 100%;

    a {
      color: black;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.1rem;
      cursor: pointer;
    }

    ul {
      padding-top: 75px;
      list-style: none;
    }

    li {
      margin: 0 3rem;
      padding: 5px 5px 0.6rem 5px;
      border-bottom: 1px solid #00000029;
      margin-bottom: 0.5rem;
      margin-right: 4rem;
    }

    li:last-child {
      border: none;
      margin-bottom: 0;
    }
  }

  ${media.greaterThan("768px")`
  height: 121px;

  .ghost {
    min-width: 110px;
  }

  .menudrop{
    min-width: 110px;
  }

  .logodiv {
    width: 182px;
    height: 62px;

      .logo {
        width: 182px;
        height: 62px;
      }
    }

  `}

  ${media.greaterThan("1024px")`

  .logodiv {
    width: 164px;
    height: 54px;
    margin-left: 140px;

      .logo {
        width: 164px;
        height: 54px;
      }
  }

  .ghost {
    display: none;
  }

  .open, .close {
    display: none;
  }

  .menudrop {
    width: 70%;

    .drop-content {
      display: flex;
      position: static;
      flex-direction: row;
      background: #FFFFFF;
      justify-content: flex-end;

      a {
        color: #0E273B;
        font-size: 16px;
      }

      ul {
        text-align: right;
        padding: 0;
        margin: 0;

      }

      li {
        padding: 0 26px 0 0;
        margin: 0;
        display: inline;
        border: 0;
      }
    }
  }
  `}

  ${media.greaterThan("1366px")`

  .logodiv {
    width: 200px;
    height: 64px;
    margin-left: 140px;

      .logo {
        width: 200px;
        height: 64px;
      }
  }

  .menudrop {
    .drop-content {
      a {
        font-size: 20px;
      }
    }
  }
  `}
`
