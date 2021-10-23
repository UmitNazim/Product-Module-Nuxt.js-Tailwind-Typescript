export default {
  baseURL: process.env.NUXT_APP_BASE_URL,
  timeout: process.env.NUXT_APP_AXIOS_TIMEOUT_MS,
  responseType: 'json',
  headers: {
    common: {
      Accept: 'application/json',
      'Accept-Language': process.env.NUXT_APP_DEFAULT_LOCALE,
    },
  },
};
