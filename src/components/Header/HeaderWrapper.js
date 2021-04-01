import styled, { css } from "styled-components"
import media from "styled-media-query"

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 4;

  background: #0e273b;
  border-radius: 0px 0px 20px 20px;

  .menu {
    display: none;
  }

  .menuOptions {
    display: none;
    position: absolute;
    right: -310px;
    width: 30%;
    height: 900px;

    border-radius: 0px 0px 0px 10px;
    background-color: #0e273b;

    transition: all 0.4s ease-in-out;
  }

  .menuOptionsMobile {
    position: absolute;
    top: -380px;
    width: 100%;
    height: 380px;

    padding: 30px 40px;

    border-radius: 0px 0px 10px 10px;
    background-color: white;

    transition: all 0.4s ease-in-out;

    p {
      color: #0e273b;
    }
  }

  @media (max-width: 1024px) {
    .menu:hover + .menuOptions {
      display: block;
      right: 0;
      background-color: white;
      transition: all 0.4s ease-in-out;
    }

    .menu {
      display: block;

      width: 50px;
      height: 7px;
      border-radius: 30px;

      position: absolute;
      left: 20px;
      top: 40px;

      background-color: white;
    }

    .menu ::before {
      content: "";
      width: 50px;
      height: 7px;
      border-radius: 30px;

      position: absolute;
      left: 0px;
      top: -15px;

      background-color: white;
    }
    .menu ::after {
      content: "";
      width: 50px;
      height: 7px;
      border-radius: 30px;

      position: absolute;
      left: 0px;
      top: 15px;

      background-color: white;
    }
  }
  @media (max-width: 360px) {
    .menu:hover ~ .menuOptionsMobile {
      top: 0px;
    }
    .menu:hover + .menuOptions {
      right: -310px;
    }

    .menu {
      display: block;

      width: 40px;
      height: 5px;
      border-radius: 30px;

      position: absolute;
      left: 20px;
      top: 50px;

      background-color: white;
    }

    .menu ::before {
      content: "";
      width: 40px;
      height: 5px;
      border-radius: 30px;

      position: absolute;
      left: 0px;
      top: -10px;

      background-color: white;
    }
    .menu ::after {
      content: "";
      width: 40px;
      height: 5px;
      border-radius: 30px;

      position: absolute;
      left: 0px;
      top: 10px;

      background-color: white;
    }
    .logo {
      margin-left: 30px;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80%;
    height: 100px;

    @media (max-width: 1024px) {
      justify-content: center;
    }
  }

  .options {
    color: #fff;

    ul {
      display: flex;
    }

    @media (max-width: 1024px) {
      ul {
        display: none;
      }
    }

    li {
      margin: 2px 10px;
      list-style: none;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`
