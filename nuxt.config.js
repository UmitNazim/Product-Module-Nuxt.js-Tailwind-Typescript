import routes from './src/router';
import { i18nOptions } from './src/locales';
import { axiosOptions } from './src/utils/api';
import { storyBookOptions } from './src/utils/storyBook';

export default {
  ssr: true,
  devtools: true,
  head: {
    title: process.env.NUXT_APP_TITLE,
    htmlAttrs: {
      lang: process.env.NUXT_APP_DEFAULT_LOCALE,
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'https://www.knawat.com/wp-content/themes/knawatv4/dist/images/pwa/apple-icon-57x57_39f2acd9.png',
      },
    ],
  },
  dir: {
    pages: 'views',
  },
  router: {
    extendRoutes(nuxtRoutes, resolve) {
      nuxtRoutes.splice(
        0,
        nuxtRoutes.length,
        ...routes.map(({ component, ...rest }) => {
          return { ...rest, component: resolve(__dirname, component) };
        }),
      );
    },
  },
  storybook: storyBookOptions,
  css: ['~assets/scss/main.scss'],
  srcDir: 'src/',
  components: true,
  plugins: ['~/plugins/axios-accessor.ts'],
  buildModules: ['@nuxtjs/dotenv', '@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/i18n', '@nuxtjs/axios', 'portal-vue/nuxt'],
  i18n: i18nOptions,
  axios: axiosOptions,
  tailwindcss: {
    config: {
      purge: { enabled: false },
    },
  },
};
