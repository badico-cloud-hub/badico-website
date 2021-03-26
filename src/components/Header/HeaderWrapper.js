import styled, { css } from "styled-components"
import media from "styled-media-query"

export const HeaderWrapper = styled.div`
  background: #0E273B 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;

  .logo{
    margin: 2rem 0 1rem 2rem;
    width: 150px;
  }

  .logo g text tspan{
    font-family: 'Clarika' !important;
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
    display: inline-block;
    float: left;
    margin-top: 32px;
    margin-right: 30px;

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
    border: none;
    cursor: pointer;
    background: #0E273B 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 10px;
    font-size: 15px;
    color: white;

    :focus {
      outline: none;
    }
  }

  .close {
    display: none;
    border: none;
    cursor: pointer;
    background-color: white;
    padding: 10px;
    font-size: 15px;
    color: black;
    position: absolute;
    right: 39px;
    top: 39px;

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
      padding-top: 5rem;
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
