import styled from "styled-components"
import media from "styled-media-query"

const FloatWrap = styled.div`
display: flex;
align-items: center;
position: fixed;
top: 90%;
right: 5%;
width: 300px;
z-index: 1;

.icon{
  background: #27debf;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 80%;
  border-radius: 50%;
  box-shadow: 0 0 7px black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.buttonsFilho{
  display: none;
  position: absolute;
  left: 5%;
  overflow: hidden;
  width: 260px;
  height: 30px;
  border-radius: 20px;
  background: #27debf;
  z-index: 1;
  padding-left: 1.5rem;
  padding-top: .1rem;
}

.buttonsFilho button{
  font-size: .8rem;
  background: transparent;
  border: none;
  padding: 0 0 .25rem 0;
}

.contact:focus {
  outline: none;
}

.buttonsFilho button a{
  color: #FFF;
  width: 100%;
  height: 100%;
  font-family: GalanoGrotesque;
  text-decoration: none;
  padding-left: 1.5rem;
}

:hover{
  .buttonsFilho{
    display: block;
  }
}
`

export default FloatWrap