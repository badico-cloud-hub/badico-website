import styled from "styled-components"
import media from "styled-media-query"

export const ContentWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
      width: 40%;
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
export const Container = styled.div`
  padding: 0;
`
export const Title = styled.h1`
  margin-top: 5rem;
  margin-left: 2rem;
  -webkit-font-smoothing: antialiased;
  font-size: 1.8rem;
  font-family: GalanoGrotesque;
  font-weight: 500;

  ${media.greaterThan("medium")`
    font-size: 2rem;
    margin-left: 0;
`}

${media.greaterThan("1024px")`
    font-size: 2.5rem;
`}

${media.greaterThan("huge")`
    font-size: 3.2rem;
  `}
`

export const Text = styled.p`
  margin-left: 2rem;
  font-size: 0.9rem;
  font-family: GalanoGrotesque;
  font-weight: 300;

  ${media.greaterThan("medium")`
    margin: 2rem 0;
  `}

  ${media.greaterThan("1024px")`
    font-size: 1rem;
`}

${media.greaterThan("huge")`
    font-size: 1.5rem;

`}
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    flex-direction: row;
  `}
`

export const Call = styled.button`
  height: 1.5rem;
  background-color: #27debf;
  margin-left: 2rem;
  margin-top: 0.7rem;
  padding: 0;
  border-radius: 38px;
  font-size: 0.58rem;
  font-family: GalanoGrotesque;
  font-weight: 500;
  width: 6rem;
  color: #02293f;
  border: 1px solid #27debf;
  display: flex;
  align-itens: center;
  justify-content: center;
  transition: transform .2s linear;

  &:hover {
   transform: scaleX(1.03) scale(1.03);
  }
  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #02293f;
    display: flex;
    justify-content: center;
    margin-top: 3.5px;
  }

  :focus{
    outline: none;
  }

  ${media.greaterThan("medium")`
    width: 7rem;
    height: 1.8rem;
    font-size: .7rem;
    a{
      margin-top: 4px;
    }
  `}

  ${media.greaterThan("1024px")`
    width: 9rem;
    height: 2.5rem;
    font-size: .8rem;
    a{
      margin-top: 7px;
    }
`}

${media.greaterThan("huge")`
    width: 12rem;
    height: 3.5rem;
    font-size: 1.15rem;
    a{
      margin-top: 9.5px;
    }
`}
`
