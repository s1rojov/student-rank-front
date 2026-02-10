<template>
  <div>
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div
        class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
          >
            <UIcon name="i-heroicons-trophy" class="w-6 h-6" />
          </div>
          <div class="text-right">
            <p class="text-sm opacity-90">Jami Turnirlar</p>
            <p class="text-3xl font-bold mt-1">12</p>
          </div>
        </div>
        <div class="flex items-center gap-2 text-sm">
          <span class="opacity-75">↑ 8%</span>
          <span class="opacity-75">o'tgan oyga nisbatan</span>
        </div>
      </div>

      <div
        class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
          >
            <UIcon name="i-heroicons-users" class="w-6 h-6" />
          </div>
          <div class="text-right">
            <p class="text-sm opacity-90">Ishtirokchilar</p>
            <p class="text-3xl font-bold mt-1">248</p>
          </div>
        </div>
        <div class="flex items-center gap-2 text-sm">
          <span class="opacity-75">↑ 15%</span>
          <span class="opacity-75">o'tgan oyga nisbatan</span>
        </div>
      </div>

      <div
        class="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
          >
            <UIcon name="i-heroicons-fire" class="w-6 h-6" />
          </div>
          <div class="text-right">
            <p class="text-sm opacity-90">Faol Turnirlar</p>
            <p class="text-3xl font-bold mt-1">5</p>
          </div>
        </div>
        <div class="flex items-center gap-2 text-sm">
          <span class="opacity-75">Hozir davom etmoqda</span>
        </div>
      </div>

      <div
        class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
          >
            <UIcon name="i-heroicons-check-circle" class="w-6 h-6" />
          </div>
          <div class="text-right">
            <p class="text-sm opacity-90">Yakunlangan</p>
            <p class="text-3xl font-bold mt-1">7</p>
          </div>
        </div>
        <div class="flex items-center gap-2 text-sm">
          <span class="opacity-75">Shu oyda</span>
        </div>
      </div>
    </div>

    <!-- Charts and Activity -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <!-- Recent Activity -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-xl shadow-sm p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold text-gray-900">
              So'nggi Faoliyat
            </h3>
            <button
              class="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Barchasini ko'rish
            </button>
          </div>
          <div class="space-y-4">
            <div
              class="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
            >
              <div
                class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0"
              >
                <UIcon
                  name="i-heroicons-user-plus"
                  class="w-5 h-5 text-white"
                />
              </div>
              <div class="flex-1">
                <p class="text-sm font-semibold text-gray-900">
                  Yangi ishtirokchi qo'shildi
                </p>
                <p class="text-xs text-gray-600 mt-1">
                  Alisher Karimov "Matematik Olimpiada"ga ro'yxatdan o'tdi
                </p>
                <p class="text-xs text-gray-500 mt-1">5 daqiqa oldin</p>
              </div>
            </div>

            <div
              class="flex items-start gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer"
            >
              <div
                class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shrink-0"
              >
                <UIcon name="i-heroicons-trophy" class="w-5 h-5 text-white" />
              </div>
              <div class="flex-1">
                <p class="text-sm font-semibold text-gray-900">
                  Turnir yakunlandi
                </p>
                <p class="text-xs text-gray-600 mt-1">
                  "Informatika Musobaqasi" muvaffaqiyatli yakunlandi
                </p>
                <p class="text-xs text-gray-500 mt-1">1 soat oldin</p>
              </div>
            </div>

            <div
              class="flex items-start gap-4 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors cursor-pointer"
            >
              <div
                class="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shrink-0"
              >
                <UIcon name="i-heroicons-star" class="w-5 h-5 text-white" />
              </div>
              <div class="flex-1">
                <p class="text-sm font-semibold text-gray-900">
                  Yangi reyting e'lon qilindi
                </p>
                <p class="text-xs text-gray-600 mt-1">
                  Fevral oyi uchun reyting yangilandi
                </p>
                <p class="text-xs text-gray-500 mt-1">2 soat oldin</p>
              </div>
            </div>

            <div
              class="flex items-start gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer"
            >
              <div
                class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center shrink-0"
              >
                <UIcon
                  name="i-heroicons-document-text"
                  class="w-5 h-5 text-white"
                />
              </div>
              <div class="flex-1">
                <p class="text-sm font-semibold text-gray-900">
                  Yangi natijalar kiritildi
                </p>
                <p class="text-xs text-gray-600 mt-1">
                  "Fizika Tanlov" uchun 45 ta natija kiritildi
                </p>
                <p class="text-xs text-gray-500 mt-1">3 soat oldin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming Tournaments -->
      <div>
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-6">
            Yaqinlashayotgan Turnirlar
          </h3>
          <div class="space-y-4">
            <div
              class="relative p-4 border-l-4 border-blue-500 bg-blue-50 rounded-lg"
            >
              <div class="flex items-start justify-between mb-2">
                <p class="text-sm font-semibold text-gray-900">
                  Matematik Olimpiada
                </p>
                <span
                  class="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded"
                  >5 kun</span
                >
              </div>
              <p class="text-xs text-gray-600 mb-1">15 Fevral, 2026</p>
              <div class="flex items-center gap-2 mt-2">
                <UIcon
                  name="i-heroicons-user-group"
                  class="w-4 h-4 text-gray-500"
                />
                <span class="text-xs text-gray-600">45 ishtirokchi</span>
              </div>
            </div>

            <div
              class="relative p-4 border-l-4 border-green-500 bg-green-50 rounded-lg"
            >
              <div class="flex items-start justify-between mb-2">
                <p class="text-sm font-semibold text-gray-900">Fizika Tanlov</p>
                <span
                  class="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded"
                  >10 kun</span
                >
              </div>
              <p class="text-xs text-gray-600 mb-1">20 Fevral, 2026</p>
              <div class="flex items-center gap-2 mt-2">
                <UIcon
                  name="i-heroicons-user-group"
                  class="w-4 h-4 text-gray-500"
                />
                <span class="text-xs text-gray-600">38 ishtirokchi</span>
              </div>
            </div>

            <div
              class="relative p-4 border-l-4 border-amber-500 bg-amber-50 rounded-lg"
            >
              <div class="flex items-start justify-between mb-2">
                <p class="text-sm font-semibold text-gray-900">
                  Kimyo Chempionati
                </p>
                <span
                  class="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded"
                  >15 kun</span
                >
              </div>
              <p class="text-xs text-gray-600 mb-1">25 Fevral, 2026</p>
              <div class="flex items-center gap-2 mt-2">
                <UIcon
                  name="i-heroicons-user-group"
                  class="w-4 h-4 text-gray-500"
                />
                <span class="text-xs text-gray-600">52 ishtirokchi</span>
              </div>
            </div>
          </div>

          <button
            class="w-full mt-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
          >
            Barcha turnirlarni ko'rish
          </button>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="bg-white rounded-xl shadow-sm p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Tez Amallar</h3>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button
          class="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
        >
          <div
            class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
          >
            <UIcon name="i-heroicons-plus" class="w-5 h-5 text-white" />
          </div>
          <div class="text-left">
            <p class="text-sm font-semibold text-gray-900">Yangi Turnir</p>
            <p class="text-xs text-gray-600">Turnir qo'shish</p>
          </div>
        </button>

        <button
          class="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
        >
          <div
            class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
          >
            <UIcon name="i-heroicons-user-plus" class="w-5 h-5 text-white" />
          </div>
          <div class="text-left">
            <p class="text-sm font-semibold text-gray-900">Ishtirokchi</p>
            <p class="text-xs text-gray-600">Yangi o'quvchi</p>
          </div>
        </button>

        <button
          class="flex items-center gap-3 p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors group"
        >
          <div
            class="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
          >
            <UIcon
              name="i-heroicons-document-text"
              class="w-5 h-5 text-white"
            />
          </div>
          <div class="text-left">
            <p class="text-sm font-semibold text-gray-900">Natijalar</p>
            <p class="text-xs text-gray-600">Natija kiritish</p>
          </div>
        </button>

        <button
          class="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
        >
          <div
            class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
          >
            <UIcon name="i-heroicons-chart-bar" class="w-5 h-5 text-white" />
          </div>
          <div class="text-left">
            <p class="text-sm font-semibold text-gray-900">Hisobot</p>
            <p class="text-xs text-gray-600">Statistika ko'rish</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useHead({
  title: "Dashboard - StudentRank",
});
</script>
