import styled from "styled-components"
import media from "styled-media-query"

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  .ball {
    display: none;
  }

  .wave {
    position: absolute;
    z-index: -10;
    bottom: 22px;
  }

  ${media.greaterThan("428px")`
    .wave {
      bottom: 106px;
    }
  `}

  ${media.greaterThan("768px")`
    .wave {
      bottom: 35px;
    }
  `}

  ${media.greaterThan("1024px")`
    .wave {
      bottom: -80px;
    }
  `}

  ${media.greaterThan("1366px")`
    .wave {
      bottom: -80px;
    }
  `}
  
  ${media.greaterThan("1920px")`
    .wave {
      bottom: -100px;
    }

    .ball {
      display: flex;
      position: absolute;
      right: 0px;
    }
  `}
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  flex-direction: column;

  ${media.greaterThan("1024px")`
    flex-direction: row;
    justify-content: space-between;

  `}
`

export const Info = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  margin: 62px 42px 0 37px;
  min-width: 281px;


  ${media.greaterThan("428px")`
    min-width: 360px;
    margin: 74px 24px 0 44px;
  `}

  ${media.greaterThan("768px")`
    margin: 79px 242px 0 79px;
    max-width: 447px;
  `}

  ${media.greaterThan("1024px")`
    margin-right: 0;
  `}

  ${media.greaterThan("1366px")`
    margin: 110px 0 0 140px;
    align-self: left;
    max-width: 493px;
  `}

  ${media.greaterThan("1920px")`
    margin: 172px 0 0 140px;
  `}
`

export const Title = styled.h1`
  letter-spacing: 0.01px;
  font-size: 34px;
  line-height: 41px;
  margin-bottom: 16px;
  color: #fff;

  ${media.greaterThan("428px")`
    font-size: 48px;
    line-height: 58px;
    max-width: 360px;
  `}

  ${media.greaterThan("1920px")`
    font-size: 60px;
    line-height: 72px;
    max-width: 447px;
  `}
`

export const Text = styled.p`
  min-width: 192px;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 20px;
  color: #fff;

  ${media.greaterThan("428px")`
    font-size: 20px;
    margin: 0 0 48px;
  `}

  ${media.greaterThan("1920px")`
    font-size: 24px;
    line-height: 29px;
  `}
`

export const Buttons = styled.div`
  display: flex;
  width: 100%;

  button:last-child {
    display: none;
  }

  ${media.greaterThan("1024px")`
    button:last-child {
      display: block;
      margin-left: 24px;
    }
  `}
`

export const BoxImage = styled.div`
  display: flex;
  width: 312px;
  height: 260px;
  align-self: flex-end;
  margin-top: 24px;

  .hourglass {
    width: 312px;
    height: 260px;
  }

  ${media.greaterThan('428px')`
    width: 422px;
    height: 357px;

    .hourglass {
      width: 422px;
      height: 357px;
    }
  `}
  
  ${media.greaterThan('768px')`
    min-width: 536px;
    min-height: 446px;

    .hourglass {
      min-width: 536px;
      min-height: 446px;
    }
  `}

  ${media.greaterThan('1024px')`
    margin-top: 40px;
  `}

  ${media.greaterThan('1366px')`
    min-width: 580px;
    min-height: 482px;
    margin: 86px 102px 0 0;

    .hourglass {
      min-width: 580px;
      min-height: 482px;
    }
  `}

  ${media.greaterThan('1920px')`
    min-width: 884px;
    min-height: 735px;
    margin: 142px 150px 0 0;

    .hourglass {
      min-width: 884px;
      min-height: 735px;
    }
  `}
`
export const BoxBall = styled.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  right: 0px;
  width: 360px;
  height: 386px;

  .ball {
    width: 360px;
    height: 386px;
    position: absolute;
    right: -150px;
  }
`
