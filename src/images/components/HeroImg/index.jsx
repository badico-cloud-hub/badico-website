import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as S from "./styled"

const HeroImg = () => {
    const { img } =  useStaticQuery(
        graphql`
            query {
                img: file(relativePath: {eq: "ampulheta2.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 966, maxHeight: 803) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                
            }
        `
    )

    return(
        <S.HeroImage fluid={img.childImageSharp.fluid} alt="An image of a hourglass"/>
    )
}


export { HeroImg };