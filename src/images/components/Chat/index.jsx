import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Chat = () => {
    const { img } =  useStaticQuery(
        graphql`
            query {
                img: file(relativePath: {eq: "chat.png"}) {
                    childImageSharp {
                        fixed(width: 25, height: 25) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                
            }
        `
    )

    return(
        <Img fixed={img.childImageSharp.fixed} alt="Icon chat"/>
    )
}


export { Chat };