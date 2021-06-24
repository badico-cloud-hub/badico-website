import styled from "styled-components"

export const Button = styled.button`
    width: 234px;
    height: 63px;
    border-radius: 30px;
    background: ${props => props.type === 'primary' ? '#27debf': 'transparent'};
    border: 2px solid #27debf;
    margin: 0;
    line-height: 24px;
    font-size: 20px;
    color: ${props => props.type === 'primary' ? '#0e273b': '#27debf'};
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
      color: #0e273b;
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
`
