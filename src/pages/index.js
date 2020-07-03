import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroLayout from "../components/HeroLayout/index"
import * as S from "../styled"

const IndexPage = () => (
  <Layout>
    <S.Page>
      <SEO title="Home" />
      <HeroLayout />
    </S.Page>
  </Layout>
)

export default IndexPage
