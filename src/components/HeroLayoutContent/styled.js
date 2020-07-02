import styled from "styled-components"
import media from "styled-media-query"

export const ContentWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 5rem;
    margin-left: 2rem;
    -webkit-font-smoothing: antialiased;
    font-size: 2rem;
    font-family: GalanoGrotesque;
    font-weight: 500;
  }

  p {
    margin-left: 2rem;
    font-size: 1rem;
    font-family: GalanoGrotesque;
    font-weight: 300;
  }

  ${media.greaterThan("medium")`
        width: 40%;

        h1{
            font-size: 3rem;
        }
      `}
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  .contact {
    height: 1.5rem;
    background-color: transparent;
    margin-left: 2rem;
    margin-top: 0.7rem;
    border-radius: 38px;
    font-size: 0.58rem;
    font-family: GalanoGrotesque;
    font-weight: 500;
    width: 6rem;
    padding-right: 0.7rem;
    padding-left: 0.7rem;
    padding-bottom: 0.2rem;
    color: #27debf;
    border: 1px solid #27debf;
  }

  .contact:hover {
    background-color: #27debf;
    color: #02293f;
  }

  .call {
    height: 1.5rem;
    background-color: #27debf;
    margin-left: 2rem;
    margin-top: 0.7rem;
    border-radius: 38px;
    font-size: 0.58rem;
    font-family: GalanoGrotesque;
    font-weight: 500;
    width: 6rem;
    padding-right: 0.7rem;
    padding-left: 0.7rem;
    padding-bottom: 0.2rem;
    color: #02293f;
    border: 1px solid #27debf;
  }

  .call:hover {
    background-color: #02293f;
    color: #27debf;
  }

  ${media.greaterThan("medium")`
    flex-direction: row;

    .contact{
        width: 7rem;
        height: 1.8rem;
        font-size: .7rem;
    }

    .call{
        width: 7rem;
        height: 1.8rem;
        font-size: .7rem;
    }
  `}
`
