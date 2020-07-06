import styled from "styled-components"

export const ContentWrapper = styled.div`
  font-family: GalanoGrotesque;
  h1 {
    font-size: 1.1rem;
    line-height: 1.6rem;
    font-weight: bold;
    width: 96%;
    position: relative;
  }
  h1:after {
    content: "";
    background: transparent;
    border: solid 6px #27debf;
    opacity: 68%;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: inline-block;
    position: absolute;
    left: -13px;
    top: -22px;
    z-index: -1;
  }

  h2 {
    text-transform: uppercase;
    color: transparent;
  }

  p {
    color: transparent;
  }
`
