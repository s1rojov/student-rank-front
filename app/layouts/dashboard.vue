<template>
  <div
    class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100"
  >
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed left-0 top-0 z-40 h-screen w-72 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl transition-transform duration-300',
        sidebarCollapsed
          ? '-translate-x-full md:translate-x-0 md:w-20'
          : 'translate-x-0',
      ]"
    >
      <!-- Logo -->
      <div
        class="flex items-center gap-3 px-6 py-6 border-b border-slate-700/50 bg-slate-900/50"
      >
        <div
          class="w-11 h-11 bg-linear-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/20"
        >
          <UIcon name="i-heroicons-academic-cap" class="w-6 h-6 text-white" />
        </div>
        <div v-show="!sidebarCollapsed" class="flex-1">
          <p class="text-lg font-bold text-white tracking-tight">StudentRank</p>
          <p class="text-xs text-slate-400 font-medium">Admin Panel</p>
        </div>
        <button
          @click="sidebarCollapsed = !sidebarCollapsed"
          class="hidden md:block p-1.5 hover:bg-slate-700/50 rounded-lg transition-colors"
        >
          <UIcon
            :name="
              sidebarCollapsed
                ? 'i-heroicons-chevron-right'
                : 'i-heroicons-chevron-left'
            "
            class="w-4 h-4 text-slate-400"
          />
        </button>
      </div>

      <!-- Navigation -->
      <nav class="p-4 space-y-1 mt-2 overflow-y-auto h-[calc(100vh-200px)]">
        <div class="px-3 mb-3">
          <p
            v-show="!sidebarCollapsed"
            class="text-xs font-semibold text-slate-400 uppercase tracking-wider"
          >
            Asosiy
          </p>
        </div>

        <NuxtLink
          to="/dashboard"
          :class="[
            'flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-700/50 transition-all group relative',
            sidebarCollapsed ? 'justify-center' : '',
          ]"
          active-class="!bg-gradient-to-r !from-blue-600 !to-blue-700 !text-white shadow-lg shadow-blue-500/30"
        >
          <UIcon name="i-heroicons-squares-2x2" class="w-5 h-5 shrink-0" />
          <span v-show="!sidebarCollapsed" class="font-medium">Dashboard</span>
          <span
            v-show="sidebarCollapsed"
            class="absolute left-full ml-6 px-2 py-1 bg-slate-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            >Dashboard</span
          >
        </NuxtLink>

        <NuxtLink
          to="/dashboard/tournaments"
          :class="[
            'flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-700/50 transition-all group relative',
            sidebarCollapsed ? 'justify-center' : '',
          ]"
          active-class="!bg-gradient-to-r !from-blue-600 !to-blue-700 !text-white shadow-lg shadow-blue-500/30"
        >
          <UIcon name="i-heroicons-trophy" class="w-5 h-5 shrink-0" />
          <span v-show="!sidebarCollapsed" class="font-medium">Turnirlar</span>
          <span
            v-show="!sidebarCollapsed"
            class="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold"
            >12</span
          >
          <span
            v-show="sidebarCollapsed"
            class="absolute left-full ml-6 px-2 py-1 bg-slate-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            >Turnirlar</span
          >
        </NuxtLink>

        <NuxtLink
          to="/rating"
          :class="[
            'flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-700/50 transition-all group relative',
            sidebarCollapsed ? 'justify-center' : '',
          ]"
          active-class="!bg-gradient-to-r !from-blue-600 !to-blue-700 !text-white shadow-lg shadow-blue-500/30"
        >
          <UIcon name="i-heroicons-star" class="w-5 h-5 shrink-0" />
          <span v-show="!sidebarCollapsed" class="font-medium">Reyting</span>
          <span
            v-show="sidebarCollapsed"
            class="absolute left-full ml-6 px-2 py-1 bg-slate-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            >Reyting</span
          >
        </NuxtLink>

        <div class="px-3 mb-3 mt-6">
          <p
            v-show="!sidebarCollapsed"
            class="text-xs font-semibold text-slate-400 uppercase tracking-wider"
          >
            Boshqaruv
          </p>
        </div>

        <NuxtLink
          to="/dashboard/users"
          :class="[
            'flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-700/50 transition-all group relative',
            sidebarCollapsed ? 'justify-center' : '',
          ]"
          active-class="!bg-gradient-to-r !from-blue-600 !to-blue-700 !text-white shadow-lg shadow-blue-500/30"
        >
          <UIcon name="i-heroicons-users" class="w-5 h-5 shrink-0" />
          <span v-show="!sidebarCollapsed" class="font-medium"
            >Foydalanuvchilar</span
          >
          <span
            v-show="sidebarCollapsed"
            class="absolute left-full ml-6 px-2 py-1 bg-slate-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            >Foydalanuvchilar</span
          >
        </NuxtLink>

        <NuxtLink
          to="/dashboard/analytics"
          :class="[
            'flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-700/50 transition-all group relative',
            sidebarCollapsed ? 'justify-center' : '',
          ]"
          active-class="!bg-gradient-to-r !from-blue-600 !to-blue-700 !text-white shadow-lg shadow-blue-500/30"
        >
          <UIcon name="i-heroicons-chart-bar" class="w-5 h-5 shrink-0" />
          <span v-show="!sidebarCollapsed" class="font-medium">Analitika</span>
          <span
            v-show="sidebarCollapsed"
            class="absolute left-full ml-6 px-2 py-1 bg-slate-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            >Analitika</span
          >
        </NuxtLink>

        <NuxtLink
          to="/dashboard/settings"
          :class="[
            'flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-700/50 transition-all group relative',
            sidebarCollapsed ? 'justify-center' : '',
          ]"
          active-class="!bg-gradient-to-r !from-blue-600 !to-blue-700 !text-white shadow-lg shadow-blue-500/30"
        >
          <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5 flex-shrink-0" />
          <span v-show="!sidebarCollapsed" class="font-medium">Sozlamalar</span>
          <span
            v-show="sidebarCollapsed"
            class="absolute left-full ml-6 px-2 py-1 bg-slate-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            >Sozlamalar</span
          >
        </NuxtLink>
      </nav>

      <!-- User Profile & Logout -->
      <div
        class="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700/50 bg-gradient-to-b from-slate-900/50 to-slate-900 backdrop-blur-sm"
      >
        <div
          v-show="!sidebarCollapsed"
          class="flex items-center gap-3 px-3 py-2.5 mb-2 bg-slate-800/70 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <div
            class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/20"
          >
            <UIcon name="i-heroicons-user" class="w-5 h-5 text-white" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-white truncate">
              {{ user?.name || 'Admin' }}
            </p>
            <p class="text-xs text-slate-400 truncate">
              {{ user?.email || 'admin@studentrank.uz' }}
            </p>
          </div>
        </div>
        <button
          @click="handleLogout"
          :class="[
            'w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-300 hover:bg-red-600 hover:text-white transition-all group',
            sidebarCollapsed ? 'justify-center' : 'justify-center',
          ]"
        >
          <UIcon name="i-heroicons-arrow-right-on-rectangle" class="w-4 h-4" />
          <span v-show="!sidebarCollapsed" class="text-sm font-medium"
            >Chiqish</span
          >
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main
      :class="[
        'transition-all duration-300',
        sidebarCollapsed ? 'md:ml-20' : 'ml-72',
      ]"
    >
      <!-- Header -->
      <header
        class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-30 border-b border-gray-200"
      >
        <div class="px-8 py-4">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-4">
              <button
                @click="sidebarCollapsed = !sidebarCollapsed"
                class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <UIcon
                  name="i-heroicons-bars-3"
                  class="w-6 h-6 text-gray-600"
                />
              </button>
              <div>
                <h1
                  class="text-2xl font-bold text-gray-900 flex items-center gap-3"
                >
                  {{ pageTitle }}
                  <span
                    v-if="pageTitle === 'Dashboard'"
                    class="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full"
                    >Online</span
                  >
                </h1>
                <!-- Breadcrumb -->
                <div class="flex items-center gap-2 mt-1 text-sm text-gray-500">
                  <UIcon name="i-heroicons-home" class="w-4 h-4" />
                  <span>Admin</span>
                  <UIcon name="i-heroicons-chevron-right" class="w-3 h-3" />
                  <span class="text-gray-700 font-medium">{{ pageTitle }}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <!-- Search -->
              <div class="relative hidden lg:block">
                <UIcon
                  name="i-heroicons-magnifying-glass"
                  class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                  type="text"
                  placeholder="Qidirish... (Ctrl+K)"
                  class="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-72 bg-gray-50 hover:bg-white transition-colors"
                />
              </div>

              <!-- Quick Actions -->
              <button
                class="p-2.5 hover:bg-gray-100 rounded-xl transition-colors relative group"
                title="Yangi turnir qo'shish"
              >
                <UIcon
                  name="i-heroicons-plus-circle"
                  class="w-6 h-6 text-gray-600"
                />
              </button>

              <!-- Notifications -->
              <button
                class="relative p-2.5 hover:bg-gray-100 rounded-xl transition-colors group"
              >
                <UIcon name="i-heroicons-bell" class="w-6 h-6 text-gray-600" />
                <span
                  class="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white animate-pulse"
                ></span>
                <span
                  class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full"
                  >3</span
                >
              </button>

              <!-- Messages -->
              <button
                class="relative p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <UIcon
                  name="i-heroicons-envelope"
                  class="w-6 h-6 text-gray-600"
                />
              </button>

              <!-- Settings Quick Access -->
              <button
                class="p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <UIcon
                  name="i-heroicons-cog-6-tooth"
                  class="w-6 h-6 text-gray-600"
                />
              </button>

              <!-- User Menu -->
              <div
                class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors border border-gray-200"
              >
                <div
                  class="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md"
                >
                  <UIcon name="i-heroicons-user" class="w-4 h-4 text-white" />
                </div>
                <div class="hidden xl:block">
                  <p class="text-xs font-semibold text-gray-900">
                    {{ user?.name || 'Admin' }}
                  </p>
                </div>
                <UIcon
                  name="i-heroicons-chevron-down"
                  class="w-4 h-4 text-gray-500 hidden xl:block"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <div class="p-8">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from '~/stores/auth';

  const authStore = useAuthStore();
  const router = useRouter();
  const route = useRoute();

  const user = computed(() => authStore.user);
  const sidebarCollapsed = ref(false);

  const pageTitle = computed(() => {
    const path = route.path;
    if (path === '/dashboard') return 'Dashboard';
    if (path.includes('/tournaments')) return 'Turnirlar';
    if (path.includes('/settings')) return 'Sozlamalar';
    if (path.includes('/users')) return 'Foydalanuvchilar';
    if (path.includes('/analytics')) return 'Analitika';
    return 'Dashboard';
  });

  const pageSubtitle = computed(() => {
    const path = route.path;
    if (path === '/dashboard') return "Umumiy statistika va ma'lumotlar";
    if (path.includes('/tournaments')) return 'Turnirlarni boshqarish';
    if (path.includes('/settings')) return 'Tizim sozlamalari';
    return '';
  });

  const handleLogout = async () => {
    await authStore.logout();
    router.push('/');
  };

  // Check authentication
  onMounted(() => {
    if (!authStore.isAuthenticated) {
      router.push('/login');
    }
  });
</script>
