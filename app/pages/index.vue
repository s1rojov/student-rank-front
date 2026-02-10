<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <AppHeader />

    <!-- Hero Section -->
    <section class="pt-28 pb-16 px-4">
      <UContainer>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <h1
              class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              O'zbekistondagi eng faol
              <span class="text-blue-600">talabalar reytingi</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              Online turnirlarda qatnash, bilimingni sinab ko'r va o'rningni
              bil!
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton size="xl" color="primary" to="/tournaments">
                Turnirga qo'shilish
                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
              </UButton>
              <UButton
                size="xl"
                variant="outline"
                color="neutral"
                @click="scrollToHowItWorks"
              >
                Qanday ishlaydi?
              </UButton>
            </div>
          </div>

          <!-- Right Content - Dashboard Preview -->
          <div class="hidden lg:block">
            <div
              class="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-semibold text-gray-900">Reyting jadvali</h3>
                <UBadge color="success" variant="subtle">Live</UBadge>
              </div>
              <div class="space-y-3">
                <div
                  v-for="(student, index) in previewRanking"
                  :key="index"
                  class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100"
                >
                  <div class="flex items-center gap-3">
                    <span
                      class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm"
                    >
                      {{ index + 1 }}
                    </span>
                    <span class="font-medium text-gray-900">{{
                      student.name
                    }}</span>
                  </div>
                  <span class="text-blue-600 font-semibold"
                    >{{ student.points }} ball</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- What is StudentRank Section -->
    <section class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            StudentRank nima?
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            StudentRank — talabalar uchun online baholash va reyting
            platformasi. Turnirlar orqali bilim va ko'nikmalar sinovdan
            o'tkaziladi. Natijalar asosida umumiy reyting shakllanadi.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="bg-white rounded-xl p-8 text-center border border-gray-100 hover:shadow-lg transition"
          >
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-3xl">🧠</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Bilimingni sinab ko'r
            </h3>
            <p class="text-gray-600">
              Turli sohalardagi testlar va masalalar orqali o'z bilimingizni
              tekshiring.
            </p>
          </div>

          <div
            class="bg-white rounded-xl p-8 text-center border border-gray-100 hover:shadow-lg transition"
          >
            <div
              class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-3xl">🏆</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Reytingda o'rningni bil
            </h3>
            <p class="text-gray-600">
              O'zbekiston bo'ylab talabalar orasida qayerda turishingizni bilib
              oling.
            </p>
          </div>

          <div
            class="bg-white rounded-xl p-8 text-center border border-gray-100 hover:shadow-lg transition"
          >
            <div
              class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-3xl">🚀</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              O'zingni rivojlantir
            </h3>
            <p class="text-gray-600">
              Har bir turnirdan so'ng tahlil va tavsiyalar orqali o'sishda davom
              eting.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Upcoming Tournaments Section -->
    <section class="py-16">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Yaqinlashayotgan turnirlar
          </h2>
          <p class="text-lg text-gray-600">
            Eng yaqin turnirlardan birida qatnashing va reytingda o'rningizni
            oshiring!
          </p>
        </div>

        <div
          v-if="upcomingTournaments.length > 0"
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="tournament in upcomingTournaments"
            :key="tournament.id"
            class="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <UBadge
                  :color="tournament.status === 'open' ? 'success' : 'warning'"
                  variant="subtle"
                >
                  {{
                    tournament.status === 'open'
                      ? "Ro'yxatdan o'tish ochiq"
                      : 'Yaqinda'
                  }}
                </UBadge>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ tournament.name }}
              </h3>
              <p class="text-gray-600 mb-4">{{ tournament.description }}</p>
              <div class="flex items-center gap-2 text-gray-500 mb-6">
                <UIcon name="i-heroicons-calendar" class="w-5 h-5" />
                <span>{{ tournament.date }}</span>
              </div>
              <UButton
                color="primary"
                block
                :disabled="tournament.status !== 'open'"
                to="/tournaments"
              >
                Qo'shilish
              </UButton>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-12 bg-gray-50 rounded-2xl">
          <p class="text-xl text-gray-600">
            Hozircha turnirlar yo'q, lekin tez orada e'lon qilinadi 👀
          </p>
        </div>
      </UContainer>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-16 bg-gray-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Qanday ishlaydi?
          </h2>
          <p class="text-lg text-gray-600">Uch oddiy qadamda boshlang</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6"
            >
              1
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Ro'yxatdan o'tasiz
            </h3>
            <p class="text-gray-600">
              Elektron pochta va parol bilan ro'yxatdan o'ting. Bu 1 daqiqa vaqt
              oladi.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6"
            >
              2
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Turnirda qatnashasiz
            </h3>
            <p class="text-gray-600">
              O'zingizga qiziq bo'lgan turnirni tanlang va testlarni yeching.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6"
            >
              3
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Reytingda o'rningizni ko'rasiz
            </h3>
            <p class="text-gray-600">
              Natijalaringiz umumiy reytingga qo'shiladi va o'rningizni
              ko'rishingiz mumkin.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-600">
      <UContainer>
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Sen ham o'rningni bilmoqchimisanmi?
          </h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hoziroq ro'yxatdan o'ting va birinchi turniringizda qatnashing!
          </p>
          <UButton size="xl" color="secondary" to="/register">
            Hoziroq boshlash
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: "StudentRank - O'zbekistondagi eng faol talabalar reytingi",
    meta: [
      {
        name: 'description',
        content:
          "Online turnirlarda qatnash, bilimingni sinab ko'r va o'rningni bil! StudentRank - talabalar uchun reyting platformasi.",
      },
    ],
  });

  // Preview ranking data for hero section
  const previewRanking = [
    { name: 'Aziz Karimov', points: 2450 },
    { name: 'Komila Rahimova', points: 2380 },
    { name: 'Jasur Toshmatov', points: 2290 },
    { name: 'Madina Aliyeva', points: 2150 },
  ];

  // Upcoming tournaments
  const upcomingTournaments = ref([
    {
      id: 1,
      name: 'IT Olimpiadasi 2026',
      description:
        "Dasturlash va algoritmlar bo'yicha respublika miqyosidagi turnir.",
      date: '2026-yil 25-fevral',
      status: 'open',
    },
    {
      id: 2,
      name: 'Matematika Challenge',
      description: "Oliy matematika fanidan bilimlaringizni sinab ko'ring.",
      date: '2026-yil 5-mart',
      status: 'open',
    },
    {
      id: 3,
      name: 'English Masters',
      description: "Ingliz tili bo'yicha test va yozma ish.",
      date: '2026-yil 15-mart',
      status: 'upcoming',
    },
  ]);

  // Scroll to how it works section
  const scrollToHowItWorks = () => {
    document
      .getElementById('how-it-works')
      ?.scrollIntoView({ behavior: 'smooth' });
  };
</script>
