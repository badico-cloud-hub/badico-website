import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: #FFFFFF;
  min-width: 312px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 26px;
  align-items: center;
  padding-top: 48px;
  margin-bottom: 104px;

  @media (min-width: 428px) {
    min-width: 365px;
  }

  @media (min-width: 768px) {
    min-width: 685px;
    padding-top: 8px;
  }

  @media (min-width: 1366px) {
    min-width: 1090px;
    height: 612px;
    margin-bottom: 136px;
  }

  @media (min-width: 1920px) {
    max-width: 1425px;
    width: 1425px;
    height: 592px;
    margin-bottom: 145px;
  }
`

export const Opportunities = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1366px) {
    flex-direction: row;
  }
`

export const AlignOpportunities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 656px;
    flex-direction: row;
    padding: 0 39px;
  }

  @media (min-width: 1366px) {
    padding: 0 64px 0 0;
  }
`

export const MiniBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  margin: 0 0 24px;

  .decrease {
    width: 50px;
    height: 72px;
  }

  .increase {
    width: 50px;
    height: 72px;
  }

  .diversification {
    width: 57px;
    height: 72px;
  }

  @media (min-width: 428px) {
    height: 278px;

    .decrease {
      width: 83px;
      height: 121px;
    }

    .increase {
      width: 83px;
      height: 121px;
    }

    .diversification {
      width: 96px;
      height: 121px;
    }
  }

  @media (min-width: 768px) {
    width: 262px;
    height: 300px;
    margin: 56px 0 0;
    .decrease {
      width: 98px;
      height: 142px;
    }

    .increase {
      width: 98px;
      height: 142px;
    }

    .diversification {
      width: 100px;
      height: 126px;
    }
  }

  @media (min-width: 1366px) {
    height: 375px;

    .diversification {
      width: 100px;
      height: 142px;
    }
  }
`

export const Title = styled.h1`
  color: #1d4c68;
  width: 139px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 16px 0 8px;

  @media (min-width: 428px) {
    width: 163px;
    font-size: 20px;
    margin: 32px 0 24px;
  }

  @media (min-width: 768px) {
    width: 225px;
    margin: 41px 0 24px;
  }

  @media (min-width: 1366px) {
    font-size: 24px;
    margin: 62px 0 24px;
    line-height: 29px;
  }

  @media (min-width: 1920px) {
    color: #0e273b;
  }
`

export const Text = styled.p`
  width: 232px;
  font-size: 14px;
  color: #52575c;
  line-height: 17px;
  letter-spacing: 0.01px;
  text-align: center;
  margin: 0;

  @media (min-width: 428px) {
    width: 300px;
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1366px) {
    font-size: 20px;
    font-weight: 500;
  }
`

export const Button = styled.button`
  width: 254px;
  height: 62px;
  margin: 24px 0 48px;
  background: #1d4c68;
  border-radius: 35px;
  color: #ffffff;
  border: none;
  font-size: 16px;
  line-height: 24px;

  @media (min-width: 428px) {
    width: 328px;
    margin-top: 24px;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    width: 510px;
    height: 59px;
    margin: 48px 0 64px;
  }
  @media (min-width: 1920px) {
    margin: 28px 0 64px;
  }
`

export const Background = styled.div`
  position: absolute;
  bottom: -550px;
  width: 100%;
  background: #DEFAF6;
  height: 1000px;
  z-index: -1;

  @media (min-width: 428px) {
    bottom: -350px;
  }

  @media (min-width: 768px) {
    bottom: -550px;
  }

  @media (min-width: 1366px) {
    bottom: -530px;
  }

  @media (min-width: 1920px) {
    bottom: -600px;
  }
`