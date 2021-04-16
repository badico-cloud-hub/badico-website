import styled from "styled-components"

export const Container = styled.div`

  margin: 0 0 0 17px;

  @media(min-width: 1366px){
    margin: 0;
  }

  .checkBoxInput{
    display: none;
  }

  .cardContainer{
    height: 100%;
  }

  label{
    margin: 0;
    height: 100%;
  }

  .container{
    max-width: 1366px;

    @media(min-width: 1366px){
      justify-content: center;
    }
  }

  .div{
    padding-bottom: 14px;
    position: relative;

    @media(min-width: 768px){
      padding-bottom: 0;
    }
  }

  .react-multi-carousel-dot button {
    width: 10px;
    height: 10px;
  }

  .react-multi-carousel-track {
    height: 203px;

    @media(min-width: 768px){
      height: 313px;
    }

    @media(min-width: 1366px){
      height: 313px;
    }

    li:last-child{
      margin: 0;
    }
  }

  .react-multi-carousel-list{
    height: 235px;

    @media(min-width: 768px){
      height: 393px;
    }

    @media(min-width: 1366px){
      height: 387px;
    }
  }

  ul .react-multi-carousel-item--active{
    transform: scale(1);    
  }

  .item {
    max-width: 178px;
    height: 100%;
    margin: 0 17px 0 0;
    transition: all 1s linear;
    perspective: 600px;
    transform: scale(0.9);

    @media(min-width: 768px){
      min-width: 261px;
      max-width: 281px;
    }

    @media(min-width: 1366px){
      min-width: 248px;
      max-width: 248px;
      margin: 0 31px 0 0;
    }
  }

  .item:hover > .front {
    transition: z-index 1.1s, opacity 2s, transform 0.4s linear;
    -webkit-transition: z-index 1.1s, opacity 2s, transform 0.4s linear;
    transform: rotateY(-180deg);
    z-index: -11;
  }

  .item:hover > .back {
    transition: z-index 1.1s, transform 0.4s linear;
    -webkit-transition: z-index 1.1s, transform 0.4s linear;
    transform: rotateY(0deg);
  }

  .front {
    transition: z-index 0.5s, transform 0.4s linear;
    -webkit-transition: z-index 0.5s, transform 0.4s linear;
    top: 0;
    z-index: 10;
  }

  .back {
    transition: z-index 0.5s, opacity 1s, transform 0.4s linear;
    -webkit-transition: z-index 0.5s, opacity 1s, transform 0.4s linear;
    position: absolute;
    top: 0;
    transform: rotateY(180deg);
    z-index: -10;
  }

  @media (min-width: 1366px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) {
    min-width: 248px;
    min-height: 294px;
    max-width: 248px;
  }
`
