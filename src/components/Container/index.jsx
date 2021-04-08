import React from "react"

const Container = ({children, language}) => {
  return (
    <div language={language} style={{maxWidth: "1920px", margin: "0 auto", width: "100%"}}>
      {children}
    </div>
  )
}

export default Container
