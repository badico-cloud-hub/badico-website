import React from "react";
import Logobadico from "../../images/logo.svg";

import * as S from "./styled";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Logobadico className="logo" alt="Badico's logo"/>
    </S.HeaderWrapper>
  )
}

export default Header
