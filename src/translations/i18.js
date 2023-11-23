import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    // Add more languages as needed
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if a translation is missing
  interpolation: {
    escapeValue: false, // React already escapes variables for us
  },
});

export default i18n;
