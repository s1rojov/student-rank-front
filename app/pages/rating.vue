<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <AppHeader />

    <!-- Page Content -->
    <main class="pt-24 pb-16">
      <UContainer>
        <!-- Page Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Reyting</h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            O'zbekiston bo'ylab eng faol talabalar reytingi
          </p>
        </div>

        <!-- Stats Cards -->
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-blue-50 rounded-xl p-6 text-center">
            <p class="text-4xl font-bold text-blue-600 mb-2">
              {{ totalStudents.toLocaleString() }}
            </p>
            <p class="text-gray-600">Jami ishtirokchilar</p>
          </div>
          <div class="bg-green-50 rounded-xl p-6 text-center">
            <p class="text-4xl font-bold text-green-600 mb-2">
              {{ totalTournaments }}
            </p>
            <p class="text-gray-600">O'tkazilgan turnirlar</p>
          </div>
          <div class="bg-yellow-50 rounded-xl p-6 text-center">
            <p class="text-4xl font-bold text-yellow-600 mb-2">
              {{ totalPoints.toLocaleString() }}
            </p>
            <p class="text-gray-600">Jami ball to'plangan</p>
          </div>
        </div>

        <!-- Search and Filter -->
        <div class="flex flex-wrap gap-4 mb-8">
          <UInput
            v-model="searchQuery"
            placeholder="Talabani qidirish..."
            icon="i-heroicons-magnifying-glass"
            size="xl"
            class="w-full md:w-72"
          />
          <USelect
            v-model="selectedRegion"
            :options="regions"
            placeholder="Viloyat"
            size="xl"
            class="w-56"
          />
        </div>

        <!-- Ranking Table -->
        <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th
                  class="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                >
                  O'rin
                </th>
                <th
                  class="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                >
                  Talaba
                </th>
                <th
                  class="px-6 py-4 text-left text-sm font-semibold text-gray-900 hidden md:table-cell"
                >
                  Viloyat
                </th>
                <th
                  class="px-6 py-4 text-left text-sm font-semibold text-gray-900 hidden md:table-cell"
                >
                  Turnirlar
                </th>
                <th
                  class="px-6 py-4 text-right text-sm font-semibold text-gray-900"
                >
                  Ball
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr
                v-for="(student, index) in filteredStudents"
                :key="student.id"
                class="hover:bg-gray-50 transition"
              >
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <span
                      v-if="index < 3"
                      class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
                      :class="{
                        'bg-yellow-500': index === 0,
                        'bg-gray-400': index === 1,
                        'bg-amber-600': index === 2,
                      }"
                    >
                      {{ index + 1 }}
                    </span>
                    <span v-else class="text-gray-600 font-medium pl-2">{{
                      index + 1
                    }}</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <UAvatar :text="getInitials(student.name)" size="md" />
                    <div>
                      <p class="font-medium text-gray-900">
                        {{ student.name }}
                      </p>
                      <p class="text-sm text-gray-500">
                        {{ student.university }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 hidden md:table-cell text-gray-600">
                  {{ student.region }}
                </td>
                <td class="px-6 py-4 hidden md:table-cell text-gray-600">
                  {{ student.tournaments }}
                </td>
                <td class="px-6 py-4 text-right">
                  <span class="font-bold text-blue-600">{{
                    student.points.toLocaleString()
                  }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-8">
          <UPagination v-model="currentPage" :total="100" :page-count="10" />
        </div>
      </UContainer>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: 'Reyting - StudentRank',
  });

  const searchQuery = ref('');
  const selectedRegion = ref('');
  const currentPage = ref(1);

  const totalStudents = 12456;
  const totalTournaments = 48;
  const totalPoints = 2847650;

  const regions = [
    { label: 'Barcha viloyatlar', value: '' },
    { label: 'Toshkent', value: 'tashkent' },
    { label: 'Samarqand', value: 'samarkand' },
    { label: 'Buxoro', value: 'bukhara' },
    { label: "Farg'ona", value: 'fergana' },
    { label: 'Andijon', value: 'andijan' },
    { label: 'Namangan', value: 'namangan' },
    { label: 'Xorazm', value: 'khorezm' },
  ];

  const students = ref([
    {
      id: 1,
      name: 'Aziz Karimov',
      university: 'TATU',
      region: 'Toshkent',
      tournaments: 12,
      points: 2450,
    },
    {
      id: 2,
      name: 'Komila Rahimova',
      university: "O'zMU",
      region: 'Toshkent',
      tournaments: 10,
      points: 2380,
    },
    {
      id: 3,
      name: 'Jasur Toshmatov',
      university: 'SamDU',
      region: 'Samarqand',
      tournaments: 11,
      points: 2290,
    },
    {
      id: 4,
      name: 'Madina Aliyeva',
      university: 'BuxDU',
      region: 'Buxoro',
      tournaments: 9,
      points: 2150,
    },
    {
      id: 5,
      name: 'Sardor Qodirov',
      university: 'TATU',
      region: 'Toshkent',
      tournaments: 8,
      points: 2050,
    },
    {
      id: 6,
      name: 'Nilufar Xolmatova',
      university: 'FarDU',
      region: "Farg'ona",
      tournaments: 10,
      points: 1980,
    },
    {
      id: 7,
      name: 'Bekzod Nazarov',
      university: 'AndDU',
      region: 'Andijon',
      tournaments: 7,
      points: 1890,
    },
    {
      id: 8,
      name: 'Sevara Mirzayeva',
      university: 'NamDU',
      region: 'Namangan',
      tournaments: 9,
      points: 1820,
    },
    {
      id: 9,
      name: 'Otabek Yusupov',
      university: 'UrDU',
      region: 'Xorazm',
      tournaments: 6,
      points: 1750,
    },
    {
      id: 10,
      name: 'Kamila Rustamova',
      university: 'TATU',
      region: 'Toshkent',
      tournaments: 8,
      points: 1680,
    },
  ]);

  const filteredStudents = computed(() => {
    return students.value.filter((s) => {
      const searchMatch =
        !searchQuery.value ||
        s.name.toLowerCase().includes(searchQuery.value.toLowerCase());
      const regionMatch =
        !selectedRegion.value ||
        s.region.toLowerCase().includes(selectedRegion.value);
      return searchMatch && regionMatch;
    });
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };
</script>
