import React, { useEffect } from "react"

import { getUserLangKey } from "ptz-i18n"
import { withPrefix } from "gatsby-link"
import { WebsiteProvider, useWebsiteHook } from "../../contexts"

const languages = {
  langs: ["en", "pt"],
  defaultLangKey: "/",
}

const LanguageProvider = ({ children }) => {
  const website = useWebsiteHook()
  const { language, setLanguage } = website

  useEffect(() => {
    if (!language) {
      const { langs, defaultLangKey } = languages
      const langKey = getUserLangKey(langs, defaultLangKey)

      setLanguage(langKey)

      if (
        langKey !== "en" &&
        window.location.pathname.indexOf(`/${langKey}`) === -1
      ) {
        const homeUrl = withPrefix(`/${langKey}`)
        window.location.href = homeUrl + window.location.pathname
      }
    }
    // eslint-disable-next-line
  }, [])
  return (
    <WebsiteProvider>
      {children}
    </WebsiteProvider>
  )}

export default LanguageProvider
