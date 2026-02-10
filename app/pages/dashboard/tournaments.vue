<template>
  <div>
    <!-- Header Actions -->
    <div
      class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6"
    >
      <div class="flex items-center gap-3 w-full sm:w-auto">
        <div class="relative flex-1 sm:flex-none">
          <UIcon
            name="i-heroicons-magnifying-glass"
            class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Turnirlarni qidirish..."
            class="pl-10 pr-4 py-2.5 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <button
          class="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2"
        >
          <UIcon name="i-heroicons-funnel" class="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <button
        class="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-lg shadow-blue-500/30 transition-all"
      >
        <UIcon name="i-heroicons-plus" class="w-5 h-5" />
        <span>Yangi Turnir</span>
      </button>
    </div>

    <!-- Tournaments Grid/Table -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th
                class="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Turnir Nomi
              </th>
              <th
                class="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Fan
              </th>
              <th
                class="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Sana
              </th>
              <th
                class="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Ishtirokchilar
              </th>
              <th
                class="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                class="text-right py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Amallar
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="tournament in filteredTournaments"
              :key="tournament.id"
              class="hover:bg-gray-50 transition-colors"
            >
              <td class="py-4 px-6">
                <div class="flex items-center gap-3">
                  <div
                    :class="[
                      'w-10 h-10 rounded-lg flex items-center justify-center',
                      getStatusBgClass(tournament.status),
                    ]"
                  >
                    <UIcon
                      name="i-heroicons-trophy"
                      class="w-5 h-5 text-white"
                    />
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-gray-900">
                      {{ tournament.name }}
                    </p>
                    <p class="text-xs text-gray-500">
                      ID: #{{ tournament.id }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6">
                <span
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                >
                  <UIcon name="i-heroicons-book-open" class="w-3.5 h-3.5" />
                  {{ tournament.subject }}
                </span>
              </td>
              <td class="py-4 px-6">
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-calendar"
                    class="w-4 h-4 text-gray-400"
                  />
                  <p class="text-sm text-gray-600">{{ tournament.date }}</p>
                </div>
              </td>
              <td class="py-4 px-6">
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-user-group"
                    class="w-4 h-4 text-gray-400"
                  />
                  <p class="text-sm font-medium text-gray-900">
                    {{ tournament.participants }}
                  </p>
                </div>
              </td>
              <td class="py-4 px-6">
                <span
                  :class="[
                    'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full',
                    getStatusClass(tournament.status),
                  ]"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                  {{ tournament.status }}
                </span>
              </td>
              <td class="py-4 px-6 text-right">
                <div class="flex items-center justify-end gap-1">
                  <button
                    class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Ko'rish"
                  >
                    <UIcon name="i-heroicons-eye" class="w-4 h-4" />
                  </button>
                  <button
                    class="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Tahrirlash"
                  >
                    <UIcon name="i-heroicons-pencil" class="w-4 h-4" />
                  </button>
                  <button
                    class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="O'chirish"
                  >
                    <UIcon name="i-heroicons-trash" class="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useHead({
  title: "Turnirlar - StudentRank",
});

const searchQuery = ref("");

const tournaments = ref([
  {
    id: 1,
    name: "Matematik Olimpiada",
    subject: "Matematika",
    date: "15 Fevral, 2026",
    participants: 45,
    status: "Yaqinda",
  },
  {
    id: 2,
    name: "Fizika Tanlov",
    subject: "Fizika",
    date: "20 Fevral, 2026",
    participants: 38,
    status: "Yaqinda",
  },
  {
    id: 3,
    name: "Kimyo Chempionati",
    subject: "Kimyo",
    date: "10 Fevral, 2026",
    participants: 52,
    status: "Faol",
  },
  {
    id: 4,
    name: "Informatika Musobaqasi",
    subject: "Informatika",
    date: "5 Fevral, 2026",
    participants: 67,
    status: "Yakunlangan",
  },
  {
    id: 5,
    name: "Biologiya Testi",
    subject: "Biologiya",
    date: "8 Fevral, 2026",
    participants: 41,
    status: "Faol",
  },
]);

const filteredTournaments = computed(() => {
  if (!searchQuery.value) return tournaments.value;
  return tournaments.value.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});

const getStatusClass = (status: string) => {
  switch (status) {
    case "Faol":
      return "bg-green-100 text-green-700";
    case "Yaqinda":
      return "bg-blue-100 text-blue-700";
    case "Yakunlangan":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getStatusBgClass = (status: string) => {
  switch (status) {
    case "Faol":
      return "bg-gradient-to-br from-green-500 to-green-600";
    case "Yaqinda":
      return "bg-gradient-to-br from-blue-500 to-blue-600";
    case "Yakunlangan":
      return "bg-gradient-to-br from-gray-500 to-gray-600";
    default:
      return "bg-gradient-to-br from-gray-500 to-gray-600";
  }
};
</script>
