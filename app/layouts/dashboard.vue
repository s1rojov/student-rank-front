<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside
      class="fixed left-0 top-0 z-40 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 shadow-xl"
    >
      <!-- Logo -->
      <div class="flex items-center gap-3 px-6 py-5 border-b border-slate-700">
        <div
          class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
        >
          <UIcon name="i-heroicons-academic-cap" class="w-6 h-6 text-white" />
        </div>
        <div>
          <p class="text-lg font-bold text-white">StudentRank</p>
          <p class="text-xs text-slate-400">Admin Panel</p>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="p-4 space-y-1 mt-2">
        <div class="px-3 mb-4">
          <p
            class="text-xs font-semibold text-slate-400 uppercase tracking-wider"
          >
            Asosiy
          </p>
        </div>

        <NuxtLink
          to="/dashboard"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 transition-all group"
          active-class="!bg-blue-600 !text-white shadow-lg shadow-blue-500/30"
        >
          <UIcon name="i-heroicons-squares-2x2" class="w-5 h-5" />
          <span class="font-medium">Dashboard</span>
        </NuxtLink>

        <NuxtLink
          to="/dashboard/tournaments"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 transition-all group"
          active-class="!bg-blue-600 !text-white shadow-lg shadow-blue-500/30"
        >
          <UIcon name="i-heroicons-trophy" class="w-5 h-5" />
          <span class="font-medium">Turnirlar</span>
        </NuxtLink>

        <div class="px-3 mb-4 mt-6">
          <p
            class="text-xs font-semibold text-slate-400 uppercase tracking-wider"
          >
            Boshqaruv
          </p>
        </div>

        <NuxtLink
          to="/dashboard/settings"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 transition-all group"
          active-class="!bg-blue-600 !text-white shadow-lg shadow-blue-500/30"
        >
          <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5" />
          <span class="font-medium">Sozlamalar</span>
        </NuxtLink>
      </nav>

      <!-- User Profile & Logout -->
      <div
        class="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700 bg-slate-900/50"
      >
        <div
          class="flex items-center gap-3 px-3 py-2 mb-2 bg-slate-800/50 rounded-lg"
        >
          <div
            class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md"
          >
            <UIcon name="i-heroicons-user" class="w-5 h-5 text-white" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-white truncate">
              {{ user?.name || "Admin" }}
            </p>
            <p class="text-xs text-slate-400 truncate">{{ user?.email }}</p>
          </div>
        </div>
        <button
          @click="handleLogout"
          class="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-slate-300 hover:bg-red-600 hover:text-white transition-all"
        >
          <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-4 h-4" />
          <span class="text-sm font-medium">Chiqish</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="ml-64">
      <!-- Header -->
      <header class="bg-white shadow-sm sticky top-0 z-30">
        <div class="px-8 py-5 flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">{{ pageTitle }}</h1>
            <p class="text-sm text-gray-500 mt-1">{{ pageSubtitle }}</p>
          </div>
          <div class="flex items-center gap-3">
            <!-- Search -->
            <div class="relative">
              <UIcon
                name="i-heroicons-magnifying-glass"
                class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              />
              <input
                type="text"
                placeholder="Qidirish..."
                class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
              />
            </div>

            <!-- Notifications -->
            <button
              class="relative p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <UIcon name="i-heroicons-bell" class="w-6 h-6 text-gray-600" />
              <span
                class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"
              ></span>
            </button>

            <!-- User Menu -->
            <div
              class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
            >
              <div
                class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center"
              >
                <UIcon name="i-heroicons-user" class="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <div class="p-8">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const user = computed(() => authStore.user);

const pageTitle = computed(() => {
  const path = route.path;
  if (path === "/dashboard") return "Dashboard";
  if (path.includes("/tournaments")) return "Turnirlar";
  if (path.includes("/settings")) return "Sozlamalar";
  return "Dashboard";
});

const pageSubtitle = computed(() => {
  const path = route.path;
  if (path === "/dashboard") return "Umumiy statistika va ma'lumotlar";
  if (path.includes("/tournaments")) return "Turnirlarni boshqarish";
  if (path.includes("/settings")) return "Tizim sozlamalari";
  return "";
});

const handleLogout = async () => {
  await authStore.logout();
  router.push("/");
};

// Check authentication
onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push("/login");
  }
});
</script>
