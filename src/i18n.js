import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './i18n/en.json'
import es from './i18n/es.json'
import fr from './i18n/fr.json'
import de from './i18n/de.json'

const supportedLanguages = ['en', 'es', 'fr', 'de']

const savedLang = localStorage.getItem('lang')
const browserLang = navigator.language.split('-')[0]

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      de: { translation: de }
    },
    lng: "en",
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
