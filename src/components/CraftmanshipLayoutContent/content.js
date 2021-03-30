import styled from "styled-components"
import media from "styled-media-query"

export const ContentWrapper = styled.div`
margin: 0 2rem;

${media.greaterThan('768px')`
margin: 0;
width: 100%;
`}
`

export const Content = styled.h2`    
    font-size: 1.25rem;
    line-height: 1.6rem;
    font-weight: 600;
    width: 100%;
    max-width: 375px;
    position: relative;
    text-align: center;
    margin: 3.5625rem auto;

  
  :after {
    content: "";
    background: transparent;
    border: solid 6px #27debf;
    opacity: 68%;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: inline-block;
    position: absolute;
    left: -26px;
    top: -40px;
    z-index: -1;
  }

  ${media.greaterThan('400px')`
  
  :after {
    left: -20px;
  }
  `}

  ${media.greaterThan('425px')`
  
  :after {
    left: -10px;
  }
  `}

  ${media.greaterThan('439px')`
  
  :after {
    left: -35px;
  }
  `}

  ${media.greaterThan('768px')`
  font-size: 2.125rem;
  max-width: 700px;
  line-height: 2.5rem;
  font-weight: 500;
  margin: 5.5rem auto;

  :after {
    border: solid 14px #27debf;
    width: 108px;
    height: 108px;
    left: -10px;
    top: -55px;
  }
  `}
  `
