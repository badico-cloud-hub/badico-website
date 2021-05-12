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
  div .svg{
    transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    border-radius: 50%;
  }
  div .title {
    transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  }
  p{
    transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  }
  transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;

  :hover{
      box-shadow: rgb(0 0 0 / 10%) 0px 11px 15px -3px, rgb(0 0 0 / 4%) 0px 9px 30px 3px, rgb(0 0 0 / 4%) 0px 20px 30px 3px;
      transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
      transform: translate(2px, -5px);
      transform: scaleX(0.98101265822);
      background-color: #27DEBF0D;
      div .svg{
        transform: translate(3px, -4px);
        transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        box-shadow: rgb(0 0 0 / 10%) 0px 11px 15px -3px, rgb(0 0 0 / 4%) 0px 9px 30px 3px, rgb(0 0 0 / 4%) 0px 20px 30px 3px;
      }
      div .title{
        transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        transform: translate(-3px, -7px);
      }
      p{
        transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        transform: translate(3px, -3px);
      }
    }

  @media (min-width: 428px) {
    width: 388px;
  }

  @media (min-width: 768px) {
    width: 530px;
    height: 205px;
    margin-left: 40px;

    :hover{
      transform: translate(3px, -4px);
      transform: scaleX(0.98867924528);
      background-color: #27DEBF0D;
      div .svg{
        transform: translate(4px, -8px);
        transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        box-shadow: rgb(0 0 0 / 10%) 0px 11px 15px -3px, rgb(0 0 0 / 4%) 0px 9px 30px 3px, rgb(0 0 0 / 4%) 0px 20px 30px 3px;
      }
      div .title{
        transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        transform: translate(2px, -10px);
      }
      p{
        transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        transform: translate(2px, -20px);
      }
    }
  }

  @media(min-width: 1366px){
    :hover{
      transform: translate(3px, -4px);
      transform: scaleX(0.98867924528);
      background-color: #27DEBF0D;
      div .svg{
        transform: translate(4px, -8px);
        transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        box-shadow: rgb(0 0 0 / 10%) 0px 11px 15px -3px, rgb(0 0 0 / 4%) 0px 9px 30px 3px, rgb(0 0 0 / 4%) 0px 20px 30px 3px;
      }
      div .title{
        transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        transform: translate(2px, -10px);
      }
      p{
        transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
        transform: translate(2px, -20px);
      }
    }
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

  @media(min-width: 1366px){
    transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
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

  @media(min-width: 1366px){
    transition: transform 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  }

  @media (min-width: 1920px) {
    color: #52575C;
    margin: 0 16px 27px 130px;

  }
`
