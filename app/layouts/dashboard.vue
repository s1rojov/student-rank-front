<template>
  <div class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100 overflow-x-hidden relative">

    <aside
        :class="[
        'fixed left-0 top-0 z-40 h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl transition-all duration-300 border-r border-slate-700/30',
        sidebarCollapsed ? '-translate-x-full md:translate-x-0 md:w-20' : 'translate-x-0 w-72',
      ]"
    >
      <div
          :class="[
          'flex items-center border-b border-slate-700/50 bg-slate-900/50 transition-all duration-300 overflow-hidden',
          sidebarCollapsed ? 'justify-center px-2 py-6' : 'px-6 py-6 gap-3'
        ]"
      >
        <div
            class="w-11 h-11 bg-linear-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/20 shrink-0"
        >
          <UIcon name="i-heroicons-academic-cap" class="w-6 h-6 text-white" />
        </div>

        <div v-if="!sidebarCollapsed" class="flex-1 min-w-0 transition-opacity duration-200">
          <p class="text-lg font-bold text-white tracking-tight truncate">StudentRank</p>
          <p class="text-xs text-slate-400 font-medium truncate">Admin Panel</p>
        </div>

        <button
            @click="sidebarCollapsed = !sidebarCollapsed"
            class="hidden md:block p-1.5 hover:bg-slate-700/50 rounded-lg transition-colors shrink-0 cursor-pointer"
        >
          <UIcon
              :name="sidebarCollapsed ? 'i-heroicons-chevron-right' : 'i-heroicons-chevron-left'"
              class="w-4 h-4 text-slate-400"
          />
        </button>
      </div>

      <nav class="p-4 space-y-1 mt-2 h-[calc(100vh-220px)] custom-scrollbar overscroll-x-none">
        <div class="space-y-2">
          <NuxtLink
              v-for="item in menuItems"
              :key="item.to"
              :to="item.to"
              :class="[
              'flex items-center rounded-xl text-slate-300 hover:bg-slate-700/50 transition-all group relative',
              sidebarCollapsed ? 'justify-center h-12 w-12 mx-auto' : 'px-4 py-3 gap-3'
            ]"
              active-class="!bg-gradient-to-r !from-blue-600 !to-blue-700 !text-white shadow-lg shadow-blue-500/30"
          >
            <UIcon :name="item.icon" class="w-5 h-5 shrink-0" />
            <span v-if="!sidebarCollapsed" class="font-medium truncate">{{ item.label }}</span>
            <span v-if="sidebarCollapsed" class="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl border border-slate-700">
              {{ item.label }}
            </span>
          </NuxtLink>
        </div>
      </nav>

      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700/50 bg-slate-900/80">
        <button
            @click="handleLogout"
            :class="[
            'w-full flex items-center rounded-xl text-slate-300 hover:bg-red-600/20 hover:text-red-400 transition-all group',
            sidebarCollapsed ? 'justify-center h-12' : 'px-4 py-2.5 gap-2'
          ]"
        >
          <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-5 h-5" />
          <span v-if="!sidebarCollapsed" class="text-sm font-medium">Chiqish</span>
        </button>
      </div>
    </aside>

    <main
        :class="[
        'transition-all duration-300 min-h-screen relative overflow-x-hidden',
        sidebarCollapsed ? 'md:ml-20' : 'md:ml-72',
        'ml-0 w-auto'
      ]"
    >
      <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-30 border-b border-gray-200 w-full">
        <div class="px-4 md:px-8 py-4">
          <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-4 min-w-0">
              <button
                  @click="sidebarCollapsed = !sidebarCollapsed"
                  class="md:hidden p-2 hover:bg-gray-100 rounded-lg shrink-0"
              >
                <UIcon name="i-heroicons-bars-3" class="w-6 h-6 text-gray-600" />
              </button>
              <div class="min-w-0">
                <h1 class="text-lg md:text-2xl font-bold text-gray-900 truncate flex items-center gap-2">
                  {{ pageTitle }}
                </h1>
              </div>
            </div>

            <div class="flex items-center gap-2 shrink-0">
              <div class="relative hidden sm:block">
                <input type="text" placeholder="Qidirish..." class="pl-4 pr-4 py-2 border border-gray-200 rounded-xl text-sm w-32 md:w-64 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <UButton icon="i-heroicons-bell" color="secondary" variant="ghost" class="rounded-xl" />
              <UAvatar src="" alt="Admin" size="sm" />
            </div>
          </div>
        </div>
      </header>

      <div class="p-4 md:p-8 w-full">
        <div class="mx-auto max-w-full overflow-hidden">
          <NuxtPage />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const sidebarCollapsed = ref(false);
const user = computed(() => authStore.user);

const menuItems = [
  { label: 'Dashboard', to: '/dashboard', icon: 'i-heroicons-squares-2x2' },
  { label: 'Turnirlar', to: '/dashboard/tournaments', icon: 'i-heroicons-trophy' },
  // { label: 'Reyting', to: '/rating', icon: 'i-heroicons-star' },
  { label: 'Foydalanuvchilar', to: '/dashboard/users', icon: 'i-heroicons-users' },
  { label: 'Analitika', to: '/dashboard/analytics', icon: 'i-heroicons-chart-bar' },
  { label: 'Sozlamalar', to: '/dashboard/settings', icon: 'i-heroicons-cog-6-tooth' },
];

const pageTitle = computed(() => {
  const current = menuItems.find(item => route.path.startsWith(item.to));
  return current ? current.label : 'Dashboard';
});

const handleLogout = async () => {
  await authStore.logout();
  router.push('/');
};
</script>

<style>
/* Global darajada scrollni jilovlash */
html, body {
  max-width: 100%;
  overflow-x: hidden;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 10px;
}
</style>