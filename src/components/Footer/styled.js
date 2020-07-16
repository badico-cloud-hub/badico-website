import styled from "styled-components"
import Icons from "../Icons"
import media from "styled-media-query"

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #02293f;
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
  margin-top: 1rem;
  margin-bottom: 1rem;

  h1 {
    text-align: center;
    font-size: .9rem;
    font-family: "GalanoGrotesque";
    font-weight: 600;
    
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
      justify-content: start;
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
  font-size: 0.7rem;
  font-family: GalanoGrotesque;
  font-weight: 300;
  color: #e5e5e5;

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

  p {
    margin: 0 1rem;
  }
`
export const Mail = styled.div`
  margin-bottom: 0.5rem;
  display: flex;

  p {
    margin: 0 1rem;
  }
`
export const Nav = styled.nav`
  display: none;
  font-family: GalanoGrotesque;
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
  font-family: GalanoGrotesque;
  font-weight: 500;
  font-size: 0.6rem;
  margin: 1rem 0 0.5rem 0;
  text-align: center;

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
