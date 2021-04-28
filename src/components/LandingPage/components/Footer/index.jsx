import React, { useState, useEffect } from "react"
import * as typeformEmbed from "@typeform/embed"
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
// import YoutubeIcon from "../../images/youtube.svg"

import { useStaticQuery, graphql } from "gatsby"

import lang from "../../../../intl/langs"

const Footer = ({ language }) => {
  const [form, setForm] = useState(null)

  useEffect(() => {
    const contactForm = typeformEmbed.makePopup(
      "https://ask767898.typeform.com/to/rRIqbEzo",
      {
        mode: "drawer_right",
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: function () {
          console.log("Typeform sucessfully submitted")
        },
      }
    )
    setForm(contactForm)
  }, [])

  const {
    site: {
      siteMetadata: {
        socialMedia: { facebook, github, instagram },
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
                <a href={facebook} target="_blank" rel="noreferrer">
                  <FaceIcon className="icon" />
                </a>
              </li>
              <li>
                <a href={instagram} target="_blank" rel="noreferrer">
                  <InstaIcon className="icon" />
                </a>
              </li>
              <li>
                <a href={github} target="_blank" rel="noreferrer">
                  <GitIcon className="icon" />
                </a>
              </li>
              {/* <li>
                <a href="" target="_blank" rel="noreferrer">
                  <YoutubeIcon className="icon" />
                </a>
              </li> */}
            </ul>
          </SocialIconsDesktop>
        </SocialMenuDesktop>
      </LineUp>
      <hr />
      <MenuOptions>
        <ul>
          <li>
            <a href="/">{lang[language]["menu.div.options.0"]}</a>
          </li>
          <li>
            <a href="/#capacities">{lang[language]["menu.div.options.1"]}</a>
          </li>
          {/* <li>
            <a href="#">{lang[language]["menu.div.options.2"]}</a>
          </li> */}
          {/* <li>
            <a href="">{lang[language]["menu.div.options.3"]}</a>
          </li> */}
          <li>
            <a href="/#about">{lang[language]["menu.div.options.4"]}</a>
          </li>
          <li>
            <a
              onClick={() => {
                form.open()
              }}
            >
              {lang[language]["menu.div.options.5"]}
            </a>
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
              <a href={facebook} target="_blank" rel="noreferrer">
                <FaceIcon className="icon" />
              </a>
            </li>
            <li>
              <a href={instagram} target="_blank" rel="noreferrer">
                <InstaIcon className="icon" />
              </a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noreferrer">
                <GitIcon className="icon" />
              </a>
            </li>
            <li>
              {/* <a href="" target="_blank" rel="noreferrer">
                <YoutubeIcon className="icon" />
              </a> */}
            </li>
          </ul>
        </SocialIcons>
      </SocialMenuMobile>
      <p class="copy">{copyright}</p>
    </Container>
  )
}

export default Footer
