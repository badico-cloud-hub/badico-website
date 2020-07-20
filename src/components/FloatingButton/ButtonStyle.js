import styled from "styled-components"
import media from "styled-media-query"

const ButtonStyle = styled.div`
  background: #27debf;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  top: 85%;
  left: 80%;
  z-index: 1;
  box-shadow: 0 0 7px black;
  display: flex;
  justify-content: center;
  align-items: center;

  
  .buttonsFilho{
      position: absolute;
      left: -200px;
      top: 13px;
      width: 250px;
      border-radius: 20px;
      background: #27debf;
      padding: 0 12px 4px 12px;
      display: none;
      z-index: auto;
      padding-left: 1rem;
      padding-top: .1rem;
  }
  
  .buttonsFilho button{
    font-size: .7rem;
    background: #27debf;
    border: none;
  }

  .buttonsFilho button a{
    color: #FFF;
    width: 100%;
    height: 100%;
    font-family: GalanoGrotesque;
    text-decoration: none;
    padding-left: 1rem;
  }
  
  button:focus{
      outline: none;
  }

  &:hover .buttonsFilho {
    display: block;
  }

  &:focus {
    outline: none;
  }

  ${media.greaterThan("768px")`
  width: 70px;
  height: 70px;
  top: 75%;

  .buttonsFilho{
    width: 350px;
    left: -290px;
    top: 17px;
    height: 40px;
    padding-left: 2.1rem;
  }

  .buttonsFilho button{
    font-size: 1rem;
    margin-top: 3px; 
  }
  `}
`

export default ButtonStyle
