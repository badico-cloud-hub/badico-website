import React, { Component } from "react"
import * as typeformEmbed from "@typeform/embed"
import TypeformButton from "./TypefromButton"

class Typeform extends Component {
  componentDidMount() {
    const popup1 = typeformEmbed.makePopup(
      "https://ask767898.typeform.com/to/rRIqbEzo",
      {
        mode: "drawer_right",
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: function () {
          console.log("Typeform sucessfully submitted")
        },
      }
    )
    document.getElementById("bt-popup").addEventListener("click", function () {
      popup1.open()
    })
  }
  render() {
    return (
        <TypeformButton id="bt-popup" >
          <p>Contact Us</p>
        </TypeformButton>
    )
  }
}

export default Typeform
