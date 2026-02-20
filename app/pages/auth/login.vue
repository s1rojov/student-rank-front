<template>
  <div
    class="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12"
  >
    <div class="w-full max-w-md">
      <!-- Logo -->
      <!-- <div class="text-center mb-8">
        <a href="/" class="inline-flex items-center gap-2 justify-center">
          <div
            class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"
          >
            <UIcon name="i-heroicons-academic-cap" class="w-7 h-7 text-white" />
          </div>
          <span class="text-3xl font-bold text-gray-900">StudentRank</span>
        </a>
      </div> -->

      <!-- Login Card -->
      <UCard class="shadow-lg">
        <template #header>
          <!-- <div class="text-center">
            <h1 class="text-2xl font-bold text-gray-900">Tizimga kirish</h1>
          </div> -->
          <div class="text-center">
            <a href="/" class="inline-flex items-center gap-2 justify-center">
              <div
                class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-academic-cap"
                  class="w-7 h-7 text-white"
                />
              </div>
              <span class="text-3xl font-bold text-gray-900">StudentRank</span>
            </a>
          </div>
        </template>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-base font-medium text-gray-900 mb-2"
              >Email</label
            >
            <UInput
              v-model="form.email"
              type="email"
              placeholder="sizning@email.uz"
              icon="i-heroicons-envelope"
              size="xl"
              class="text-base w-full"
            />
          </div>

          <div>
            <label class="block text-base font-medium text-gray-900 mb-2"
              >Parol</label
            >
            <UInput
              v-model="form.password"
              type="password"
              placeholder="••••••••"
              icon="i-heroicons-lock-closed"
              size="xl"
              class="w-full text-base"
            />
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                v-model="form.remember"
                class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span class="text-base text-gray-700">Eslab qolish</span>
            </label>
            <ULink
              to="/forgot-password"
              class="text-base text-blue-600 hover:underline"
            >
              Parolni unutdingizmi?
            </ULink>
          </div>

          <UButton
            type="submit"
            color="primary"
            size="xl"
            block
            :loading="loading"
            class="text-base"
          >
            Kirish
          </UButton>
        </form>

        <template #footer>
          <div class="text-center text-base text-gray-600">
            Hisobingiz yo'qmi?
            <ULink
              to="/register"
              class="text-blue-600 font-medium hover:underline"
            >
              Ro'yxatdan o'ting
            </ULink>
          </div>
        </template>
      </UCard>

      <!-- Back to home -->
      <div class="text-center mt-6">
        <ULink
          to="/"
          class="text-gray-500 hover:text-gray-700 inline-flex items-center gap-1"
        >
          <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
          Bosh sahifaga qaytish
        </ULink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';
  import { AuthService } from '~/services/auth.service';

  useHead({
    title: 'Kirish - StudentRank',
  });

  const authStore = useAuthStore();
  const toast = useToast();
  const loading = ref(false);

  const form = reactive({
    email: '',
    password: '',
    remember: false,
  });

  const handleLogin = async () => {
    // Validatsiya
    if (!form.email || !form.password) {
      toast.add({
        title: 'Xatolik',
        description: 'Email va parolni kiriting',
        color: 'red',
        icon: 'i-heroicons-x-circle',
      });
      return;
    }

    loading.value = true;
    try {
      const response = await AuthService.login({
        email: form.email,
        password: form.password,
      });

      // Auth store ga ma'lumotlarni saqlash
      authStore.setAuth({
        ...response.user,
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      });

      toast.add({
        title: 'Muvaffaqiyatli!',
        description: 'Tizimga muvaffaqiyatli kirdingiz',
        color: 'green',
        icon: 'i-heroicons-check-circle',
      });

      // Dashboard ga yo'naltirish
      await navigateTo('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      toast.add({
        title: 'Xatolik',
        description:
          error.message ||
          "Email yoki parol noto'g'ri. Qaytadan urinib ko'ring.",
        color: 'red',
        icon: 'i-heroicons-x-circle',
      });
    } finally {
      loading.value = false;
    }
  };
</script>
