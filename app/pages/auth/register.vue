<template>
  <div
    class="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10"
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

      <!-- Register Card -->
      <UCard class="shadow-lg">
        <template #header>
          <!-- <div class="text-center">
            <h1 class="text-2xl font-bold text-gray-900">Ro'yxatdan o'tish</h1>
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

        <form @submit.prevent="handleRegister" class="space-y-5">
          <div>
            <label class="block text-base font-medium text-gray-900 mb-2"
              >To'liq ism</label
            >
            <UInput
              v-model="form.fullName"
              type="text"
              placeholder="Ism Familiya"
              icon="i-heroicons-user"
              size="xl"
              class="text-base w-full"
            />
          </div>

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
              >Telefon raqam</label
            >
            <UInput
              v-model="form.phone"
              type="tel"
              placeholder="+998 90 123 45 67"
              icon="i-heroicons-phone"
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
              placeholder="Kamida 8 ta belgi"
              icon="i-heroicons-lock-closed"
              size="xl"
              class="text-base w-full"
            />
          </div>

          <div>
            <label class="block text-base font-medium text-gray-900 mb-2"
              >Parolni tasdiqlang</label
            >
            <UInput
              v-model="form.confirmPassword"
              type="password"
              placeholder="Parolni qaytadan kiriting"
              icon="i-heroicons-lock-closed"
              size="xl"
              class="text-base w-full"
            />
          </div>

          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              v-model="form.agreeTerms"
              class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span class="text-base text-gray-700"
              >Foydalanish shartlari va maxfiylik siyosatiga roziman</span
            >
          </label>

          <UButton
            type="submit"
            color="primary"
            size="xl"
            block
            :loading="loading"
            :disabled="!form.agreeTerms"
            class="text-base"
          >
            Ro'yxatdan o'tish
          </UButton>
        </form>

        <template #footer>
          <div class="text-center text-base text-gray-600">
            Allaqachon hisobingiz bormi?
            <ULink
              to="/auth/login"
              class="text-blue-600 font-medium hover:underline"
            >
              Tizimga kiring
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
    title: "Ro'yxatdan o'tish - StudentRank",
  });

  const authStore = useAuthStore();
  const toast = useToast();
  const loading = ref(false);

  const form = reactive({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleRegister = async () => {
    // Validatsiya
    if (
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      toast.add({
        title: 'Xatolik',
        description: "Barcha maydonlarni to'ldiring",
        color: 'red',
        icon: 'i-heroicons-x-circle',
      });
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.add({
        title: 'Xatolik',
        description: 'Parollar mos kelmaydi!',
        color: 'red',
        icon: 'i-heroicons-x-circle',
      });
      return;
    }

    if (form.password.length < 8) {
      toast.add({
        title: 'Xatolik',
        description: "Parol kamida 8 ta belgidan iborat bo'lishi kerak",
        color: 'red',
        icon: 'i-heroicons-x-circle',
      });
      return;
    }

    if (!form.agreeTerms) {
      toast.add({
        title: 'Xatolik',
        description: 'Foydalanish shartlariga rozilik bering',
        color: 'red',
        icon: 'i-heroicons-x-circle',
      });
      return;
    }

    loading.value = true;
    try {
      const response = await AuthService.register({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        password: form.password,
        confirmPassword: form.confirmPassword,
      });

      // Auth store ga ma'lumotlarni saqlash
      authStore.setAuth({
        ...response.user,
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      });

      toast.add({
        title: 'Muvaffaqiyatli!',
        description: "Ro'yxatdan muvaffaqiyatli o'tdingiz",
        color: 'green',
        icon: 'i-heroicons-check-circle',
      });

      // Dashboard ga yo'naltirish
      await navigateTo('/dashboard');
    } catch (error: any) {
      console.error('Register error:', error);
      toast.add({
        title: 'Xatolik',
        description:
          error.message ||
          "Ro'yxatdan o'tishda xatolik yuz berdi. Qaytadan urinib ko'ring.",
        color: 'red',
        icon: 'i-heroicons-x-circle',
      });
    } finally {
      loading.value = false;
    }
  };
</script>
