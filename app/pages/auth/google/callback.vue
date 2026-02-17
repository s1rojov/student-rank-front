<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="text-center">
      <div
        class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin"
      >
        <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 text-white" />
      </div>
      <h2 class="text-xl font-semibold text-gray-900 mb-2">
        Google orqali kirilmoqda...
      </h2>
      <p class="text-gray-600">Iltimos, kuting</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from '~/stores/auth';

  useHead({
    title: 'Google OAuth - StudentRank',
  });

  const route = useRoute();
  const authStore = useAuthStore();

  onMounted(async () => {
    // Check for token in query params (if backend redirects with token)
    const token = route.query.token as string;
    const error = route.query.error as string;

    if (error) {
      console.error('Google OAuth error:', error);
      alert('Google orqali kirishda xatolik yuz berdi: ' + error);
      navigateTo('/login');
      return;
    }

    // If backend sent token directly in URL
    if (token) {
      try {
        const accessTokenCookie = useCookie('access_token');
        accessTokenCookie.value = token;

        // Fetch user profile
        await authStore.fetchUser();

        // Redirect to dashboard on success
        navigateTo('/dashboard');
      } catch (error) {
        console.error('Token validation error:', error);
        alert('Tizimga kirishda xatolik yuz berdi');
        navigateTo('/login');
      }
      return;
    }

    // If backend redirects with code (traditional OAuth flow)
    const code = route.query.code as string;

    if (!code) {
      alert('Avtorizatsiya kodi topilmadi');
      navigateTo('/login');
      return;
    }

    try {
      // Handle the Google callback by sending code to backend
      await authStore.handleGoogleCallback(code);

      // Redirect to dashboard on success
      navigateTo('/dashboard');
    } catch (error) {
      console.error('Google callback error:', error);
      alert('Tizimga kirishda xatolik yuz berdi');
      navigateTo('/login');
    }
  });
</script>
