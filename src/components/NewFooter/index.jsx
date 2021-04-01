import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../Icons"
import Logobadico from "../../images/logobadico.svg"

const NewFooter = () => {
  const {
    site: {
      siteMetadata: {
        socialMedia: { github, facebook, twitter, youtube, linkedin },
        copyright,
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            github
            facebook
            twitter
            youtube
            linkedin
          }
          copyright
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: "#02293f",
        color: "#ffffff",
        height: "100%",
        borderRadius: "20px 20px 0px 0px",
      }}
    >
      <div style={{ marginTop: "1rem", display: "inline" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          Social Share
        </h1>
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li
            style={{
              marginRight: "10px",
            }}
          >
            <a href={github}>
              <Icon.Github
                style={{
                  width: "1.8rem",
                  color: "white",
                  display: "inline-block",
                }}
              />
            </a>
          </li>
          <li
            style={{
              marginRight: "10px",
            }}
          >
            <a href={facebook}>
              <Icon.FacebookSquare
                style={{
                  width: "1.8rem",
                  color: "white",
                  display: "inline-block",
                }}
              />
            </a>
          </li>
          <li
            style={{
              marginRight: "10px",
            }}
          >
            <a href={twitter}>
              <Icon.Twitter
                style={{
                  width: "1.8rem",
                  color: "white",
                  display: "inline-block",
                }}
              />
            </a>
          </li>
          <li
            style={{
              marginRight: "10px",
            }}
          >
            <a href={youtube}>
              <Icon.Youtube
                style={{
                  width: "1.8rem",
                  color: "white",
                  display: "inline-block",
                }}
              />
            </a>
          </li>
          <li
            style={{
              marginRight: "10px",
            }}
          >
            <a href={linkedin}>
              <Icon.LinkedinSquare
                style={{
                  width: "1.8rem",
                  color: "white",
                  display: "inline-block",
                }}
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          widht: "100%",
          margin: "2rem 0rem",
          fontSize: "0.7rem",
          fontWeight: "300",
          marginBottom: "1rem",
          color: "#e5e5e5",
        }}
      >
        <div style={{ marginBottom: "0.7rem", display: "inline" }}>
          <p style={{ margin: "0 1rem" }}>143 castle road 517 </p>
          <p style={{ margin: "0 1rem" }}>district, kiyev port south Canada</p>
        </div>
        <div
          style={{
            marginBottom: "0.5rem",
            display: "flex",
          }}
        >
          <p style={{ margin: "0 1rem" }}>+55 11 941738544</p>
          <p style={{ margin: "0 1rem" }}>lucas@badico.cloud</p>
        </div>
      </div>
      <Logobadico
        className="logo"
        alt="Badico's logo"
        style={{ display: "none" }}
      />
      <div
        style={{
          fontWeight: "500",
          fontSize: "0.6rem",
          margin: "0.5rem 0rem",
        }}
      >
        {copyright}
      </div>
      <nav
        style={{
          display: "none",
          fontWeight: "300",
        }}
      >
        <a
          href=""
          style={{
            color: "#e5e5e5",
            fontSize: "0.7rem",
            margin: "0.5rem 0.5rem",
            textDecoration: "none",
          }}
        >
          Privacy Policy{" "}
        </a>
        <a
          href=""
          style={{
            color: "#e5e5e5",
            fontSize: "0.7rem",
            margin: "0.5rem 0.5rem",
            textDecoration: "none",
          }}
        >
          Customer Support
        </a>
        <a
          href=""
          style={{
            color: "#e5e5e5",
            fontSize: "0.7rem",
            margin: "0.5rem 0.5rem",
            textDecoration: "none",
          }}
        >
          Careers
        </a>
      </nav>
    </div>
  )
}

export default NewFooter
