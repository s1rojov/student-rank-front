<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <AppHeader />

    <!-- Page Content -->
    <main class="pt-24 pb-16">
      <UContainer>
        <!-- Page Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Bog'lanish</h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Savollaringiz bormi? Biz bilan bog'laning!
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <!-- Contact Form -->
          <div>
            <UCard class="shadow-lg">
              <template #header>
                <h2 class="text-xl font-semibold text-gray-900">
                  Xabar yuborish
                </h2>
              </template>

              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div>
                  <label class="block text-base font-medium text-gray-900 mb-2"
                    >Ismingiz</label
                  >
                  <UInput
                    v-model="form.name"
                    placeholder="Ism Familiya"
                    size="xl"
                    class="text-base w-full"
                  />
                </div>

                <div>
                  <label class="block text-base font-medium text-gray-900 mb-2"
                    >Email</label
                  >
                  <UInput
                    v-model="form.email"
                    type="email"
                    placeholder="namuna@email.uz"
                    size="xl"
                    class="text-base w-full"
                  />
                </div>

                <!-- <div>
                  <label class="block text-base font-medium text-gray-900 mb-2"
                    >Mavzu</label
                  >
                  <USelect
                    v-model="form.subject"
                    :options="subjects"
                    placeholder="Mavzuni tanlang"
                    size="xl"
                    class="text-base w-full"
                  />
                </div> -->

                <div>
                  <label class="block text-base font-medium text-gray-900 mb-2"
                    >Xabar</label
                  >
                  <UTextarea
                    v-model="form.message"
                    placeholder="Xabaringizni yozing..."
                    :rows="5"
                    size="xl"
                    class="text-base w-full"
                  />
                </div>

                <UButton
                  type="submit"
                  color="primary"
                  size="xl"
                  block
                  :loading="loading"
                  class="text-base"
                >
                  Yuborish
                </UButton>
              </form>
            </UCard>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-6">
                Boshqa usullar
              </h2>

              <div class="space-y-4">
                <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <UIcon
                      name="i-heroicons-envelope"
                      class="w-6 h-6 text-blue-600"
                    />
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Email</h3>
                    <p class="text-gray-600">info@studentrank.uz</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <UIcon
                      name="i-heroicons-phone"
                      class="w-6 h-6 text-blue-600"
                    />
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Telefon</h3>
                    <p class="text-gray-600">+998 71 123 45 67</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <UIcon
                      name="i-heroicons-map-pin"
                      class="w-6 h-6 text-blue-600"
                    />
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Manzil</h3>
                    <p class="text-gray-600">
                      Toshkent shahri, Chilonzor tumani
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-6">
                Ijtimoiy tarmoqlar
              </h2>

              <div class="flex gap-4">
                <UButton
                  to="https://t.me/studentrank"
                  external
                  variant="outline"
                  color="neutral"
                  size="lg"
                >
                  <UIcon name="i-simple-icons-telegram" class="w-5 h-5 mr-2" />
                  Telegram
                </UButton>
                <UButton
                  to="https://instagram.com/studentrank"
                  external
                  variant="outline"
                  color="neutral"
                  size="lg"
                >
                  <UIcon name="i-simple-icons-instagram" class="w-5 h-5 mr-2" />
                  Instagram
                </UButton>
              </div>
            </div>

            <div class="p-6 bg-blue-50 rounded-xl">
              <h3 class="font-semibold text-gray-900 mb-2">Ish vaqti</h3>
              <p class="text-gray-600">
                Dushanba - Juma: 09:00 - 18:00<br />
                Shanba - Yakshanba: Dam olish kuni
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: "Bog'lanish - StudentRank",
  });

  const loading = ref(false);

  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const subjects = [
    { label: 'Umumiy savol', value: 'general' },
    { label: 'Texnik yordam', value: 'support' },
    { label: 'Hamkorlik', value: 'partnership' },
    { label: 'Boshqa', value: 'other' },
  ];

  const handleSubmit = async () => {
    loading.value = true;
    try {
      // TODO: Implement contact form submission
      console.log('Contact form:', form);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Xabaringiz yuborildi! Tez orada javob beramiz.');
      // Reset form
      form.name = '';
      form.email = '';
      form.subject = '';
      form.message = '';
    } catch (error) {
      console.error('Contact form error:', error);
    } finally {
      loading.value = false;
    }
  };
</script>
