import type { RuntimeConfig } from 'nuxt/schema';
import type { CookieRef } from 'nuxt/app';

export const useApi = (url: string, opts?: any) => {
  const config: RuntimeConfig = useRuntimeConfig();
  const accessToken: CookieRef<string | null | undefined> =
    useCookie('access_token');

  return $fetch(url, {
    baseURL: config.public.apiBase,
    ...opts,

    async onRequest({ options }: { options: any }): Promise<void> {
      // Add authorization header if token exists
      if (accessToken.value) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${accessToken.value}`,
        };
      }
    },

    async onResponseError({ response }: { response: any }): Promise<any> {
      // Handle 401 Unauthorized
      if (response.status === 401) {
        console.error('Unauthorized: Token is invalid or expired');

        // Clear token and redirect to login
        accessToken.value = null;

        // Only redirect if not already on login page
        if (window.location.pathname !== '/login') {
          navigateTo('/login');
        }
      }

      // Handle 403 Forbidden
      if (response.status === 403) {
        console.error(
          'Forbidden: You do not have permission to access this resource',
        );
      }

      // Handle 500 Internal Server Error
      if (response.status === 500) {
        console.error('Server error:', response._data);
      }
    },
  });
};
