<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <AppHeader />

    <!-- Page Content -->
    <main class="pt-24 pb-16">
      <UContainer>
        <!-- Page Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Ko'p so'raladigan savollar
          </h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            StudentRank haqida eng ko'p beriladigan savollarga javoblar
          </p>
        </div>

        <!-- FAQ Accordion -->
        <div class="max-w-3xl mx-auto">
          <UAccordion
            :items="faqItems"
            :ui="{
              item: {
                label: 'text-lg font-medium text-gray-900',
                content: 'text-base text-gray-600',
              },
            }"
          />
        </div>

        <!-- Still have questions -->
        <div
          class="text-center mt-16 p-8 bg-gray-50 rounded-2xl max-w-2xl mx-auto"
        >
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Savolingizga javob topmadingizmi?
          </h3>
          <p class="text-gray-600 mb-6">
            Biz bilan bog'laning, sizga yordam berishdan xursand bo'lamiz!
          </p>
          <UButton color="primary" to="/contact">
            Bog'lanish
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
          </UButton>
        </div>
      </UContainer>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: "Ko'p so'raladigan savollar - StudentRank",
  });

  const faqItems = [
    {
      label: 'StudentRank nima?',
      content:
        "StudentRank — bu O'zbekistondagi talabalar uchun online baholash va reyting platformasi. Platforma orqali talabalar turli sohalardagi turnirlarda qatnashib, o'z bilim va ko'nikmalarini sinab ko'rishlari mumkin.",
    },
    {
      label: "Ro'yxatdan o'tish bepulmi?",
      content:
        "Ha, StudentRank platformasida ro'yxatdan o'tish mutlaqo bepul. Siz elektron pochta va parol bilan tez orada hisob yaratishingiz mumkin.",
    },
    {
      label: 'Turnirlarda qanday qatnashaman?',
      content:
        "Ro'yxatdan o'tganingizdan so'ng, 'Turnirlar' bo'limiga o'ting va ochiq turnirlardan birini tanlang. 'Qo'shilish' tugmasini bosing va belgilangan vaqtda testni yeching.",
    },
    {
      label: 'Reyting qanday hisoblanadi?',
      content:
        "Reyting turnirlarda to'plagan ballaringiz asosida hisoblanadi. Har bir turnirda to'g'ri javoblar uchun ball olasiz. Tezlik ham hisobga olinadi — kimdir bir xil javobni tezroq topsa, ko'proq ball oladi.",
    },
    {
      label: 'Turnirlar qancha vaqt davom etadi?',
      content:
        "Turnir davomiyligi uning turiga bog'liq. Odatda 60 dan 120 daqiqagacha davom etadi. Har bir turnirning tavsifida aniq vaqt ko'rsatilgan.",
    },
    {
      label: "Natijalarni qachon ko'raman?",
      content:
        "Turnir tugagandan so'ng, natijalar darhol e'lon qilinadi. Siz 'Reyting' bo'limida o'z o'rningizni va boshqa ishtirokchilar natijalarini ko'rishingiz mumkin.",
    },
    {
      label: 'Sovrinlar bormi?',
      content:
        "Ha, eng yaxshi natija ko'rsatgan ishtirokchilar uchun turli sovrinlar taqdim etiladi. Sovrinlar turnir turiga qarab farq qiladi va har bir turnir tavsifida ko'rsatiladi.",
    },
    {
      label: 'Texnik muammo yuzaga kelsa nima qilaman?',
      content:
        "Texnik muammo yuzaga kelsa, bizning qo'llab-quvvatlash xizmatiga murojaat qiling. 'Bog'lanish' sahifasidagi formani to'ldiring yoki Telegram kanalimizga yozing.",
    },
  ];
</script>
