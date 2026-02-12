<template>
  <nav
    class="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100"
  >
    <UContainer>
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <div
            class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center"
          >
            <UIcon name="i-heroicons-academic-cap" class="w-6 h-6 text-white" />
          </div>
          <span class="text-2xl font-bold text-blue-600">StudentRank</span>
        </NuxtLink>

        <!-- Navigation Links (Desktop) -->
        <div class="hidden lg:flex items-center gap-10">
          <!-- Upcoming Tournaments Dropdown -->
          <!-- <UDropdownMenu :items="tournamentMenuItems">
            <UButton
              variant="ghost"
              color="neutral"
              trailing-icon="i-heroicons-chevron-down-20-solid"
            >
              🔔 Yaqinlashayotgan turnirlar
            </UButton>
          </UDropdownMenu> -->

          <NuxtLink
            to="/tournaments"
            class="text-gray-600 hover:text-blue-600 transition font-medium"
            :class="{ 'text-blue-600': route.path.startsWith('/tournaments') }"
          >
            Turnirlar
          </NuxtLink>

          <NuxtLink
            to="/rating"
            class="text-gray-600 hover:text-blue-600 transition font-medium"
            :class="{ 'text-blue-600': route.path === '/rating' }"
          >
            Reyting
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="text-gray-600 hover:text-blue-600 transition font-medium"
            :class="{ 'text-blue-600': route.path === '/about' }"
          >
            Biz haqimizda
          </NuxtLink>

          <NuxtLink
            to="/faq"
            class="text-gray-600 hover:text-blue-600 transition font-medium"
            :class="{ 'text-blue-600': route.path === '/faq' }"
          >
            FAQ
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="text-gray-600 hover:text-blue-600 transition font-medium"
            :class="{ 'text-blue-600': route.path === '/contact' }"
          >
            Bog'lanish
          </NuxtLink>
        </div>

        <!-- Auth Buttons -->
        <div class="hidden md:flex items-center gap-3">
          <template v-if="authStore.isAuthenticated">
            <UButton variant="ghost" color="neutral" to="/dashboard">
              <UIcon name="i-heroicons-squares-2x2" class="w-4 h-4 mr-1" />
              Dashboard
            </UButton>
            <UButton variant="ghost" color="neutral" @click="handleLogout">
              <UIcon
                name="i-heroicons-arrow-right-on-rectangle"
                class="w-4 h-4 mr-1"
              />
              Chiqish
            </UButton>
          </template>
          <template v-else>
            <UButton variant="ghost" color="neutral" to="/login">
              Kirish
            </UButton>
            <UButton color="primary" to="/register">
              Ro'yxatdan o'tish
            </UButton>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <UButton
          class="lg:hidden"
          variant="ghost"
          color="neutral"
          :icon="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        />
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden py-4 border-t border-gray-100"
      >
        <div class="space-y-1">
          <NuxtLink
            to="/tournaments"
            class="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
            @click="mobileMenuOpen = false"
          >
            🔔 Turnirlar
          </NuxtLink>
          <NuxtLink
            to="/rating"
            class="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
            @click="mobileMenuOpen = false"
          >
            Reyting
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
            @click="mobileMenuOpen = false"
          >
            Biz haqimizda
          </NuxtLink>
          <NuxtLink
            to="/faq"
            class="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
            @click="mobileMenuOpen = false"
          >
            FAQ
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
            @click="mobileMenuOpen = false"
          >
            Bog'lanish
          </NuxtLink>

          <!-- Social Links -->
          <div class="border-t border-gray-100 mt-2 pt-2">
            <div class="flex gap-4 px-4 py-3">
              <a
                href="https://t.me/studentrank"
                target="_blank"
                class="text-gray-500 hover:text-blue-600"
              >
                Telegram
              </a>
              <a
                href="https://instagram.com/studentrank"
                target="_blank"
                class="text-gray-500 hover:text-pink-600"
              >
                Instagram
              </a>
            </div>
          </div>

          <!-- Mobile Auth Buttons -->
          <div class="border-t border-gray-100 mt-2 pt-4 px-4 space-y-2">
            <template v-if="authStore.isAuthenticated">
              <UButton
                variant="outline"
                color="neutral"
                to="/dashboard"
                block
                @click="mobileMenuOpen = false"
              >
                <UIcon name="i-heroicons-squares-2x2" class="w-4 h-4 mr-1" />
                Dashboard
              </UButton>
              <UButton color="error" block @click="handleLogout">
                <UIcon
                  name="i-heroicons-arrow-right-on-rectangle"
                  class="w-4 h-4 mr-1"
                />
                Chiqish
              </UButton>
            </template>
            <template v-else>
              <UButton
                variant="outline"
                color="neutral"
                to="/login"
                block
                @click="mobileMenuOpen = false"
              >
                Kirish
              </UButton>
              <UButton
                color="primary"
                to="/register"
                block
                @click="mobileMenuOpen = false"
              >
                Ro'yxatdan o'tish
              </UButton>
            </template>
          </div>
        </div>
      </div>
    </UContainer>
  </nav>
</template>

<script setup lang="ts">
  import { useAuthStore } from '~/stores/auth';

  const route = useRoute();
  const router = useRouter();
  const authStore = useAuthStore();
  const mobileMenuOpen = ref(false);

  const handleLogout = () => {
    authStore.logout();
    mobileMenuOpen.value = false;
  };

  // Upcoming tournaments for dropdown menu
  const tournamentMenuItems = [
    [
      {
        label: 'IT Olimpiadasi 2026',
        description: '2026-yil 25-fevral',
        to: '/tournaments',
      },
      {
        label: 'Matematika Challenge',
        description: '2026-yil 5-mart',
        to: '/tournaments',
      },
      {
        label: 'English Masters',
        description: '2026-yil 15-mart',
        to: '/tournaments',
      },
    ],
    [
      {
        label: 'Barcha turnirlar →',
        to: '/tournaments',
      },
    ],
  ];
</script>
