import styled from 'styled-components';

export const Render = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px #00000052;
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
    height: 100%;
  }
`;

export const Image = styled.div`
  width: ${props => (props.width)};
  height: ${props => (props.height)};
  display: flex;
  position: relative;
  margin: 0 auto;
  top: ${props => (props.top)};
  svg{
      width: ${props => (props.width)};
      height: ${props => (props.height)};
  };

  @media(min-width: 768px){
    width: ${props => (props.width)};
    height: ${props => (props.height)};
    top: ${props => (props.top)};
    svg{
      width: ${props => (props.width)};
      height: ${props => (props.height)};
    };
  }

  @media(min-width: 1366px){
    width: ${props => (props.width)};
    height: ${props => (props.height)};
    top: ${props => (props.top)};
    svg{
      width: ${props => (props.width)};
      height: ${props => (props.height)};
    };
  }
`;

export const DivText = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 5px 10px;

  @media(min-width: 768px){
    min-height: 100%;
  }

  @media(min-width: 1366px){
    min-height: 100%;
  }
`;