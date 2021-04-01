import styled from "styled-components"
import media from "styled-media-query"

export const CardWrapper = styled.div`
  width: 133px;
  height: 165px;
  border: 4px solid #27debf;
  background-color: transparent;
  border-radius: 14px;
  padding: 0.3rem;
  position: relative;

  ${media.greaterThan('768px')`
  width: 262.4px;
  height: 262.38px;
  padding: 0.8rem;

  `}

`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: .3rem;

  :after {
    content: "";
    border: solid 5px #dbf5e7;
    border-radius: 14px;
    background-color: transparent;
    z-index: -1;
    display: inline-block;
    width: 107%;
    height: 108%;
    position: absolute;
    top: 1%;
    left: -9%;
  }

  ${media.greaterThan('768px')`
  :after {
    width: 103%;
    height: 105%;
    position: absolute;
    top: 1%;
    left: -15px;
  }
  `}

`
export const Content = styled.p`
  font-size: 0.875rem;
  margin: 0.3rem;

  ${media.greaterThan('768px')`
  font-size: 1rem;
  `}
`
