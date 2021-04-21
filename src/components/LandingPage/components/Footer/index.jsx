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

import lang from "../../../../intl/langs"
const language = "pt"

const Footer = () => {
  return (
    <Container>
      <LineUp>
        <div>
          <Logobadico />
        </div>
        <SocialMenuDesktop>
          <ChangeLanguageDesktop>
            <p>Português</p>
            <ArrowUp />
          </ChangeLanguageDesktop>
          <SocialIconsDesktop>
            <div className="icons">
              <FaceIcon className="icon" />
              <InstaIcon className="icon" />
              <GitIcon className="icon" />
              <YoutubeIcon className="icon" />
            </div>
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
            <a href="#">Our Process</a>
          </li>
          <li>
            <a href="#">Meet Our Time</a>
          </li>
          <li>
            <a href="#capacities">{lang[language]["menu.div.options.1"]}</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>

          <li>
            <a href="#about">{lang[language]["menu.div.options.4"]}</a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                // form.open()
              }}
            >
              {lang[language]["menu.div.options.5"]}
            </a>
          </li>
        </ul>
        <p>© 2021 Badico cloud. All rights reserved.</p>
      </MenuOptions>
      <SocialMenuMobile>
        <ChangeLanguage>
          <p>Português</p>
          <ArrowUp />
        </ChangeLanguage>
        <SocialIcons>
          <p>Social Share</p>
          <div className="icons">
            <FaceIcon className="icon" />
            <InstaIcon className="icon" />
            <GitIcon className="icon" />
            <YoutubeIcon className="icon" />
          </div>
        </SocialIcons>
      </SocialMenuMobile>
      <p class="copy">© 2021 Badico cloud. All rights reserved.</p>
    </Container>
  )
}

export default Footer
