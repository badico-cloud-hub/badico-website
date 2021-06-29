import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 40px auto 86px;
  max-width: 180px;

  @media (min-width: 428px) {
    max-width: 400px;
    margin: 60px auto 100px;
  }

  @media (min-width: 768px) {
    margin-top: 80px;
  }

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 866px;
    margin: 170px auto;
  }

  @media (min-width: 1920px) {
    max-width: 900px;
    margin: 170px auto 200px;
  }
`

export const TextCompanies = styled.h4`
  font-size: 16px;
  line-height: 24px;
  color: #0E273B;
  font-weight: 600;
  margin: 0;

  @media (min-width: 428px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    font-weight: 500;
  }

  @media (min-width: 1920px) {
    font-size: 34px;
    line-height: 41px;
  }
`

export const DivImages = styled.div`
  width: 100%;
  display: flex;
  margin: 24px 0 0 0;
  flex-direction: column;
  @media (min-width: 428px) {
    margin: 46px 0 0 0;
  }

  @media (min-width: 1024px) {
    margin: 40px 0 0 0;
    flex-direction: row;
    align-items: center;
  }
`

export const PrimaryDiv = styled.div`
  display: flex;
  justify-content: space-between;

  .logoJump {
    width: 78px;
    height: 14px;
  }

  .logoZemo {
    width: 37px;
    height: 14px;
  }

  .logoTailor {
    width: 38px;
    height: 12px;
  }

  @media (min-width: 428px) {
    .logoJump {
      width: 159px;
      height: 28px;
    }

    .logoZemo {
      width: 76px;
      height: 29px;
    }

    .logoTailor {
      width: 80px;
      height: 24px;
    }
  }

  @media (min-width: 1024px) {
    justify-content: start;

    .logoJump {
      width: 220px;
      height: 39px;
    }

    .logoZemo {
      width: 106px;
      height: 40px;
      margin: 0 0 0 40px;
    }

    .logoTailor {
      width: 108px;
      height: 27px;
      margin: 4px 0 0 40px;
    }
  }
`

export const SecondDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  .logoBizaline {
    margin-left: 13px;
    width: 45px;
    height: 9px;
  }

  .logoHarv {
    width: 51px;
    height: 29px;
  }

  @media (min-width: 428px) {
    .logoHarv {
      width: 105px;
      height: 59px;
    }

    .logoBizaline {
      width: 92px;
      height: 26px;
    }
  }

  @media (min-width: 1024px) {
    margin: 0;

    .logoHarv {
      width: 145px;
      height: 82px;
      margin: 0 0 0 40px;
    }

    .logoBizaline {
      width: 127px;
      height: 36px;
      margin: 0 0 0 40px;
    }
  }
`
