import styled from "styled-components"
import media from "styled-media-query"

export const ContentWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
      width: 40%;
      margin-left: 2rem;
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
  margin: 0 2rem;
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
  background-color: transparent;
  margin-left: 2rem;
  margin-top: 0.7rem;
  padding: 0;
  border-radius: 38px;
  font-size: 0.58rem;
  font-family: GalanoGrotesque;
  font-weight: 500;
  width: 6rem;
  color: #27debf;
  border: 1px solid #27debf;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .2s linear;

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

  ${media.greaterThan("medium")`
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
