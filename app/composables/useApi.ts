import type { RuntimeConfig } from 'nuxt/schema';
import type { CookieRef } from 'nuxt/app';
import { useAuthStore } from '~/store/auth';

export const useApi = (url: string, opts?: any) => {
  const config: RuntimeConfig = useRuntimeConfig();
  const authStore: any = useAuthStore();
  const accessToken: CookieRef<string | null | undefined> =
    useCookie('access_token');
  const refreshToken: CookieRef<string | null | undefined> =
    useCookie('refresh_token');

  return $fetch(url, {
    baseURL: config.public.apiBase,
    ...opts,

    async onRequest({ options }: { options: any }): Promise<void> {
      if (accessToken.value) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${accessToken.value}`,
        };
      }
    },

    async onResponseError({
      response,
      options,
    }: {
      response: any;
      options: any;
    }): Promise<any> {
      if (response.status === 401 && refreshToken.value) {
        try {
          const data = await $fetch<{ accessToken: string }>(
            `${config.public.apiBase}auth/refresh`,
            {
              method: 'POST',
              body: {
                refreshToken: refreshToken.value,
                expiresInMins: 30,
              },
            },
          );
          accessToken.value = data.accessToken;
          options.headers = {
            ...options.headers,
            Authorization: `Bearer ${data.accessToken}`,
          };

          return $fetch(url, options);
        } catch (refreshError) {
          authStore.logout();
        }
      }
    },
  });
};
