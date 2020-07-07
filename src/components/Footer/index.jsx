import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"
import Logobadico from "../../images/logobadico.svg"

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        socialMedia: { github, facebook, twitter, youtube, linkedin },
        copyright,
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            github
            facebook
            twitter
            youtube
            linkedin
          }
          copyright
        }
      }
    }
  `)
  return (
    <S.FooterWrapper>
      <S.Social>
        <h1>Social Share</h1>
        <a href={github} target="_blank" rel="noreferrer">
          <S.GitHubIcon />
        </a>
        <a href={facebook} target="_blank" rel="noreferrer">
          <S.FacebookIcon />
        </a>
        <a href={twitter} target="_blank" rel="noreferrer">
          <S.TwitterIcon />
        </a>
        <a href={youtube} target="_blank" rel="noreferrer">
          <S.YoutubeIcon />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <S.LinkedinIcon />
        </a>
      </S.Social>
      <S.Contact>
        <S.Adress>
          <p>143 castle road 517 </p>
          <p>district, kiyev port south Canada</p>
        </S.Adress>
        <S.Mail>
          <p className="number">+55 11 941738544</p>
          <p className="email">lucas@badico.cloud</p>
        </S.Mail>
      </S.Contact>
      <Logobadico className="logo" alt="Badico's logo" />
      <S.Copy>{copyright}</S.Copy>
      <S.Nav>
        <a href="">Privacy Policy </a>
        <a href="">Customer Support</a>
        <a href="">Careers</a>
      </S.Nav>
    </S.FooterWrapper>
  )
}

export default Footer
