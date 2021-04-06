import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import {
  Translations,
  initialLanguage,
  availableTranslations,
} from "./settignsI18n"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: Translations,
    lng: initialLanguage,
    fallbackLng: availableTranslations,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
