import React, {
  createContext,
  useState,
  useContext,
} from 'react'


const WebsiteContext = createContext()

export const WebsiteProvider = ({ children }) => {
  const [language, setLanguage] = useState(null)

  return (
    <WebsiteContext.Provider
      value={{ language, setLanguage }}
    >
      {children}
    </WebsiteContext.Provider>
  )
}

export const useWebsiteHook = () => useContext(WebsiteContext)
