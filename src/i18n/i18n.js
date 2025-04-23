import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationKR from './locales/kr.json';
import translationEN from './locales/en.json';

const resources = {
  kr: {
    translation: translationKR
  },
  en: {
    translation: translationEN
  }
};

i18n
  // 언어 감지 기능 사용
  .use(LanguageDetector)
  // i18n을 React에 연결
  .use(initReactI18next)
  // i18n 초기화
  .init({
    resources,
    fallbackLng: 'kr', // 기본 언어 설정
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // React에서는 이미 XSS 방지가 되므로 false로 설정
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // 선택한 언어를 localStorage에 저장
    }
  });

export default i18n; 