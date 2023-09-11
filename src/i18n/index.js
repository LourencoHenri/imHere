import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt.json";
import en from "./locales/en.json";

const resources = {
	en: {
		translation: en,
	},
	pt: {
		translation: pt,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
	compatibilityJSON: "v3",
});

export default i18n;
