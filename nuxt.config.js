import i18n from './src/locales';
import routes from './src/router';
import axios from './src/utils/api';

export default {
  mode: 'spa',
  devtools: true,
  head: {
    title: 'Knawat Product Module',
    htmlAttrs: {
      lang: 'en',
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
  router: {
    extendRoutes(nuxtRoutes, resolve) {
      nuxtRoutes.splice(
        0,
        nuxtRoutes.length,
        ...routes.map(({ component, ...rest }) => {
          return { ...rest, component: resolve(__dirname, component) };
        })
      );
    },
  },
  css: ['~assets/scss/main.scss'],
  plugins: [],
  srcDir: 'src/',
  components: true,
  buildModules: ['@nuxtjs/dotenv', '@nuxt/typescript-build'],
  modules: ['@nuxtjs/i18n', '@nuxtjs/axios','portal-vue/nuxt'],
  i18n,
  axios,
  build: {},
};
