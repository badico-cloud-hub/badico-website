import styled from "styled-components"
import media from "styled-media-query"

export const AboutUs = styled.div`
  background: #ffffff;
  margin: 2rem;
  overflow: hidden;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #02293F;
    margin-bottom: 1.5rem;
  }

  h2 {
    text-transform: uppercase;
    color: #27DEBF;
    width: 50%;
    position: relative;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
    margin: 0 auto 2rem auto;
  }

  h2:after {
    content: "";
    display: inline-block;
    background: #0FBF61;
    width: 100%;
    height: 0.5rem;
    border-radius: 5px;
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 0.5rem;
    opacity: 0.1;
  }

  p {
    font-weight: 500;
    font-size: 0.8rem;
    color: #151d41;
  }

  ${media.greaterThan("768px")`
  h1 {
      margin-left: 0.3rem;
      margin-bottom: 2.5rem;
  }
  h2 {
    text-align: left;
    margin-left: 1.5rem;
    margin-bottom: 2.2rem;

  }

  h2:after {
    width: 7.8rem;
    left: 0;
    top: 100%;
  }

  p {
    font-weight: 300;
    margin-left: 1.5rem;
    font-size: 1.2rem;
    color: #151d41;
  }
    `}

  ${media.greaterThan("950px")`
  padding: 2.5rem;

  h2 {
    margin-left: 2rem;
  }

  p {
    margin-left: 2rem;
  }
    `}

    ${media.greaterThan("1200px")`
    padding: 3rem;
    `}
`
