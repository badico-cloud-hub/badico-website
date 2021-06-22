import React from "react"
import Logobadico from "../../images/logo.svg"
import * as Styled from "./style"
import lang from "../../intl/langs"
import Menudrop from './Menudrop';

const Header = ({ language }) => {

  return (
    <Styled.HeaderWrapper>
      <Styled.Container>
        <Styled.Ghost />
        <Styled.BoxLogo>
          <Logobadico className="logo" alt="Badico's logo" />
        </Styled.BoxLogo>
        <Menudrop lang={lang} language={language} />
      </Styled.Container>
    </Styled.HeaderWrapper>
  )
}

export default Header
