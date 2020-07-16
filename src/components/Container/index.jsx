import React from "react"

const Container = ({children}) => {
  return (
    <div style={{maxWidth: "1300px", margin: "0 auto", width: "100%"}}>
      {children}
    </div>
  )
}

export default Container
