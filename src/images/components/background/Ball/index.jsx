import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Ball = () => {
    const { img } =  useStaticQuery(
        graphql`
            query {
                img: file(relativePath: {eq: "bolinhas.png"}) {
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
        <Img fluid={img.childImageSharp.fluid}/>
    )
}


export { Ball };