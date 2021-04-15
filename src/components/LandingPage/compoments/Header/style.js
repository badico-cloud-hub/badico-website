import styled, { css } from "styled-components"
import media from "styled-media-query"

export const HeaderWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  top: 0;
  position: sticky;
  z-index: 3;

  .ghost {
    width: 73px;
    height: 42px;
    background: #ffffff;
  }

  .logodiv {
    display: flex;
    width: 114px;
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

  .menu-drop {
    width: 73px;
    heighy: 42px;
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
    font-size: 15px;
    color: #0e273b;

    :focus {
      outline: none;
    }
  }

  .close {
    display: none;
    border: none;
    cursor: pointer;
    background-color: white;
    font-size: 15px;
    position: relative;
    bottom: 0px;
    right: 42px;

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

  ${media.greaterThan("1024px")`

  .open, .close {
    display: none;
  }

  .drop-content{
    display: flex;
    border: 0;
    background: #02293f;
    justify-content: end;
    position: relative;

    a {
      color: white;
    }

    ul {
      text-align: right;
      padding: 0;
      margin: 1rem 3rem 0 0;
    }
    
    li {
      padding: 0;
      padding-left: 2rem;
      margin: 0;
      display: inline;
      border: 0;
    }
  }
  `}
`
