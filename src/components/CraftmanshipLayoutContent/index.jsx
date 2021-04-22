import React from "react"

import { ContentWrapper, Content } from "./content"
import lang from "../../intl/langs"

const CraftmanshipLayoutContent = ({ language }) => {
  return (
    <ContentWrapper>
      <Content>{lang[language]["craftmanship.text"]}</Content>
    </ContentWrapper>
  )
}

export default CraftmanshipLayoutContent
