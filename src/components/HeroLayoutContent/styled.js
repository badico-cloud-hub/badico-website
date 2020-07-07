import styled from "styled-components"
import media from "styled-media-query"

export const ContentWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;

  .container {
    padding: 0;
  }

  h1 {
    margin-top: 5rem;
    margin-left: 2rem;
    -webkit-font-smoothing: antialiased;
    font-size: 1.8rem;
    font-family: GalanoGrotesque;
    font-weight: 500;
  }

  p {
    margin-left: 2rem;
    font-size: 0.9rem;
    font-family: GalanoGrotesque;
    font-weight: 300;
  }

  ${media.greaterThan("medium")`
        width: 40%;

        h1{
            font-size: 2rem;
            margin-left: 0;
        }

        p{
          margin: 2rem 0;

        }
      `}

  ${media.greaterThan("1024px")`
    width: 40%;
    margin: 2rem;
    height: 300px;
    
    h1{
      font-size: 2.5rem;
    }
    p{
      font-size: 1rem;
    }
    `}

    ${media.greaterThan("huge")`
      width: 40%;
      margin: 2rem;
      height: 400px;

      h1{
        font-size: 3.2rem;
      }
      p{
        font-size: 1.5rem;
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
    color: #02293f;
    border: 1px solid #27debf;
    display: flex;
    align-itens: center;
    justify-content: center;
    a{
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #02293f;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover{
      background-color: #02293f;
      a{
        color: #27debf;
      }
    }
  }

  .call:focus,
  .contact:focus {
    outline: none;
  }

  ${media.greaterThan("medium")`
    flex-direction: row;

    .contact{
        width: 7rem;
        height: 1.8rem;
        font-size: .7rem;
        margin-left: 0;
    }

    .call{
        width: 7rem;
        height: 1.8rem;
        font-size: .7rem;
    }
  `}

  ${media.greaterThan("1024px")`
  .contact{
    width: 9rem;
    height: 2.5rem;
    font-size: .8rem;
    margin-left: 0;
  }

  .call{
    width: 9rem;
    height: 2.5rem;
    font-size: .8rem;
  }
`}

${media.greaterThan("huge")`
  .contact{
    width: 12rem;
    height: 3.5rem;
    font-size: 1.15rem;
    margin-left: 0;
  }

  .call{
    width: 12rem;
    height: 3.5rem;
    font-size: 1.15rem;
  }

`}
`

