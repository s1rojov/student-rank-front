import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  email: string;
  emailVerified?: boolean;
  phone?: string;
  avatar?: string;
  googleId?: string;
  givenName?: string;
  familyName?: string;
  locale?: string;
  authProvider?: 'google' | 'email';
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    accessToken: null,
    isAuthenticated: false,
    loading: false,
  }),

  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => state.isAuthenticated,
  },

  actions: {
    async login(email: string, password: string) {
      this.loading = true;
      try {
        const config = useRuntimeConfig();
        const response = await $fetch<{ accessToken: string; user: User }>(
          '/auth/login',
          {
            baseURL: config.public.apiBase,
            method: 'POST',
            body: { email, password },
          },
        );

        this.user = response.user;
        this.accessToken = response.accessToken;
        this.isAuthenticated = true;

        // Save token to cookie
        const accessTokenCookie = useCookie('access_token');
        accessTokenCookie.value = response.accessToken;

        return { success: true };
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async register(data: {
      fullName: string;
      email: string;
      phone: string;
      password: string;
    }) {
      this.loading = true;
      try {
        const config = useRuntimeConfig();
        const response = await $fetch<{ accessToken: string; user: User }>(
          '/auth/register',
          {
            baseURL: config.public.apiBase,
            method: 'POST',
            body: data,
          },
        );

        this.user = response.user;
        this.accessToken = response.accessToken;
        this.isAuthenticated = true;

        // Save token to cookie
        const accessTokenCookie = useCookie('access_token');
        accessTokenCookie.value = response.accessToken;

        return { success: true };
      } catch (error) {
        console.error('Register error:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async loginWithGoogle() {
      this.loading = true;
      try {
        const config = useRuntimeConfig();

        // Redirect to backend Google OAuth endpoint
        window.location.href = `${config.public.apiBase}/auth/google`;

        return { success: true };
      } catch (error) {
        console.error('Google login error:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async handleGoogleCallback(code: string) {
      this.loading = true;
      try {
        const config = useRuntimeConfig();
        const response = await $fetch<{ accessToken: string; user: User }>(
          '/auth/google/callback',
          {
            baseURL: config.public.apiBase,
            method: 'POST',
            body: { code },
          },
        );

        this.user = response.user;
        this.accessToken = response.accessToken;
        this.isAuthenticated = true;

        // Save token to cookie
        const accessTokenCookie = useCookie('access_token');
        accessTokenCookie.value = response.accessToken;

        return { success: true };
      } catch (error) {
        console.error('Google callback error:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.user = null;
      this.accessToken = null;
      this.isAuthenticated = false;

      // Clear cookies
      const accessTokenCookie = useCookie('access_token');
      accessTokenCookie.value = null;

      navigateTo('/');
    },

    async fetchUser() {
      const accessTokenCookie = useCookie('access_token');
      if (!accessTokenCookie.value) return;

      this.loading = true;
      try {
        const config = useRuntimeConfig();
        const response = await $fetch<User>('/auth/profile', {
          baseURL: config.public.apiBase,
          headers: {
            Authorization: `Bearer ${accessTokenCookie.value}`,
          },
        });

        this.user = response;
        this.accessToken = accessTokenCookie.value;
        this.isAuthenticated = true;
      } catch (error) {
        console.error('Fetch user error:', error);
        this.logout();
      } finally {
        this.loading = false;
      }
    },

    async checkAuth() {
      const accessTokenCookie = useCookie('access_token');
      if (!accessTokenCookie.value) {
        this.isAuthenticated = false;
        return false;
      }

      try {
        const config = useRuntimeConfig();
        const response = await $fetch<{
          isAuthenticated: boolean;
          user?: User;
        }>('/auth/check', {
          baseURL: config.public.apiBase,
          headers: {
            Authorization: `Bearer ${accessTokenCookie.value}`,
          },
        });

        if (response.isAuthenticated && response.user) {
          this.user = response.user;
          this.accessToken = accessTokenCookie.value;
          this.isAuthenticated = true;
          return true;
        } else {
          this.logout();
          return false;
        }
      } catch (error) {
        console.error('Check auth error:', error);
        this.logout();
        return false;
      }
    },
  },
});
