import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
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
        // TODO: Implement actual login API call
        // const response = await $fetch('/api/auth/login', {
        //   method: 'POST',
        //   body: { email, password },
        // });

        // Simulated response
        await new Promise((resolve) => setTimeout(resolve, 1000));

        this.user = {
          id: 1,
          name: 'Test User',
          email: email,
        };
        this.token = 'fake-jwt-token';
        this.isAuthenticated = true;

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
        // TODO: Implement actual register API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return { success: true };
      } catch (error) {
        console.error('Register error:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      navigateTo('/');
    },

    async fetchUser() {
      if (!this.token) return;

      this.loading = true;
      try {
        // TODO: Implement actual fetch user API call
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        console.error('Fetch user error:', error);
        this.logout();
      } finally {
        this.loading = false;
      }
    },
  },
});
