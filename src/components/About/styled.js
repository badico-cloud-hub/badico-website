import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
`

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 64px auto 76px;
  width: 80%;
  align-items: center;

  @media (min-width: 768px) {
    width: 78%;
  }

  @media (min-width: 1366px) {
    width: 1086px;
    align-items: initial;
  }

  @media (min-width: 1920px) {
    width: 1492px;
    margin: 124px auto 104px;
  }
`

export const Title = styled.h1`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: #0e273b;
  text-align: center;
  margin-bottom: 24px;

  @media (min-width: 428px) {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 56px;
    font-weight: 500;
  }

  @media (min-width: 1366px) {
    margin-bottom: 32px;
  }

  @media (min-width: 1920px) {
    font-size: 34px;
    line-height: 41px;
  }
`

export const SubTitle = styled.h2`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  line-height: 16px;
  font-weight: 600;
  text-align: center;
  color: #27debf;
  text-transform: uppercase;
  margin-bottom: 38px;
  letter-spacing: 0.02px;

  :after {
    content: "";
    display: inline-block;
    background: #0fbf61;
    opacity: 0.1;
    width: 90px;
    height: 7px;
    border-radius: 5px;
    margin-top: 8px;
  }

  @media (min-width: 428px) {
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 42px;

    :after {
      width: 110px;
    }
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 56px;

    :after {
      width: 120px;
    }
  }

  @media (min-width: 1366px) {
    text-align: left;
    text-transform: none;
    margin-bottom: 64px;

    :after {
      width: 178px;
      height: 15px;
    }
  }

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 29px;
    font-weight: 500;
  }
`

export const Text = styled.p`
  font-size: 14px;
  color: #52575c;
  line-height: 17px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1366px) {
    font-size: 20px;
    line-height: 24px;
  }
`
