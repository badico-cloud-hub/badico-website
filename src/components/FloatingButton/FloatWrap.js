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
    height: 150vh;
    background: rgba(0, 0, 0, .3);
    position: absolute;
    bottom: -120px;
    right: 0;
  }

  .div1{
    display: none;
    background: white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    position: fixed;
    right: -45px;
    bottom: 36px;
  }

  .div2{
    display: none;
    background: white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    position: fixed;
    bottom: -40px;
    right: 25px;
  }

  .div3{
    display: none;
    background: white;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    position: fixed;
    bottom: 5px;
    right: 0px;
  }

  .div4{
    display: none;
    background: white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    position: fixed;
    bottom: -10px;
    right: -15px;
  }

  .icon {
    display: none;
    background: #27debf;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 30px;
    right: 25px;
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

  .buttonsFilho button{
    height: 27px;
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
    bottom: 59px;
    right: 100px;
    z-index: 3;
  }

  .call{
    background: #fff;
    border: none;
    width: 150px;
    position: fixed;
    right: 130px;
    bottom: 70px;
    border-radius: 13px;
    font-size: .8rem;
    padding-right: 2rem;
  }

  .call a{
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
    bottom: 129px;
    right: 20px;
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
  bottom: 40px;
  overflow: hidden;
  width: 280px;
  height: 30px;
  border-radius: 20px;
  background: #27debf;
  z-index: 1;
  padding-left: 1rem;
}

.call{
  top: 0;
  left: 0;
  background-color: #fff;
}

.buttonsFilho button{
  font-size: .8rem;
  background: transparent;
  border: none;
  padding: 0;
  position: relative;
  width: 100px;
}

.buttonsFilho button a{
  color: #FFF;
  text-decoration: none;
  font-size: .8rem;
}

.buttonsFilho button:focus{
  outline: none;
}

.iconCalendar, .iconEmail{
  display: none;
}

:hover{
  .buttonsFilho{
    display: flex;
  }
  .cloud{
    display: none;
  }
}
`}
`

export default FloatWrap
