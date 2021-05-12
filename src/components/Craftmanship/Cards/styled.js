import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 316px;
  flex: none;
  height: 187px;
  border-radius: 8px;
  border: 3px solid #27debf;
  background: #ffffff;
  box-shadow: 0px 6px 8px #00000029;
  margin-left: 16px;

  @media (min-width: 428px) {
    width: 388px;
  }

  @media (min-width: 768px) {
    width: 530px;
    height: 216px;
    margin-left: 40px;
  }

  @media (min-width: 1920px) {
    width: 540px;
    margin-left: 32px;
  }
`

export const TitleImg = styled.div`
  display: flex;
  margin: 24px 16px 0px 16px;

  @media (min-width: 428px) {
    margin: 24px 16px 0;
  }

  @media (min-width: 768px) {
    height: 88px;
  }
`

export const Title = styled.h1`
  font-size: 16px;
  line-height: 24px;
  color: #000000de;
  margin: 0 0 0 16px;
  width: 212px;
  font-weight: 600;

  @media (min-width: 428px) {
    width: 260px;
    align-self: center;
    margin-left: 14px;
  }

  @media (min-width: 768px) {
    width:357px;
    font-size: 20px;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 29px;
  }
`

export const DivSvg = styled.div`
  width: 56px;
  height: 56px;

  .icon {
    width: 56px;
    height: 56px;
  }
  
  @media (min-width: 768px) {
    width: 88px;
    height: 88px;

    .icon {
      width: 88px;
      height: 88px;
    }
  }

  @media (min-width: 1920px) {
    width: 98px;
    height: 98px;

    .icon {
      width: 98px;
      height: 98px;
    }
  }
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: #80868b;
  margin: 0 16px 16px;

  @media (min-width: 428px) {
    margin: 0 16px 27px 86px;
  }

  @media (min-width: 768px) {
    width: 394px;
    font-size: 16px;
    line-height: 24px;
    margin: 0 16px 27px 120px;
  }

  @media (min-width: 1920px) {
    color: #52575C;
    margin: 0 16px 27px 130px;

  }
`