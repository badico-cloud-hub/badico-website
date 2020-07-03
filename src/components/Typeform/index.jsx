import React, { Component } from "react"
import * as typeformEmbed from "@typeform/embed"

class Typeform extends Component {
  componentDidMount() {
    const popup1 = typeformEmbed.makePopup(
      "https://wellingtondomingosgomes.typeform.com/to/U119jLZD",
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
