import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
import enTranslation from "./locales/en/translation.json";
import geTranslation from "./locales/ge/translation.json";
import ruTranslation from "./locales/ru/translation.json";
import arTranslation from "./locales/ar/translation.json";

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      ka: { translation: geTranslation },
      ru: { translation: ruTranslation },
      ar: { translation: arTranslation },
    },
    fallbackLng: "en", // Use English if detected language is not available
    interpolation: {
      escapeValue: false, // React already escapes strings to prevent XSS
    },
  });

export default i18n;
