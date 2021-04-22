import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 74px;
  font-family: "Roboto";

  @media (min-width: 1366px) {
    max-width: 500px;
    margin-left: 140px;
    align-items: initial;
  }

  @media (min-width: 1920px) {
    max-width: 860px;

    p {
      width: 532px;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 428px) {
    min-width: 353px;
    max-width: 550px;
  }

  @media (min-width: 768px) {
    max-width: 607px;
  }

  @media (min-width: 1366px) {
    max-width: 478px;
    margin: 0;
  }
`

export const Title = styled.h1`
  min-width: 286px;
  margin-bottom: 24px;
  color: #1d4c68;
  font-size: 24px;
  line-height: 29px;
  font-weight: 600;
  letter-spacing: 0.1;

  @media (min-width: 428px) {
    min-width: 353px;
    margin-bottom: 16px;
    line-height: 41px;
    font-size: 34px;
  }

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media (min-width: 1366px) {
    width: 478px;
    text-align: left;
  }

  @media (min-width: 1920px) {
    width: 860px;
    font-size: 60px;
    line-height: 72px;
    margin-bottom: 32px;
  }
`

export const Text = styled.p`
  min-width: 286px;
  font-size: 16px;
  color: #52575c;
  line-height: 24px;

  @media (min-width: 428px) {
    min-width: 353px;
    font-size: 20px;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1366px) {
    width: 478px;
    text-align: left;
  }

  @media (min-width: 1920px) {
    margin: 0;
    font-weight: 500;
    line-height: 29px;
  }
`
