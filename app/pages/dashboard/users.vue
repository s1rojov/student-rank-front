<template>
  <div class="flex items-center justify-center min-h-[60vh]">
    <div class="text-center">
      <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <UIcon name="i-heroicons-users" class="w-12 h-12 text-green-600" />
      </div>
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Foydalanuvchilar</h1>
      <p class="text-gray-600">Foydalanuvchilarni boshqarish sahifasi</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useHead({
  title: "Foydalanuvchilar - StudentRank",
});
</script>

