import React, { useEffect } from "react"

import { getUserLangKey } from 'ptz-i18n';
import { withPrefix } from 'gatsby-link';

const languages = {
  langs: ['en', 'pt'],
  defaultLangKey: '/'
};

const LanguageProvider = ({ children }) => {
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = languages;
      let langKey = getUserLangKey(langs, defaultLangKey);
      
      langKey = langKey === "en" ? "" : langKey; 
      
      const homeUrl = withPrefix(`/${langKey}/`);
      window.location.href = homeUrl + window.location.pathname
    }
  })


  return (
    <>
      {children}
    </>
  )}

export default LanguageProvider
