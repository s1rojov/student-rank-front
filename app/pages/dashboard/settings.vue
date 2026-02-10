<template>
  <div>
    <div class="max-w-5xl">
      <!-- Tabs -->
      <div class="bg-white rounded-xl shadow-sm mb-6">
        <div class="border-b border-gray-200 px-6">
          <nav class="flex gap-6">
            <button
              @click="activeTab = 'profile'"
              :class="[
                'py-4 px-2 border-b-2 font-medium text-sm transition-colors',
                activeTab === 'profile'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              ]"
            >
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-user" class="w-5 h-5" />
                <span>Profil</span>
              </div>
            </button>
            <button
              @click="activeTab = 'security'"
              :class="[
                'py-4 px-2 border-b-2 font-medium text-sm transition-colors',
                activeTab === 'security'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              ]"
            >
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-lock-closed" class="w-5 h-5" />
                <span>Xavfsizlik</span>
              </div>
            </button>
            <button
              @click="activeTab = 'notifications'"
              :class="[
                'py-4 px-2 border-b-2 font-medium text-sm transition-colors',
                activeTab === 'notifications'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              ]"
            >
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-bell" class="w-5 h-5" />
                <span>Bildirishnomalar</span>
              </div>
            </button>
          </nav>
        </div>
      </div>

      <!-- Profile Tab -->
      <div
        v-show="activeTab === 'profile'"
        class="bg-white rounded-xl shadow-sm p-6"
      >
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900">
            Profil Sozlamalari
          </h3>
          <p class="text-sm text-gray-500 mt-1">
            Shaxsiy ma'lumotlaringizni yangilang
          </p>
        </div>

        <form @submit.prevent="handleSaveProfile" class="space-y-6">
          <!-- Avatar -->
          <div class="flex items-center gap-6 pb-6 border-b border-gray-200">
            <div
              class="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <UIcon name="i-heroicons-user" class="w-12 h-12 text-white" />
            </div>
            <div>
              <button
                type="button"
                class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
              >
                Rasmni o'zgartirish
              </button>
              <p class="text-xs text-gray-500 mt-2">
                JPG yoki PNG. Maksimal 2MB
              </p>
            </div>
          </div>

          <!-- Form Fields -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">
                To'liq ism
              </label>
              <input
                v-model="profileForm.name"
                type="text"
                placeholder="Ismingiz"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                v-model="profileForm.email"
                type="email"
                placeholder="email@example.com"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">
                Telefon
              </label>
              <input
                v-model="profileForm.phone"
                type="text"
                placeholder="+998 90 123 45 67"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">
                Lavozim
              </label>
              <input
                v-model="profileForm.position"
                type="text"
                placeholder="Administrator"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">
              Bio
            </label>
            <textarea
              v-model="profileForm.bio"
              rows="4"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              placeholder="O'zingiz haqingizda qisqacha ma'lumot..."
            ></textarea>
          </div>

          <div class="flex justify-end pt-4 border-t border-gray-200">
            <button
              type="submit"
              :disabled="saving"
              class="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-lg shadow-blue-500/30 transition-all disabled:opacity-50"
            >
              <span v-if="!saving">O'zgarishlarni saqlash</span>
              <span v-else>Saqlanmoqda...</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Security Tab -->
      <div
        v-show="activeTab === 'security'"
        class="bg-white rounded-xl shadow-sm p-6"
      >
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Xavfsizlik</h3>
          <p class="text-sm text-gray-500 mt-1">
            Parolingizni va xavfsizlik sozlamalarini boshqaring
          </p>
        </div>

        <form @submit.prevent="handleChangePassword" class="space-y-6">
          <div
            class="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3"
          >
            <UIcon
              name="i-heroicons-information-circle"
              class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
            />
            <div>
              <p class="text-sm font-medium text-blue-900">Parol talablari</p>
              <p class="text-xs text-blue-700 mt-1">
                Parol kamida 8 ta belgidan iborat bo'lishi va katta, kichik
                harflar hamda raqamlarni o'z ichiga olishi kerak.
              </p>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">
              Joriy parol
            </label>
            <input
              v-model="passwordForm.currentPassword"
              type="password"
              placeholder="••••••••"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">
              Yangi parol
            </label>
            <input
              v-model="passwordForm.newPassword"
              type="password"
              placeholder="••••••••"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">
              Parolni tasdiqlang
            </label>
            <input
              v-model="passwordForm.confirmPassword"
              type="password"
              placeholder="••••••••"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div class="flex justify-end pt-4 border-t border-gray-200">
            <button
              type="submit"
              :disabled="changingPassword"
              class="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-lg shadow-blue-500/30 transition-all disabled:opacity-50"
            >
              <span v-if="!changingPassword">Parolni o'zgartirish</span>
              <span v-else>O'zgartirilmoqda...</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Notifications Tab -->
      <div
        v-show="activeTab === 'notifications'"
        class="bg-white rounded-xl shadow-sm p-6"
      >
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Bildirishnomalar</h3>
          <p class="text-sm text-gray-500 mt-1">
            Bildirishnoma sozlamalarini boshqaring
          </p>
        </div>

        <div class="space-y-6">
          <div
            class="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div class="flex items-start gap-3">
              <div
                class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <UIcon
                  name="i-heroicons-envelope"
                  class="w-5 h-5 text-blue-600"
                />
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">
                  Email bildirishnomalar
                </p>
                <p class="text-xs text-gray-600 mt-1">
                  Yangi turnirlar va yangilanishlar haqida xabar olish
                </p>
              </div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="notifications.email"
                class="sr-only peer"
              />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
              ></div>
            </label>
          </div>

          <div
            class="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div class="flex items-start gap-3">
              <div
                class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <UIcon
                  name="i-heroicons-device-phone-mobile"
                  class="w-5 h-5 text-purple-600"
                />
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">
                  Push bildirishnomalar
                </p>
                <p class="text-xs text-gray-600 mt-1">
                  Natijalar e'lon qilinganda xabar olish
                </p>
              </div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="notifications.push"
                class="sr-only peer"
              />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
              ></div>
            </label>
          </div>

          <div
            class="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div class="flex items-start gap-3">
              <div
                class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <UIcon
                  name="i-heroicons-chat-bubble-left-right"
                  class="w-5 h-5 text-green-600"
                />
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900">
                  SMS bildirishnomalar
                </p>
                <p class="text-xs text-gray-600 mt-1">
                  Muhim yangilanishlar haqida SMS olish
                </p>
              </div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="notifications.sms"
                class="sr-only peer"
              />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
              ></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

useHead({
  title: "Sozlamalar - StudentRank",
});

const activeTab = ref("profile");
const saving = ref(false);
const changingPassword = ref(false);

const profileForm = reactive({
  name: "Test User",
  email: "test@example.com",
  phone: "+998 90 123 45 67",
  position: "Administrator",
  bio: "",
});

const passwordForm = reactive({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});

const notifications = reactive({
  email: true,
  push: true,
  sms: false,
});

const handleSaveProfile = async () => {
  saving.value = true;
  try {
    // TODO: Implement save profile logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Profile saved:", profileForm);
  } finally {
    saving.value = false;
  }
};

const handleChangePassword = async () => {
  changingPassword.value = true;
  try {
    // TODO: Implement change password logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Password changed");
    passwordForm.currentPassword = "";
    passwordForm.newPassword = "";
    passwordForm.confirmPassword = "";
  } finally {
    changingPassword.value = false;
  }
};
</script>
