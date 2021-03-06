import styled from "styled-components"
import Icons from "../Icons"
import media from "styled-media-query"

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #0E273B 0% 0% no-repeat padding-box;
  opacity: 1;
  color: #ffffff;
  height: 100%;
  border-radius: 20px 20px 0px 0px;
  overflow: hidden;

  .logo {
    display: none;
  }

  ${media.greaterThan("760px")`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    .mainFooter{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .baseFooter{
      display: flex;
      justify-content: space-between;
    }

    .logo{
      display: flex;
      width: 120px;
      margin: 0 0 0 2.5rem;
    }
  `}

  ${media.greaterThan("823px")`
    .logo{
      margin: 0 0 0 3.1rem;
    }
  `}

  ${media.greaterThan("899px")`
  .logo{
    margin: 0 0 0 3.75rem;
  }
  `}
  ${media.greaterThan("1283px")`
  .logo{
    margin: 0 0 0 4.5rem;
  }
  `}
`
export const Social = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;

  h1 {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    
  }

  ul{
    display: flex;
    list-style: none;
    justify-content: center;
  }

  ${media.greaterThan("760px")`
      margin: 3rem 0 0 4rem;
      width: 300px;


    h1 {
      text-align: left;
      font-size: 1.3rem;
    }

    ul{
      justify-content: center;
      width: 150px;
    }
  `}

  ${media.greaterThan("832px")`
    margin: 4rem 5rem;
    h1 {
      font-size: 1.4rem;
    }
  `}

  ${media.greaterThan("910px")`
  margin: 4rem 6rem;
  h1 {
    font-size: 1.5rem;
  }
  `}
`
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  margin: 0 1rem 1rem 1rem;
  font-weight: 300;
  color: #CACCCF;

  ${media.greaterThan("760px")`
  margin: 3rem 1.5rem 0 1.5rem;
  font-size: 0.7rem;
  `}

  ${media.greaterThan("832px")`
  font-size: 0.8rem;
  `}

  ${media.greaterThan("910px")`
  font-size: 0.9rem;
  width: 320px;
  `}
`
export const Adress = styled.div`
  margin-bottom: 0.7rem;
  display: inline;
  font-size: 0.75rem;

  p {
    margin: 0 1rem;
  }
`
export const Mail = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;

  p {
    margin: 0 1rem;
  }

  p:last-child {
    margin-top: 0.5rem;
  }
`
export const Nav = styled.nav`
  display: none;
  font-weight: 300;

  ul {
    display: flex;
    list-style: none;
  }
  a {
    color: #e5e5e5;
    font-size: 0.7rem;
    margin: 0.5rem 0.5rem;
    text-decoration: none;
  }

  ${media.greaterThan("760px")`
    display: flex;
    margin: .8rem 1.4rem 0.3rem 0rem;
  `}

  ${media.greaterThan("832px")`
    a {
      font-size: 0.8rem;
    }
  `}
  ${media.greaterThan("1024px")`
    margin-right: 5rem;
  `}
  ${media.greaterThan("1200px")`
    margin-right: 10rem;
  `}
`

export const Copy = styled.div`
  font-weight: 500;
  font-size: 0.625rem;
  margin: 1rem 0 0.5rem 0;
  text-align: center;
  text-transform: uppercase;

  ${media.greaterThan("760px")`
  font-size: 0.7rem;
  margin-top: 1.3rem;
  `}

  ${media.greaterThan("832px")`
  font-size: 0.8rem;
  `}
`

export const GitHubIcon = styled(Icons.Github)`
  margin-right: 10px;
  width: 1.6rem;
  color: white;
  display: inline-block;
  &:hover {
    color: gray;
  }
`
export const FacebookIcon = styled(Icons.FacebookSquare)`
  margin-right: 10px;
  width: 1.6rem;
  color: white;
  &:hover {
    color: gray;
  }
`
export const TwitterIcon = styled(Icons.Twitter)`
  margin-right: 10px;
  width: 1.6rem;
  color: white;
  &:hover {
    color: gray;
  }
`
export const YoutubeIcon = styled(Icons.Youtube)`
  margin-right: 10px;
  width: 1.6rem;
  color: white;
  &:hover {
    color: gray;
  }
`
export const LinkedinIcon = styled(Icons.LinkedinSquare)`
  margin-right: 10px;
  width: 1.6rem;
  color: white;
  &:hover {
    color: gray;
  }
`

export const InstagramIcon = styled(Icons.InstagramAlt)`
  width: 1.6rem;
  color: white;
  &:hover {
    color: gray;
  }
`
