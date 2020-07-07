import React, { Component } from "react"
import * as typeformEmbed from "@typeform/embed"

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
        <button id="bt-popup" className="contact">
          Contact Us
        </button>
    )
  }
}

export default Typeform
