import styled, { css } from "styled-components"
import media from "styled-media-query"

export const MenudropWrapper = styled.div`
  width: 10%;
  min-width: 72px;
  height: 42px;
  display: flex;

  .back {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
  }

  .back {
    ${props =>
      props.isOpen &&
      css`
        display: block;
    `}
  }
`

export const ButtonOpen = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  background-color: #0e273b;
  align-items: center;
  padding: 0;

  :focus {
    outline: none;
  }
`

export const ButtonClose = styled.button`
  display: none;
  border: none;
  font-size: 15px;
  position: relative;
  bottom: 0px;
  right: 35px;
  background: transparent;
  
  :focus {
    outline: none;
  }

  ${props =>
      props.isOpen &&
      css`
        display: flex;
  `}
`

export const Nav = styled.nav`
  display: none;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0px 0px 30px 30px;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;

  ${props =>
    props.isOpen &&
    css`
      display: block;
    `}

  a {
    color: #0e273b;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
  }

  ul {
    padding-top: 75px;
    list-style: none;
  }

  li {
    margin: 0 44px 0 30px;
    padding: 16px 5px;
    border-bottom: 1px solid #00000029;
  }

  li:last-child {
    border: none;
    margin-bottom: 0;
  }
`
