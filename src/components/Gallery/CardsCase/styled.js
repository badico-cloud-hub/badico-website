import styled from 'styled-components';

export const Render = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 139px;
  min-height: 163px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px black;
  align-items: center;
  justify-content: center;

  @media(min-width: 768px){
    max-width: 281px;
    min-height: 333px;
  }

  @media(min-width: 1024px){
    max-width: 228px;
    min-height: 274px;
  }
`;

export const Content = styled.div`
  min-width: 91%;
  min-height: 148px;
  display: flex;
  max-width: 125px;
  max-height: 150px;
  background: #EEF2F5;
  border-radius: 8px;
  flex-direction: column;

  @media(min-width: 768px){
    min-width: 93%;
    min-height: 315px;
  }

  @media(min-width: 1024px){
    min-width: 91%;
    min-height: 254px;
  }

  img{
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.div`
  width: 60px;
  height: 12px;
  display: flex;
  position: relative;
  margin: 0 auto;
  top: -18px;
  svg{
      width: 60px;
      height: 12px;
  };

  @media(min-width: 768px){
    width: 80px;
    height: 22px;
    top: -28px;
    svg{
      width: 80px;
      height: 22px;
  };
  }
`;

export const DivText = styled.div`
  width: 100%;
  min-height: 148px;
  padding: 5px 10px;

  @media(min-width: 768px){
    min-height: 307px;
  }

  @media(min-width: 1024px){
    min-height: 246px;
  }
`;