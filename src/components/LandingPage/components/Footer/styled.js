import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  padding: 0px 35px;

  .copy {
    font-size: 15px;
    color: #52575c;
    margin: 20px 0px 10px 0px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .copy {
      display: none;
    }
    padding: 0px 60px;
  }

  hr {
    margin-top: 0px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`

export const LineUp = styled.div`
  width: 100%;
  padding: 10px 0px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

export const SocialMenuDesktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: row-reverse;
  }
`
export const ChangeLanguageDesktop = styled.div`
  width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #a0a4a8;
  border-radius: 40px;
  padding: 10px;
  margin-left: 10px;

  color: #a0a4a8;
  background-color: #f9f9f9;

  svg {
    width: 20px;
    height: 20px;

    margin-left: 10px;
    fill: #a0a4a8;
  }
  p {
    margin: 0px;
  }
`
export const SocialIconsDesktop = styled.div`
  p {
    font-size: 16px;
    margin-top: 10px;
  }

  .icon {
    width: 30px;
    height: 30px;

    margin: 0px 10px 0px;
  }

  .icon:nth-of-type(4) {
    width: 40px;
    height: 40px;
  }
`

export const MenuOptions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    color: #52575c;
    font-size: 14px;
    text-transform: uppercase;
  }

  ul {
    width: 270px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  li {
    list-style: none;
    margin-left: 25px;
  }

  li:first-child {
    margin-left: 0px;
  }

  li:nth-of-type(4) {
    margin-left: 0px;
  }

  p {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    a {
      color: #52575c;
      font-size: 18px;
    }

    ul{
      width: 280px;
    }

    p {
      display: block;

      font-size: 15px;
      color: #52575c;
      text-align: center;
      margin-bottom: 40px;
    }

    li{
      margin-left: 0;
    }
  }

  @media (min-width: 1366px) {
    ul {
      width: 800px;
    }

    a{
      font-size: 20px;
    }

    li:nth-of-type(4) {
      margin-left: 15px;
    }
  }
`

export const SocialMenuMobile = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`
export const ChangeLanguage = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #a0a4a8;
  border-radius: 40px;
  padding: 10px;

  color: #a0a4a8;
  background-color: #f9f9f9;

  svg {
    width: 20px;
    height: 20px;

    margin-left: 10px;
    fill: #a0a4a8;
  }
  p {
    margin: 0px;
  }
`
export const SocialIcons = styled.div`
  p {
    font-size: 16px;
    margin-top: 10px;
    text-align: center;
  }

  .icon {
    width: 30px;
    height: 30px;

    margin: 0px 15px 0px;
  }

  .icon:nth-of-type(4) {
    width: 40px;
    height: 40px;
  }
`
