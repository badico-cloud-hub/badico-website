import styled from "styled-components"

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 40px auto;
  margin-top: 210px;
  max-width: 180px;
  box-sizing: border-box;

  @media(min-width: 360px){
    max-width: 384px;
    margin-top: 210px;
  }

  @media(min-width: 768px){
    max-width: 384px;
    margin-top: 250px;
  }

  @media(min-width: 1024px){
    width: 100%;
    max-width: 870px;
    margin: 120px auto;
    margin-top: 330px;
  }

  @media(min-width: 1920px){
    width: 100%;
    max-width: 900px;
    margin-top: 240px;
  }
`;

export const TextCompanies = styled.h4`
  font-size: 0.75rem;

  @media(min-width: 768px){
    font-size: 1.5rem;
  }

  @media(min-width: 1024px){
    font-size: 1.5rem;
  }

  @media(min-width: 1920px){
    font-size: 2.125rem;
  }
`;

export const DivImages = styled.div`
  width: 100%;
  display: flex;
  margin: 17px 0 0 0;
  flex-direction: column;

  @media(min-width: 768px){
    margin: 41px 0 0 0;
  }

  @media(min-width: 1024px){
    margin: 68px 0 0 0;
    flex-direction: row;
  }
`;

export const PrimaryDiv = styled.div`
  display: flex;
  justify-content: space-between;

  .logoJump{
    width: 78px;
    height: 14px;;
  }

  .logoTailor{
    margin: 2px 0 0 0;
  }

  @media(min-width: 768px){
    .logoJump{
      width: 159px;
      height: 28px;
    }

    .logoZemo{
      width: 76px;
      height: 29px;
    }
    
    .logoTailor{
      width: 80px;
      height: 20px;
    }
  }

  @media(min-width: 1024px){
    justify-content: start;

    .logoJump{
      width: 220px;
      height: 39px;
    }

    .logoZemo{
      width: 106px;
      height: 40px;
      margin: 0 0 0 40px;
    }

    .logoTailor{
      width: 108px;
      height: 27px;
      margin: 4px 0 0 40px;
    }
  }
`;

export const SecondDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 9px 0 0 0;

  .logoBizaline{
    margin: 0 0 0 13px;
  }

  @media(min-width: 768px){
    .logoHarv{
      width: 105px;
      height: 59px;
    }

    .logoBizaline{
      width: 92px;
      height: 26px;
    }
  }

  @media(min-width: 1024px){
    margin: 0;
    align-items: stretch;

    .logoHarv{
      width: 145px;
      height: 82px;
      position: relative;
      top: -25px;
      margin: 0 0 0 40px;
    }

    .logoBizaline{
      width: 127px;
      height: 36px;
      margin: 0 0 0 40px;
    }
  }
`;