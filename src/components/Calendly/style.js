import styled from "styled-components"

export const Button = styled.button`
  display: none;

  @media (min-width: 1366px) {
    display: inline;
    width: 234px;
    height: 63px;
    border-radius: 30px;
    background: #27debf;
    border: 2px solid #27debf;
    margin: 0 0 0 24px;
    line-height: 24px;
    font-size: 20px;
    color: #0e273b;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: all 0.5s;

    span {
      position: absolute;
      width: 25%;
      height: 100%;
      background-color: #ffffff;
      left: calc((var(--n) - 1) * 25%);
      transform: translateY(150%);
      border-radius: 50%;
      transition: 0.5s;
      transition-delay: calc((var(--n) - 1) * 0.1s);
      z-index: -1;
    }

    :focus {
      border: 2px solid #ffffff;
      outline: none;
    }

    :focus span {
      transform: translateY(0) scale(2);
    }

    :hover {
      border: 2px solid #ffffff;
    }

    :hover span {
      transform: translateY(0) scale(2);
    }

    span:nth-child(1) {
      --n: 1;
    }

    span:nth-child(2) {
      --n: 2;
    }
    span:nth-child(3) {
      --n: 3;
    }
    span:nth-child(4) {
      --n: 4;
    }
  }
`
