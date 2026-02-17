import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  const accessToken = useCookie('access_token');

  // Public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/about',
    '/contact',
    '/faq',
    '/login',
    '/register',
  ];
  const isPublicRoute = publicRoutes.includes(to.path);

  // If no token and trying to access protected route
  // if (!accessToken.value && !isPublicRoute) {
  //   return navigateTo('/login');
  // }

  // If has token, verify it with backend
  // if (accessToken.value && !authStore.isAuthenticated) {
  //   await authStore.checkAuth();
  // }

  // If trying to access login page while authenticated
  // if (accessToken.value && authStore.isAuthenticated && to.path === '/login') {
  //   return navigateTo('/dashboard');
  // }
});
