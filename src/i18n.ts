import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import kz from './locales/kz.json';
import ru from './locales/ru.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      kz: { translation: kz },
      ru: { translation: ru },
      en: { translation: en }
    },
    lng: 'kz',
    fallbackLng: 'kz',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
