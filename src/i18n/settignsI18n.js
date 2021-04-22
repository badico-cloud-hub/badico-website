import translationEn from "./translationEn/index"
import translationPt from "./translationPt/index"

export const initialLanguage = "en"

export const availableTranslations = ["en", "pt"]

export const Translations = {
  en: {
    translation: translationEn,
  },
  pt: {
    translation: translationPt,
  },
}
