import { defineStore } from 'pinia';
import type { User } from '~/types/auth';

export const useAuthStore = defineStore('auth', () => {
  const user = useCookie<User | null>('auth_user', { default: () => null });
  const accessToken = useCookie<string | null>('access_token', {
    default: () => null,
  });
  const refreshToken = useCookie<string | null>('refresh_token', {
    default: () => null,
  });

  const isAuthenticated = computed(() => !!accessToken.value);

  const setAuth = (newUser: User) => {
    user.value = newUser;
    if (newUser.accessToken) accessToken.value = newUser.accessToken;
    if (newUser.refreshToken) refreshToken.value = newUser.refreshToken;
  };

  const logout = () => {
    user.value = null;
    accessToken.value = null;
    refreshToken.value = null;
    navigateTo('/auth/login');
  };

  return { user, refreshToken, accessToken, isAuthenticated, setAuth, logout };
});
