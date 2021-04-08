import React, { useEffect } from "react";

import { getUserLangKey } from 'ptz-i18n';
import { withPrefix } from 'gatsby-link';
import { WebsiteProvider, useWebsiteHook } from '../../contexts'

const languages = {
  langs: ['en', 'pt'],
  defaultLangKey: '/'
};

const LanguageProvider = ({ children }) => {
  const website = useWebsiteHook();
  console.log('WEB: ', website)
  const { language, setLanguage } = website;

  useEffect(() => {
    if (!language) {
      const { langs, defaultLangKey } = languages;
      const langKey = getUserLangKey(langs, defaultLangKey);
      
      setLanguage(langKey)
      
      if (langKey === "en") {
        //...
      } else {
        const homeUrl = withPrefix(`/${langKey}/`);
        window.location.href = homeUrl + window.location.pathname
      }
    }
  }, [])

  return (
    <WebsiteProvider>
      {children}
    </WebsiteProvider>
  )}

export default LanguageProvider
