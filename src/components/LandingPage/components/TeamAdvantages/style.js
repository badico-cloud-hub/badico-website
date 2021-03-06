import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdeadf;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
  .desktopComputer {
    display: none;
  }

  @media (min-width: 1366px) {
    .desktopComputer {
      display: block;
    }
    .desktopIcon {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const TextContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 60px 0px;
  background-color: #fdeadf;

  .texts {
    width: 88%;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
  }

  @media (min-width: 768px) {
    padding: 60px 25px;
  }
  @media (min-width: 1024px) {
    padding: 60px 100px;
    .texts {
      width: 95%;
    }
  }
  @media (min-width: 1366px) {
    margin-left: 30px;
    padding: 60px 60px;
  }
`

export const Title = styled.h1`
  width: 280px;
  font-size: 20px;
  color: #1d4c68;
  line-height: 24px;
  margin-bottom: 35px;
  text-align: center;

  @media (min-width: 428px) {
    width: 354px;
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    width: 100%;
  }

  @media (min-width: 1366px) {
    font-size: 34px;
    line-height: 41px;
    width: 100%;
    text-align: left;
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
    width: 100%;
  }

  @media (min-width: 1366px) {
    font-size: 24px;
    line-height: 29px;
    width: 100%;
    text-align: left;
    padding-right: 30px;
  }
`
export const Advantages = styled.div`
  width: 100%;
  display: flex;

  .computerIcon {
    display: none;
  }
  @media (min-width: 768px) {
    .computerIcon {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 30px;
    }

    .icon {
      width: 300px;
      height: 300px;
    }
  }
  @media (min-width: 1024px) {
    .icon {
      width: 400px;
      height: 400px;
    }
  }
  @media (min-width: 1366px) {
    .computerIcon {
      display: none;
    }
  }
`

export const TextAdvantages = styled.div`
  width: 100%;
  padding: 10px 30px;

  @media (min-width: 768px) {
    padding: 10px 10px;
  }
  @media (min-width: 1366px) {
    padding: 0px;
  }
`
export const Advantage = styled.div`
  display: flex;
  margin-top: 20px;

  .checkedIcon {
    height: 40px;
  }

  p {
    font-size: 14px;
    width: 95%;
    margin: 0px 0px 0px 5px;

    display: flex;
    align-items: center;
  }
  @media (min-width: 768px) {
    p {
      width: 80%;
    }
  }
  @media (min-width: 1024px) {
    p {
      width: 70%;
    }
  }
  @media (min-width: 1250px) {
    p {
      width: 60%;
    }
  }
  @media (min-width: 1366px) {
    p {
      font-size: 16px;
    }
  }
`
