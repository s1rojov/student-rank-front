<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <AppHeader />

    <!-- Page Content -->
    <main class="pt-24 pb-16">
      <UContainer>
        <!-- Page Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Turnirlar</h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Faol va yaqinlashayotgan turnirlarda qatnashing, bilimingizni sinab
            ko'ring!
          </p>
        </div>

        <!-- Filters -->
        <div class="flex flex-wrap gap-4 mb-8">
          <USelect
            v-model="selectedCategory"
            :options="categories"
            placeholder="Kategoriya"
            size="xl"
            class="w-56"
          />
          <USelect
            v-model="selectedStatus"
            :options="statuses"
            placeholder="Status"
            size="xl"
            class="w-56"
          />
        </div>

        <!-- Tournaments Grid -->
        <div
          v-if="filteredTournaments.length > 0"
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="tournament in filteredTournaments"
            :key="tournament.id"
            class="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition"
          >
            <div
              class="h-40 bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center"
            >
              <UIcon
                name="i-heroicons-trophy"
                class="w-16 h-16 text-white/80"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <UBadge
                  :color="getStatusColor(tournament.status)"
                  variant="subtle"
                >
                  {{ getStatusLabel(tournament.status) }}
                </UBadge>
                <span class="text-sm text-gray-500">{{
                  tournament.category
                }}</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ tournament.name }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-2">
                {{ tournament.description }}
              </p>

              <div class="space-y-2 mb-6">
                <div class="flex items-center gap-2 text-gray-500 text-sm">
                  <UIcon name="i-heroicons-calendar" class="w-4 h-4" />
                  <span>{{ tournament.date }}</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500 text-sm">
                  <UIcon name="i-heroicons-users" class="w-4 h-4" />
                  <span>{{ tournament.participants }} ishtirokchi</span>
                </div>
                <div class="flex items-center gap-2 text-gray-500 text-sm">
                  <UIcon name="i-heroicons-clock" class="w-4 h-4" />
                  <span>{{ tournament.duration }} daqiqa</span>
                </div>
              </div>

              <UButton
                color="primary"
                block
                :disabled="tournament.status === 'completed'"
                class="cursor-pointer"
              >
                <!-- :to="`/tournaments/${tournament.id}`" -->
                {{ tournament.status === 'open' ? "Qo'shilish" : 'Batafsil' }}
              </UButton>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-16 bg-gray-50 rounded-2xl">
          <UIcon
            name="i-heroicons-calendar-days"
            class="w-16 h-16 text-gray-400 mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            Turnirlar topilmadi
          </h3>
          <p class="text-gray-600">
            Tanlangan filtrlar bo'yicha turnirlar mavjud emas.
          </p>
        </div>
      </UContainer>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: 'Turnirlar - StudentRank',
  });

  const selectedCategory = ref('');
  const selectedStatus = ref('');

  const categories = [
    { label: 'Barchasi', value: '' },
    { label: 'Dasturlash', value: 'programming' },
    { label: 'Matematika', value: 'math' },
    { label: 'Ingliz tili', value: 'english' },
    { label: 'Fizika', value: 'physics' },
  ];

  const statuses = [
    { label: 'Barchasi', value: '' },
    { label: 'Ochiq', value: 'open' },
    { label: 'Yaqinda', value: 'upcoming' },
    { label: 'Tugagan', value: 'completed' },
  ];

  const tournaments = ref([
    {
      id: 1,
      name: 'IT Olimpiadasi 2026',
      description:
        "Dasturlash va algoritmlar bo'yicha respublika miqyosidagi turnir.",
      date: '2026-yil 25-fevral',
      category: 'Dasturlash',
      status: 'open',
      participants: 234,
      duration: 120,
    },
    {
      id: 2,
      name: 'Matematika Challenge',
      description: "Oliy matematika fanidan bilimlaringizni sinab ko'ring.",
      date: '2026-yil 5-mart',
      category: 'Matematika',
      status: 'open',
      participants: 156,
      duration: 90,
    },
    {
      id: 3,
      name: 'English Masters',
      description: "Ingliz tili bo'yicha test va yozma ish.",
      date: '2026-yil 15-mart',
      category: 'Ingliz tili',
      status: 'upcoming',
      participants: 0,
      duration: 60,
    },
    {
      id: 4,
      name: 'Fizika Olimpiadasi',
      description: 'Fizika fanidan nazariy va amaliy bilimlarni tekshirish.',
      date: '2026-yil 1-fevral',
      category: 'Fizika',
      status: 'completed',
      participants: 189,
      duration: 120,
    },
  ]);

  const filteredTournaments = computed(() => {
    return tournaments.value.filter((t) => {
      const categoryMatch =
        !selectedCategory.value ||
        t.category.toLowerCase().includes(selectedCategory.value);
      const statusMatch =
        !selectedStatus.value || t.status === selectedStatus.value;
      return categoryMatch && statusMatch;
    });
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'success';
      case 'upcoming':
        return 'warning';
      case 'completed':
        return 'neutral';
      default:
        return 'neutral';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'open':
        return "Ro'yxatdan o'tish ochiq";
      case 'upcoming':
        return 'Yaqinda';
      case 'completed':
        return 'Tugagan';
      default:
        return status;
    }
  };
</script>
