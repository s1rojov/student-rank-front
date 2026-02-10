<template>
  <footer class="py-12 bg-gray-900 text-gray-400">
    <UContainer>
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img
              src="~/assets/images/logo.png"
              alt="StudentRank"
              class="w-52"
            />
            <!-- <span class="text-xl font-bold text-white">StudentRank</span> -->
          </div>
          <p class="text-sm">
            O'zbekistondagi eng faol talabalar reytingi platformasi. Bilimingni
            sinab ko'r va o'rningni bil!
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-white mb-4">Sahifalar</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/about" class="hover:text-white transition"
                >Biz haqimizda</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/tournaments" class="hover:text-white transition"
                >Turnirlar</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/rating" class="hover:text-white transition"
                >Reyting</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-white mb-4">Yordam</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/faq" class="hover:text-white transition"
                >Ko'p so'raladigan savollar</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-white transition"
                >Bog'lanish</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-white mb-4">Ijtimoiy tarmoqlar</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="https://t.me/studentrank"
                target="_blank"
                class="hover:text-white transition"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/studentrank"
                target="_blank"
                class="hover:text-white transition"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 text-center text-sm">
        <p>© StudentRank.uz 2026. Barcha huquqlar himoyalangan.</p>
      </div>
    </UContainer>
  </footer>
</template>
