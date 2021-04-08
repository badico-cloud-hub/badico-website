import styled from "styled-components"

export const Container = styled.div`
  .container{
    max-width: 1300px;
  }  

  .react-multi-carousel-dot button{
    width: 10px;
    height: 10px;
  }

  .react-multi-carousel-track{
    align-items: center;
    height: 167px;
  }

  .item{
    max-width: 138px;
    max-height: 163px;
    margin: 0 17px 0 0;
  }

  @media(min-width: 1024px){
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  
  @media(min-width: 1024px){
    min-width: 248px;
    min-height: 294px;
    max-width: 248px;
  }
`;
