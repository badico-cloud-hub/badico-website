import styled from "styled-components"
import media from "styled-media-query"

export const ContentWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 2.3125rem;
  background-color: blue;

  .bgMobile{
    position: absolute;
    left: 0;
  }

  ${media.greaterThan("768px")`
      width: 60%;
      margin: 3rem 0 0 4.9375rem;
    `}

  ${media.greaterThan("1024px")`
    width: 40%;
    margin: 2rem;
    height: 300px;
  `}

  ${media.greaterThan("huge")`
    width: 40%;
    margin: 2rem;
    height: 400px;
  `}
`

export const Text = styled.div`
width: 100%;
margin-top: 100px;
z-index: 999;
h1{
  -webkit-font-smoothing: antialiased;
  font-size: 2.125rem;
  font-weight: 400;

}
  
p{
  margin: 1.5rem 0 0 0;
  font-size: 1rem;
  font-weight: 400;

}

${media.greaterThan("768px")`
h1{
  font-size: 3rem;
}

p{
  font-size: 1.25rem;
  margin-top: 2rem;
}
`}
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  div button{
    width: 8.71875rem;
    height: 2.351875rem;
    font-size: 0.875rem;
    position: relative;
    top: 20px;
    left: 0;
    border-radius: 20px;
    padding: 0;
    background-color: transparent;
    color: #27debf;
    border: 1.5px solid #27debf;
  }

  div div{
    display: none;
  }

  ${media.greaterThan("768px")`
    flex-direction: row;

    div button{
      left: 0;
      width: 233px;
      height: 63px;
      border-radius: 30px;
      font-size: 1.25rem;
    }
  `}
`

export const Call = styled.button`
  height: 1.5rem;
  background-color: transparent;
  margin-left: 2rem;
  margin-top: 0.7rem;
  padding: 0;
  border-radius: 38px;
  font-size: 0.58rem;
  font-weight: 500;
  width: 6rem;
  color: #27debf;
  border: 1px solid #27debf;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .2s linear;

  div div{
    display: none;
  }

  &:hover {
   background: #27debf;
   a{
    color: #02293f;
   }
  }
  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #27debf;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :focus{
    outline: none;
  }

  ${media.greaterThan("768px")`
    width: 7rem;
    height: 1.8rem;
    font-size: .7rem;
  `}

  ${media.greaterThan("1024px")`
    width: 9rem;
    height: 2.5rem;
    font-size: .8rem;
`}

${media.greaterThan("huge")`
    width: 12rem;
    height: 3.5rem;
    font-size: 1.15rem;
`}
`
