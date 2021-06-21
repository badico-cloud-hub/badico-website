import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 20px;
  line-height: 24px;
  color: #0E273B;
  font-weight: 600;
  text-align: center;
  margin: 0 29px 32px;
  position: relative;
  align-self: center;

  :after {
    content: "";
    width: 64px;
    height: 64px;
    border:6px solid #27DEBF;
    border-radius: 50%;
    position: absolute;
    top: -38px;
    left: -24px;
    z-index: -1;
    opacity: 0.68;
  }

  @media (min-width: 428px) {
    font-size: 24px;
    line-height: 29px;
    margin: 0 10% 16px;

    :after {
      width: 88px;
      height: 88px;
      border: 15px solid #27DEBF;
      left: -24px;
      top: -56px;
    }
  }

  @media (min-width: 768px) {
    font-size: 34px;
    width: 636px;
    line-height: 41px;
    margin-bottom: 24px;
    font-weight: 500;
    :after {
      width: 110px;
      height: 110px;
      border: 15px solid #27DEBF;
      left: -46px;
    }
  }

  @media (min-width: 1366px) {
    font-size: 48px;
    width: 972px;
    line-height: 58px;
    margin-bottom: 32px;
    
    :after {
      width: 223px;
      height: 223px;
      border: 25px solid #27DEBF;
      left: -106px;
      top: -118px;
    }
  }

  @media (min-width: 1920px) {
    font-size: 60px;
    width: 1124px;
    line-height: 72px;
    
    :after {
      width: 270px;
      height: 270px;
      border: 35px solid #27DEBF;
      left: -150px;
      top: -121px;
    }
  }
`

export const SubTitle = styled.h2`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #52575C;
  margin: 0 38px 82px;
  align-self: center;

  @media (min-width: 428px) {
    margin: 0 72px 112px;
  }

  @media (min-width: 768px) {
    width: 595px;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 152px;
  }

  @media (min-width: 1366px) {
    width: 847px;
    margin-bottom: 144px;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 29px;
  }
`

