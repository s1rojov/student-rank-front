<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <AppHeader />

    <!-- Page Content -->
    <main class="pt-24 pb-16">
      <UContainer>
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Biz haqimizda
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            StudentRank — O'zbekistondagi talabalar uchun birinchi online
            reyting platformasi
          </p>
        </div>

        <!-- Mission Section -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Bizning maqsadimiz
            </h2>
            <p class="text-lg text-gray-600 mb-4">
              Biz talabalarning bilim va ko'nikmalarini baholash, ularni
              rivojlantirishga undash va ularga adolatli raqobat muhitini
              yaratishni maqsad qilganmiz.
            </p>
            <p class="text-lg text-gray-600 mb-4">
              StudentRank orqali har bir talaba o'z kuchli va zaif tomonlarini
              bilib olishi, o'z sohasida eng yaxshilari qatorida bo'lish uchun
              harakat qilishi mumkin.
            </p>
            <p class="text-lg text-gray-600">
              Bizning platforma orqali talabalar nafaqat raqobatlashadi, balki
              o'zaro tajriba almashadi va birgalikda o'sadilar.
            </p>
          </div>
          <div class="bg-blue-50 rounded-2xl p-8">
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <p class="text-4xl font-bold text-blue-600 mb-2">10,000+</p>
                <p class="text-gray-600">Faol talabalar</p>
              </div>
              <div class="text-center">
                <p class="text-4xl font-bold text-blue-600 mb-2">50+</p>
                <p class="text-gray-600">Universitetlar</p>
              </div>
              <div class="text-center">
                <p class="text-4xl font-bold text-blue-600 mb-2">100+</p>
                <p class="text-gray-600">Turnirlar</p>
              </div>
              <div class="text-center">
                <p class="text-4xl font-bold text-blue-600 mb-2">14</p>
                <p class="text-gray-600">Viloyatlar</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Values Section -->
        <div class="mb-20">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
            Bizning qadriyatlarimiz
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center p-8 bg-gray-50 rounded-xl">
              <div
                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <UIcon name="i-heroicons-scale" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Adolat</h3>
              <p class="text-gray-600">
                Har bir talaba uchun teng imkoniyatlar va shaffof baholash
                tizimi.
              </p>
            </div>
            <div class="text-center p-8 bg-gray-50 rounded-xl">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <UIcon
                  name="i-heroicons-academic-cap"
                  class="w-8 h-8 text-green-600"
                />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Bilim</h3>
              <p class="text-gray-600">
                Uzluksiz o'rganish va o'z ustida ishlashni qo'llab-quvvatlash.
              </p>
            </div>
            <div class="text-center p-8 bg-gray-50 rounded-xl">
              <div
                class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <UIcon
                  name="i-heroicons-users"
                  class="w-8 h-8 text-purple-600"
                />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Jamoa</h3>
              <p class="text-gray-600">
                Barcha talabalarni birlashtiruvchi ijobiy jamoa yaratish.
              </p>
            </div>
          </div>
        </div>

        <!-- Team Section -->
        <!-- <div>
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
            Bizning jamoa
          </h2>
          <div class="grid md:grid-cols-4 gap-8">
            <div v-for="member in team" :key="member.name" class="text-center">
              <UAvatar
                :text="getInitials(member.name)"
                size="3xl"
                class="mx-auto mb-4"
              />
              <h3 class="font-semibold text-gray-900">{{ member.name }}</h3>
              <p class="text-gray-500 text-sm">{{ member.role }}</p>
            </div>
          </div>
        </div> -->
      </UContainer>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: 'Biz haqimizda - StudentRank',
  });

  const team = [
    { name: 'Azizbek Toshmatov', role: 'Asoschisi va CEO' },
    { name: 'Madina Karimova', role: 'CTO' },
    { name: 'Jasur Aliyev', role: 'Dizayner' },
    { name: 'Nilufar Rahimova', role: 'Marketing' },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };
</script>
