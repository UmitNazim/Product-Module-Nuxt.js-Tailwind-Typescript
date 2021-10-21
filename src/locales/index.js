import tr from './messages/tr.json';
import en from './messages/en.json';

export default {
  locales: ['en', 'tr'],
  defaultLocale: process.env.NUXT_APP_DEFAULT_LOCALE,
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, tr },
  },
};
