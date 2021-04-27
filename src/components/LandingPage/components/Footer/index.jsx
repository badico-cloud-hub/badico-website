import React from "react"

import {
  Container,
  LineUp,
  MenuOptions,
  SocialMenuMobile,
  SocialMenuDesktop,
  ChangeLanguage,
  ChangeLanguageDesktop,
  SocialIcons,
  SocialIconsDesktop,
} from "./styled"
import Logobadico from "../../images/logo.svg"
import ArrowUp from "../../images/seta-para-cima.svg"
import FaceIcon from "../../images/facebook.svg"
import InstaIcon from "../../images/instagram.svg"
import GitIcon from "../../images/github.svg"
import YoutubeIcon from "../../images/youtube.svg"

import { useStaticQuery, graphql } from "gatsby"

import lang from "../../../../intl/langs"

const Footer = ({ language }) => {
  const {
    site: {
      siteMetadata: {
        socialMedia: { facebook, github, linkedin, instagram },
        copyright,
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            facebook
            github
            linkedin
            instagram
          }
          copyright
        }
      }
    }
  `)
  return (
    <Container>
      <LineUp>
        <div className="logoBadico">
          <Logobadico />
        </div>
        <SocialMenuDesktop>
          <ChangeLanguageDesktop>
            <p>Português</p>
            <ArrowUp />
          </ChangeLanguageDesktop>
          <SocialIconsDesktop>
            <ul className="icons">
              <li>
                <a href={facebook} target="_blank" target="_blank">
                  <FaceIcon className="icon" />
                </a>
              </li>
              <li>
                <a href={instagram} target="_blank">
                  <InstaIcon className="icon" />
                </a>
              </li>
              <li>
                <a href={github} target="_blank">
                  <GitIcon className="icon" />
                </a>
              </li>
              <li>
                <a href="">
                  <YoutubeIcon className="icon" />
                </a>
              </li>
            </ul>
          </SocialIconsDesktop>
        </SocialMenuDesktop>
      </LineUp>
      <hr />
      <MenuOptions>
        <ul>
          <li>
            <a href="#">{lang[language]["menu.div.options.0"]}</a>
          </li>
          <li>
            <a href="#">{lang[language]["menu.div.options.1"]}</a>
          </li>
          <li>
            <a href="#">{lang[language]["menu.div.options.2"]}</a>
          </li>
          <li>
            <a href="#capacities">{lang[language]["menu.div.options.3"]}</a>
          </li>
          <li>
            <a href="#">{lang[language]["menu.div.options.4"]}</a>
          </li>

          <li>
            <a href="#about">{lang[language]["menu.div.options.5"]}</a>
          </li>
        </ul>
        <p>{copyright}</p>
      </MenuOptions>
      <SocialMenuMobile>
        <ChangeLanguage>
          <p>Português</p>
          <ArrowUp />
        </ChangeLanguage>
        <SocialIcons>
          <p>Social Share</p>
          <ul className="icons">
            <li>
              <a href={facebook} target="_blank">
                <FaceIcon className="icon" />
              </a>
            </li>
            <li>
              <a href={instagram} target="_blank">
                <InstaIcon className="icon" />
              </a>
            </li>
            <li>
              <a href={github} target="_blank">
                <GitIcon className="icon" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <YoutubeIcon className="icon" />
              </a>
            </li>
          </ul>
        </SocialIcons>
      </SocialMenuMobile>
      <p class="copy">{copyright}</p>
    </Container>
  )
}

export default Footer
