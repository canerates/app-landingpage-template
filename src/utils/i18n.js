import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translations_de from "../locales/translations_de.json"
import translations_en from "../locales/translations_en.json"
import translations_es from "../locales/translations_es.json"
import translations_fr from "../locales/translations_fr.json"
import translations_ja from "../locales/translations_ja.json"
import translations_ko from "../locales/translations_ko.json"
import translations_tr from "../locales/translations_tr.json"
import translations_zhCN from "../locales/translations_zh-cn.json"
import translations_zhTW from "../locales/translations_zh-tw.json"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      "de": {
        translations: translations_de
      },
      "en": {
        translations: translations_en
      },
      "es": {
        translations: translations_es
      },
      "fr": {
        translations: translations_fr
      },
      "ja": {
        translations: translations_ja
      },
      "ko": {
        translations: translations_ko
      },
      "tr": {
        translations: translations_tr
      },
      "zh-CN": {
        translations: translations_zhCN
      },
      "zh-TW": {
        translations: translations_zhTW
      },
    },
    supportedLngs: ["de", "en", "es", "fr", "ja", "ko", "tr", "zh-CN", "zh-TW"],
    ns: ["translations"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;