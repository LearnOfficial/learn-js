import { I18n } from 'i18n-js';
import en from './locale/en.json';
import es from './locale/es.json';

export const LOCALES = {
  en,
  es
};

export type LocaleSymbol = keyof typeof LOCALES;

export const i18n = new I18n(LOCALES);
