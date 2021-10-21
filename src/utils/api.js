export default function ({ $axios }) {
  const api = $axios.create({
    baseURL: process.env.NUXT_APP_BASE_URL,
    timeout: process.env.NUXT_APP_AXIOS_TIMEOUT_MS,
    responseType: 'json',
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
  });

  api.defaults.headers.common['Accept-Language'] =
    process.env.NUXT_APP_DEFAULT_LOCALE;

  return api;
}
