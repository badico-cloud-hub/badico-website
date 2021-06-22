import styled, { css } from "styled-components"
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0e273b;
  width: 100%;
  height: 72px;
  top: 0;
  position: sticky;
  z-index: 3;
  border-radius: 0px 0px 20px 20px;

  ${media.greaterThan('1024px')`
  height: 121px;
  
  `}
`
export const BoxLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  min-width: 114px;
  height: 40px;

  .logo {
    width: 114px;
    height: 40px;
  }

  ${media.greaterThan('768px')`
    width: 182px;
    height: 62px;

    .logo {
      width: 182px;
      height: 62px;
    }
  `}

  ${media.greaterThan('1024px')`
    width: 164px;
    height: 54px;
    margin-left: 140px;

    .logo {
      width: 164px;
      height: 54px;
    }
  `}

  ${media.greaterThan('1920px')`
    width: 200px;
    height: 64px;
    margin-left: 140px;

    .logo {
      width: 200px;
      height: 64px;
    }
  `}
`
export const Ghost = styled.div`
  width: 10%;
  min-width: 72px;
  height: 42px;
  background: #0e273b;

  ${media.greaterThan('768px')`
    min-width: 110px;
  `} 

  ${media.greaterThan('1024px')`
    display: none;
  `}
`
