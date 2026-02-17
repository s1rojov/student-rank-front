<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div>
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Analitika</h1>
      <p class="text-gray-600">
        Tizim statistikasi va ma'lumotlarni tahlil qiling
      </p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Total Students -->
      <div
        class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
          >
            <UIcon name="i-heroicons-users" class="w-6 h-6 text-blue-600" />
          </div>
          <span
            class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full"
            >+12%</span
          >
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-1">1,234</h3>
        <p class="text-sm text-gray-600">Jami talabalar</p>
      </div>

      <!-- Active Tournaments -->
      <div
        class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center"
          >
            <UIcon name="i-heroicons-trophy" class="w-6 h-6 text-amber-600" />
          </div>
          <span
            class="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
            >12 aktiv</span
          >
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-1">45</h3>
        <p class="text-sm text-gray-600">Turnirlar</p>
      </div>

      <!-- Total Tests -->
      <div
        class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"
          >
            <UIcon
              name="i-heroicons-document-text"
              class="w-6 h-6 text-purple-600"
            />
          </div>
          <span
            class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full"
            >+8%</span
          >
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-1">3,456</h3>
        <p class="text-sm text-gray-600">Topshirilgan testlar</p>
      </div>

      <!-- Average Score -->
      <div
        class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"
          >
            <UIcon
              name="i-heroicons-chart-bar"
              class="w-6 h-6 text-green-600"
            />
          </div>
          <span
            class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full"
            >+5%</span
          >
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-1">85.4%</h3>
        <p class="text-sm text-gray-600">O'rtacha ball</p>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid lg:grid-cols-2 gap-6">
      <!-- Activity Chart -->
      <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 class="text-lg font-semibold text-gray-900 mb-6">
          Faollik diagrammasi
        </h3>
        <div class="h-64 flex items-center justify-center text-gray-400">
          <div class="text-center">
            <UIcon
              name="i-heroicons-chart-bar-square"
              class="w-16 h-16 mx-auto mb-3"
            />
            <p>Grafik yuklanmoqda...</p>
          </div>
        </div>
      </div>

      <!-- Performance Chart -->
      <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 class="text-lg font-semibold text-gray-900 mb-6">
          Natijalar tahlili
        </h3>
        <div class="h-64 flex items-center justify-center text-gray-400">
          <div class="text-center">
            <UIcon
              name="i-heroicons-chart-pie"
              class="w-16 h-16 mx-auto mb-3"
            />
            <p>Grafik yuklanmoqda...</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div class="p-6 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900">So'nggi faollik</h3>
      </div>
      <div class="divide-y divide-gray-200">
        <div class="p-4 hover:bg-gray-50 transition">
          <div class="flex items-start gap-4">
            <div
              class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0"
            >
              <UIcon
                name="i-heroicons-user-plus"
                class="w-5 h-5 text-blue-600"
              />
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">
                Yangi talaba ro'yxatdan o'tdi
              </p>
              <p class="text-xs text-gray-500 mt-1">
                Sardor Alimov tizimga qo'shildi
              </p>
            </div>
            <span class="text-xs text-gray-400">5 daqiqa oldin</span>
          </div>
        </div>
        <div class="p-4 hover:bg-gray-50 transition">
          <div class="flex items-start gap-4">
            <div
              class="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0"
            >
              <UIcon name="i-heroicons-trophy" class="w-5 h-5 text-amber-600" />
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">
                Yangi turnir yaratildi
              </p>
              <p class="text-xs text-gray-500 mt-1">
                "Matematik Olimpiada 2026"
              </p>
            </div>
            <span class="text-xs text-gray-400">15 daqiqa oldin</span>
          </div>
        </div>
        <div class="p-4 hover:bg-gray-50 transition">
          <div class="flex items-start gap-4">
            <div
              class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0"
            >
              <UIcon
                name="i-heroicons-check-circle"
                class="w-5 h-5 text-green-600"
              />
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">Test yakunlandi</p>
              <p class="text-xs text-gray-500 mt-1">25 ta talaba qatnashdi</p>
            </div>
            <span class="text-xs text-gray-400">1 soat oldin</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'dashboard',
  });

  useHead({
    title: 'Analitika - StudentRank',
  });
</script>
