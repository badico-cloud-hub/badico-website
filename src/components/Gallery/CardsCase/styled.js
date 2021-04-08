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
`;

export const Content = styled.div`
  min-width: 125px;
  min-height: 148px;
  display: flex;
  max-width: 125px;
  max-height: 150px;
  background: #EEF2F5;
  border-radius: 8px;
  flex-direction: column;

  img{
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.div`
  width: ${props => props.width ? props.height : "60px"};
  height: ${props => props.height ? props.height : "20px"};
  display: flex;
  position: relative;
  margin: 0 auto;
  top: ${props => props.top ? props.top : "125px"};
  svg{
      width: ${props => props.width ? props.height : "60px"};
      height: ${props => props.height ? props.height : "20px"};
  };
`;

export const DivText = styled.div`
  width: 100%;
  min-height: 148px;
  padding: 5px 10px;
`;