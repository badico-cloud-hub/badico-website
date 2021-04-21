import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 134px 0 128px;

  @media (min-width: 428px) {
    margin: 88px 0 104px;
  }

  @media (min-width: 1366px) {
    margin: 48px 0 118px;
  }

  @media (min-width: 1920px) {
    margin: 135px 0 144px;
  }
`

export const Title = styled.h1`
  width: 280px;
  font-size: 20px;
  color: #1d4c68;
  line-height: 24px;
  text-align: center;
  margin-bottom: 35px;

  @media (min-width: 428px) {
    width: 354px;
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    width: 608px;
  }

  @media (min-width: 1366px) {
    font-size: 34px;
    line-height: 41px;
    width: 814px;
  }

  @media (min-width: 1920px) {
    width: 753px;
  }
`

export const Text = styled.p`
  width: 280px;
  font-size: 16px;
  line-height: 24px;
  color: #52575c;
  text-align: center;

  @media (min-width: 428px) {
    width: 354px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    width: 608px;
  }

  @media (min-width: 1366px) {
    font-size: 24px;
    line-height: 29px;
    width: 1088px;
  }

  @media (min-width: 1920px) {
    width: 1068px;
  }
`
