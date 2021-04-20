import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 674px;
  margin: 100px auto 16px;

  @media (min-width: 1366px) {
    margin: 120px 0 16px 30px;
  }

  @media (min-width: 1920px) {
    margin: 198px 30px 16px 82px;
  }
`

export const Box = styled.div`
  display: flex;
  position: relative;
  font-family: Roboto;
  width: 80%;
  min-width: 312px;
  height: 462px;
  flex-direction: column;
  border-radius: 22px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;

  @media (min-width: 428px) {
    min-width: 365px;
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: 607px;
    height: 498px;
  }

  @media (min-width: 1366px) {
    width: 100%;
    max-width: 580px;
    max-height: 532px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    max-width: 674px;
    height: 532px;
  }
`

export const DivCoder = styled.div`
  display: flex;
  position: absolute;
  width: 110px;
  height: 110px;
  top: -62px;
  right: 12px;

  .coder {
    width: 110px;
    height: 110px;
  }
  @media (min-width: 1440px) {
    width: 144px;
    height: 142px;

    .coder {
      width: 144px;
      height: 142px;
    }
  }
`

export const Title = styled.h1`
  font-size: 20px;
  margin: 66px auto 40px;
  width: 234px;
  line-height: 24px;
  text-align: center;

  @media (min-width: 768px) {
    width: 314px;
  }

  @media (min-width: 1366px) {
    margin-bottom: 36px;
  }

  @media (min-width: 1440px) {
    max-width: 374px;
    font-size: 24px;
    line-height: 29px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  margin: 0 auto 8px;
  min-width: 280px;
  height: 54px;
  width: 90%;
  border-radius: 7px;
  border: 1px solid #e8e8e8;
  font-size: 16px;
  padding-left: 24px;
  color: #02293f;

  ::placeholder {
    color: #cacccf;
    font-size: 16px;
  }

  :focus {
    outline: none;
    border: 2px solid #1d4c68;
    border-radius: 4px;
  }

  @media (min-width: 428px) {
    min-width: 312px;
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    min-width: 566px;
  }

  @media (min-width: 1366px) {
    min-width: 532px;
    max-width: 532px;
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    min-width: 626px;
    max-width: 626px;
    height: 60px;
  }
`

export const Button = styled.button`
  min-width: 254px;
  width: 80%;
  height: 62px;
  border-radius: 35px;
  background: #1d4c68;
  border: none;
  color: #ffffff;
  margin: 16px auto 0;

  :focus {
    outline: #1d4c68;
  }

  @media (min-width: 428px) {
    min-width: 327px;
  }

  @media (min-width: 768px) {
    min-width: 534px;
    margin-top: 8px;
  }

  @media (min-width: 1366px) {
    min-width: 510px;
    max-width: 510px;
    height: 59px;
  }
`
