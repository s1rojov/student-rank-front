export default defineNuxtRouteMiddleware((to, from) => {
  // Faqat client-side ishlatish
  if (process.server) return;

  const token = useCookie('access_token');

  // Public sahifalar (autentifikatsiya talab qilmaydigan)
  const publicRoutes = [
    '/',
    '/about',
    '/contact',
    '/faq',
    '/rating',
    '/tournaments',
    '/auth/login',
    '/auth/register',
  ];

  // Agar sahifa public bo'lsa, o'tkazib yuborish
  const isPublicRoute = publicRoutes.some(
    (route) => to.path === route || to.path.startsWith(route),
  );

  if (isPublicRoute) {
    // Agar token bor va login/register sahifasiga kirishga urinayotgan bo'lsa
    if (
      token.value &&
      (to.path === '/auth/login' || to.path === '/auth/register')
    ) {
      return navigateTo('/dashboard');
    }
    return;
  }

  // Himoyalangan sahifalar (dashboard va uning barcha child routes)
  // Agar token yo'q bo'lsa, login sahifasiga yo'naltirish
  if (!token.value) {
    return navigateTo('/auth/login');
  }
});
