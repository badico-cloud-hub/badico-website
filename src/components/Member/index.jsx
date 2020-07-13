import React from "react"

const Member = props => {
  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/150"/>
        <h1>{props.name}</h1>
        <h2>{props.position}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Member;
