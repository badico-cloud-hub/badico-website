import styled from 'styled-components';

export const Render = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px black;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 92%;
  height: 191px;
  display: flex;
  background: #EEF2F5;
  border-radius: 8px;
  flex-direction: column;

  @media(min-width: 768px){
    height: 295px;
  }

  @media(min-width: 1366px){
    height: 295px;
  }

  .img{
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.div`
  width: 70px;
  height: 22px;
  display: flex;
  position: relative;
  margin: 0 auto;
  top: -30px;
  svg{
      width: 70px;
      height: 22px;
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

  @media(min-width: 1366px){
    width: 90px;
    height: 32px;
    top: -35px;
    svg{
      width: 90px;
      height: 32px;
    };
  }
`;

export const DivText = styled.div`
  width: 100%;
  min-height: 191px;
  padding: 5px 10px;

  @media(min-width: 768px){
    min-height: 97%;
  }

  @media(min-width: 1366px){
    min-height: 91%;
  }
`;