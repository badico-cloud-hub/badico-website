import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  background: #DEFAF6;
  width: 100%;
`

export const Title = styled.h1`
  color: #1D4C68;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 24px;

  @media (min-width: 768px) {
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 37px;
  }

  @media (min-width: 1366px) {
  font-size: 34px;
  line-height: 41px;
  margin-bottom: 30px;
  }

  @media (min-width: 1920px) {
    font-weight: 500;
  }
`

export const Text = styled.p`
  text-align: center;
  width: 292px;
  color: #52575C;
  align-self: center;
  line-height: 24px;
  font-size: 16px;
  margin-bottom: 16px;

  @media (min-width: 428px) {
    width: 354px;
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0px;
    width: 90%;
    font-size: 20px;
    line-height: 27px;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
  
  @media (min-width: 1366px) {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 8px;
  }
`

export const Button = styled.button`
  width: 254px;
  height: 62px;
  margin: 68px 0 104px;
  border: none;
  border-radius: 35px;
  background: #1D4C68;
  color: #FFFFFF;
  align-self: center;
  font-size: 16px;

  @media (min-width: 428px) {
    width: 328px;
    margin: 40px 0 104px;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    width: 510px;
    margin: 49px 0 104px;
    height: 60px;
  }

  @media (min-width: 1366px) {
    margin: 8px 0 144px;
  }

  @media (min-width: 1920px) {
    margin: 8px 0 168px;
  }
`