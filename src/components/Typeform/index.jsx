import React, { Component, useState, useEffect } from "react"
import * as typeformEmbed from "@typeform/embed"
// import TypeformButton from "./TypeformButton"
// import Email from "../../images/email.svg"
import CloudButton from '../CloudButton'
import lang from "../../intl/langs"


// class Typeform extends Component {


//   componentDidMount() {
//     const popup1 = typeformEmbed.makePopup(
//       "https://ask767898.typeform.com/to/rRIqbEzo",
//       {
//         mode: "drawer_right",
//         autoClose: 3000,
//         hideHeaders: true,
//         hideFooters: true,
//         onSubmit: function () {
//           console.log("Typeform sucessfully submitted")
//         },
//       }
//     )
//     document.getElementById("bt-popup").addEventListener("click", function () {
//       popup1.open()
//     })
//   }
//   render() {
//     return <div id="bt-popup">Contact us</div>
//   }
// }

// export default Typeform

const Typeform = ({ language }) => {
  const [form, setForm] = useState(null)

  useEffect(() => {
    const contactForm = typeformEmbed.makePopup(
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
    setForm(contactForm)
  }, [])

  return(
    <CloudButton action={() => form.open()}>
      {lang[language]["hero.buttons.0"]}
    </CloudButton>
  )
}

export default Typeform;
