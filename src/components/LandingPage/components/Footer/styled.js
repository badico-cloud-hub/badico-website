import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  padding: 0px 35px;
  margin: 0 auto;
  
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
    padding: 10px 60px;
  }

  hr {
    margin-top: 0px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 1366px) {
    padding: 10px 110px;
  }
`

export const LineUp = styled.div`
  width: 100%;
  padding: 10px 0px;

  .logoBadico {
    svg {
      width: 148px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1366px) {
    .logoBadico {
      svg {
        width: 162px;
      }
    }
  }
  @media (min-width: 1920px) {
    .logoBadico {
      svg {
        width: 200px;
      }
    }
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

  border: 2px solid #a0a4a8;
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

  ul {
    margin-bottom: 0px;
    display: flex;
  }

  li {
    list-style: none;
  }

  .icon {
    width: 24px;
    height: 24px;

    margin: 0px 10px 0px;
  }

  ul li:nth-of-type(4) .icon {
    width: 34px;
    height: 24px;
  }
`

export const MenuOptions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    color: #52575c;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
  }

  ul {
    width: 230px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: flex-start;
  }

  li {
    list-style: none;
    padding: 0 10px;
  }

  li:first-child {
    padding: 0px;
  }

  li:nth-of-type(4) {
    padding: 0px;
  }

  p {
    display: none;
  }

  @media (min-width: 428px) {
    flex-direction: initial;

    ul {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      flex-wrap: wrap;
    }

    li:first-child {
      padding: 0px 10px;
    }
    li:nth-of-type(4) {
      padding: 0px 10px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;

    a {
      color: #52575c;
      font-size: 18px;
    }

    ul {
      width: 70%;

      display: flex;
      /* justify-content: space-between; */
      align-items: center;

      flex-wrap: wrap;
    }

    p {
      display: block;

      font-size: 15px;
      color: #52575c;
      text-align: center;
      margin-bottom: 40px;
    }

    li:first-child {
      padding: 0px;
    }

    li:nth-of-type(4) {
      padding: 0px 10px;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: initial;

    ul {
      width: 535px;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      flex-wrap: wrap;
    }

    li:first-child {
      padding: 0px 10px 0px 0px;
    }
    li:nth-of-type(4) {
      padding: 0px 10px;
    }
    p {
      margin-bottom: 15px;
    }
  }

  @media (min-width: 1366px) {
    margin-bottom: 10px;

    ul {
      width: 620px;
    }

    a {
      font-size: 20px;
    }

    p {
      margin-bottom: 20px;
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

  border: 2px solid #a0a4a8;
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

  ul {
    margin-bottom: 0px;
    display: flex;
  }

  li {
    list-style: none;
  }

  .icon {
    width: 24px;
    height: 24px;

    margin: 0px 15px 0px;
  }

  ul li:nth-of-type(4) .icon {
    width: 34px;
    height: 24px;
  }
`
