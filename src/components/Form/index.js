import React from "react"
import "./style.css"

const Form = () => {
    return (
        <div className="container">
            <div className="titleContact">
                <p>Talk to us</p>
            </div>

            <div className="textContact">
                <p>Lorem ipsum dolor sit amet, consectetur pretium </p>
            </div>

            <input type="text" className="nameInput" placeholder="Name*"></input>
            <input type="email" className="emailInput" placeholder="Email*"></input>
            <input type="text" className="messageInput" placeholder="Message*"></input>

            <button type="button" className="emailContactButton">Contact e-mail</button>
            <button type="button" className="whatsappContactButton">Contact Whatsapp</button>

        </div>
    )
}

export default Form;