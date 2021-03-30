import styled from "styled-components"
import media from "styled-media-query"

export const AboutUs = styled.div`
  background: #ffffff;
  margin: 7rem 2rem 2rem 2rem;
  overflow: hidden;

  h1 {
    font-size: 1.3rem;
    /* font-weight: 600; */
    color: #02293F;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  h2 {
    color: #27DEBF;
    width: 35%;
    position: relative;
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
    margin: 0 auto 2rem auto;
  }

  h2:after {
    content: "";
    display: inline-block;
    background: rgba(15, 191, 97, 0.1);
    width: 100%;
    height: 0.5rem;
    border-radius: 5px;
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 0.9rem;
  }

  .text-about{
    letter-spacing: -0.5px;
  }

  ${media.greaterThan("768px")`
  h1 {
      margin-left: 0.3rem;
      margin-bottom: 2.5rem;
  }
  h2 {
    text-align: left;
    margin-left: 1.5rem;
    margin-bottom: 2.8rem;
  }

  h2:after {
    width: 9.5rem;
    height: 0.7rem;
    left: 0;
    top: 100%;
  }

  p {
    font-weight: 400;
    margin-left: 1.5rem;
    font-size: 1rem;
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
export const Text = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  width: ${props => props.width};
  color: #151d41;
`
