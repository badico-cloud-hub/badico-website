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

  .logo {
    display: none;
  }

  ${media.greaterThan("760px")`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    .logo{
      display: flex;
      width: 160px;
      margin: 0 0 0 2.5rem;
    }
  `}

  ${media.greaterThan("832px")`
    .logo{
      width: 170px;
      margin: 0 0 0 2.5rem;
    }
  `}

  ${media.greaterThan("910px")`
  .logo{
    width: 180px;
    margin: 0 0 0 2.5rem;
  }
  `}
`
export const Social = styled.div`
  margin-top: 1rem;
  display: inline;
  h1 {
    text-align: center;
    font-size: 1rem;
    font-family: "GalanoGrotesque";
    font-weight: 600;
  }

  ${media.greaterThan("760px")`
  margin: 3rem 4rem;
    h1 {
      font-size: 1.3rem;
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
  widht: 100%;
  margin: 2rem 0rem;
  font-size: 0.7rem;
  font-family: GalanoGrotesque;
  font-weight: 300;
  margin-bottom: 1rem;
  color: #e5e5e5;

  ${media.greaterThan("760px")`
  margin: 0rem 1.5rem;
  font-size: 0.7rem;
  `}

  ${media.greaterThan("832px")`
  margin: 0rem 1.7rem;
  font-size: 0.8rem;
  `}

  ${media.greaterThan("910px")`
  margin: 0rem 2rem;
  font-size: 0.9rem;
  `}

  ${media.greaterThan("958px")`
  margin: 0rem 3rem;
  font-size: 0.9rem;
  `}

  ${media.greaterThan("986px")`
  margin: 0rem 4rem;
  font-size: 0.9rem;
  `}

  ${media.greaterThan("1020px")`
  margin: 0rem 5rem;
  `}

  ${media.greaterThan("1045px")`
  margin: 0rem 6rem;
  `}

  ${media.greaterThan("1080px")`
  margin: 0rem 6rem 0rem 17rem;
  `}
  ${media.greaterThan("1294px")`
  margin-left: 22rem;
  `}
  ${media.greaterThan("1340px")`
  margin-left: 24rem;
  `}
  ${media.greaterThan("1374px")`
  margin-left: 30rem;
  `}
  ${media.greaterThan("1500px")`
  margin-left: 35rem;
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
  a {
    color: #e5e5e5;
    font-size: 0.7rem;
    margin: 0.5rem 0.5rem;
    text-decoration: none;
  }

  ${media.greaterThan("760px")`
    display: flex;
    margin: 0rem 1.4rem 0.3rem 0rem;
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
  margin: 0.5rem 0rem;

  ${media.greaterThan("760px")`
  font-size: 0.7rem;
  `}

  ${media.greaterThan("832px")`
  font-size: 0.8rem;
  `}
`

export const GitHubIcon = styled(Icons.Github)`
  margin-right: 10px;
  width: 1.8rem;
  color: white;
  display: inline-block;
  &:hover {
    color: gray;
  }
`
export const FacebookIcon = styled(Icons.FacebookSquare)`
  margin-right: 10px;
  width: 1.8rem;
  color: white;
  &:hover {
    color: gray;
  }
`
export const TwitterIcon = styled(Icons.Twitter)`
  margin-right: 10px;
  width: 1.8rem;
  color: white;
  &:hover {
    color: gray;
  }
`
export const YoutubeIcon = styled(Icons.Youtube)`
  margin-right: 10px;
  width: 1.8rem;
  color: white;
  &:hover {
    color: gray;
  }
`
export const LinkedinIcon = styled(Icons.LinkedinSquare)`
  margin-right: 10px;
  width: 1.8rem;
  color: white;
  &:hover {
    color: gray;
  }
`
