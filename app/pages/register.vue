<template>
  <div
    class="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12"
  >
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <a href="/" class="inline-flex items-center gap-2">
          <img
            src="~/assets/images/student-rank-logo.png"
            alt="StudentRank"
            class="w-10 h-10"
          />
          <span class="text-2xl font-bold text-gray-900">StudentRank</span>
        </a>
      </div>

      <!-- Register Card -->
      <UCard class="shadow-lg">
        <template #header>
          <div class="text-center">
            <h1 class="text-2xl font-bold text-gray-900">Ro'yxatdan o'tish</h1>
            <p class="text-gray-600 mt-1">Yangi hisob yarating</p>
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
              to="/login"
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
  useHead({
    title: "Ro'yxatdan o'tish - StudentRank",
  });

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
    if (form.password !== form.confirmPassword) {
      alert('Parollar mos kelmaydi!');
      return;
    }

    loading.value = true;
    try {
      // TODO: Implement register logic
      console.log('Register:', form);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigateTo('/login');
    } catch (error) {
      console.error('Register error:', error);
    } finally {
      loading.value = false;
    }
  };
</script>
