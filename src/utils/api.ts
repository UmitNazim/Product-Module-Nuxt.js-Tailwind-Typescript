// export interface Common {
//   Accept: string;
//   'Accept-Language': string;
// }

// export interface Headers {
//   common: Common;
// }

// export interface AxiosContentType {
//   baseURL: string;
//   timeout: number;
//   responseType: string;
//   headers: Headers;
// }

// export const axios: AxiosContentType = {
//   baseURL: process.env.NUXT_APP_BASE_URL as string,
//   timeout: process.env.NUXT_APP_AXIOS_TIMEOUT_MS as any,
//   responseType: 'json',
//   headers: {
//     common: {
//       Accept: 'application/json',
//       'Accept-Language': process.env.NUXT_APP_DEFAULT_LOCALE as string,
//     },
//   },
// };

import { NuxtAxiosInstance } from '@nuxtjs/axios';
let $axios: NuxtAxiosInstance;
export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance;
}
export { $axios };
