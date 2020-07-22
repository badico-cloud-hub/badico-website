import styled from "styled-components"
import media from "styled-media-query"
import Typeform from "../Typeform/index"

const FloatWrap = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 87%;
  right: 0%;
  width: 300px;
  z-index: 1;
  cursor: pointer;

  .back{
    display: none;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .3);
    position: absolute;
    top: -466px;
    right: 0;
  }

  .div1{
    display: none;
    background: white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    position: fixed;
    right: -37px;
    top: 84%;
  }

  .div2{
    display: none;
    background: white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    position: fixed;
    top: 95%;
    right: 5px;
  }

  .div3{
    display: none;
    background: white;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    position: fixed;
    top: 86%;
    right: 7px;
  }

  .div4{
    display: none;
    background: white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    position: fixed;
    top: 90%;
    right: -15px;
  }

  .icon {
    display: none;
    background: #27debf;
    width: 50px;
    height: 50px;
    position: fixed;
    top: 88.5%;
    right: 20px;
    border-radius: 50%;
    box-shadow: 0 0 7px black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .buttonsFilho{
    display: none;
  }

  .iconCalendar{
    background: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 7px black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 30px;
    left: 200px;
    z-index: 3;
  }

  .call{
    background: #fff;
    border: none;
    width: 150px;
    position relative;
    left: -140px;
    border-radius: 13px;
    font-size: .8rem;
    padding-bottom: 0.3rem; 
    padding-right: 2rem;
  }

  .call a{
    font-family: GalanoGrotesque;
    color: #000;
    text-decoration: none;
  }

  .iconEmail{
    background: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 7px black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 100px;
    left: 290px;
    z-index: 3;
  }  

  :hover {
    .cloud, .buttonsFilho{
      display: block;
    }
  }

  .back:hover{
    display: none;
  }

  ${media.greaterThan("760px")`


.buttonsFilho{
  display: none;
  position: fixed;
  right: 30px;
  top: 90%;
  overflow: hidden;
  width: 260px;
  height: 30px;
  border-radius: 20px;
  background: #27debf;
  z-index: 1;
  padding-left: 1.5rem;
  padding-top: .1rem;
}

.call{
  top: 0;
  left: 0;
}

.buttonsFilho button{
  font-size: .8rem;
  background: transparent;
  border: none;
  padding: 0 0 .25rem 0;
}


.buttonsFilho button a{
  color: #FFF;
  width: 100%;
  height: 100%;
  font-family: GalanoGrotesque;
  text-decoration: none;
}

.buttonsFilho button:focus{
  outline: none;
}

:hover{
  .buttonsFilho{
    display: block;
  }
  .buttonsFilho .iconCalendar, .buttonsFilho .iconEmail{
    display: none;
  }
  .cloud{
    display: none;
  }
}
`}
`

export default FloatWrap
