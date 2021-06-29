import React, { useState, useEffect } from "react"
import * as typeformEmbed from "@typeform/embed"
import CloudButton from '../CloudButton'
import lang from "../../intl/langs"


const TypeformButton = ({ language }) => {
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

export default TypeformButton;
