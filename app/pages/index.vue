<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Navigation -->
    <nav
      class="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800"
    >
      <UContainer>
        <div class="flex items-center justify-between h-16">
          <a class="flex items-center gap-2 cursor-pointer" href="#">
            <UIcon
              name="i-heroicons-academic-cap"
              class="w-8 h-8 text-primary-500"
            />
            <span class="text-xl font-bold text-gray-900 dark:text-white"
              >StudentRank</span
            >
          </a>
          <div class="hidden md:flex items-center gap-8">
            <ULink
              to="#features"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition"
              >Features</ULink
            >
            <ULink
              to="#how-it-works"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition"
              >How It Works</ULink
            >
            <ULink
              to="#testimonials"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition"
              >Testimonials</ULink
            >
          </div>
          <div class="flex items-center gap-4">
            <UButton variant="ghost" color="neutral">Sign In</UButton>
            <UButton color="primary">Get Started</UButton>
          </div>
        </div>
      </UContainer>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto">
          <UBadge color="primary" variant="subtle" class="mb-4">
            🎓 Trusted by 10,000+ students
          </UBadge>
          <h1
            class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Track Your Academic
            <span class="text-primary-500">Success</span>
          </h1>
          <p
            class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            StudentRank helps you monitor your grades, compare performance, and
            achieve your academic goals with powerful analytics and insights.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="xl" color="primary">
              Start Free Trial
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
            </UButton>
            <UButton size="xl" variant="outline" color="neutral">
              <UIcon name="i-heroicons-play" class="w-5 h-5 mr-2" />
              Watch Demo
            </UButton>
          </div>
        </div>

        <!-- Hero Image Placeholder -->
        <div class="mt-16 relative">
          <div
            class="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 shadow-2xl"
          >
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Your Dashboard
                </h3>
                <UBadge color="success">Live</UBadge>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div
                  class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center"
                >
                  <p class="text-3xl font-bold text-primary-500">3.8</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">GPA</p>
                </div>
                <div
                  class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center"
                >
                  <p class="text-3xl font-bold text-green-500">Top 15%</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Class Rank
                  </p>
                </div>
                <div
                  class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center"
                >
                  <p class="text-3xl font-bold text-blue-500">24</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Credits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white dark:bg-gray-800">
      <UContainer>
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Everything You Need to Excel
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to help students track, analyze, and
            improve their academic performance.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <div
                class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-chart-bar"
                  class="w-6 h-6 text-primary-500"
                />
              </div>
            </template>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Grade Analytics
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Visualize your grades over time with interactive charts and
              identify trends in your performance.
            </p>
          </UCard>

          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <div
                class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-trophy"
                  class="w-6 h-6 text-green-500"
                />
              </div>
            </template>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Class Rankings
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              See where you stand among your peers with anonymous class rankings
              and percentile scores.
            </p>
          </UCard>

          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <div
                class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-light-bulb"
                  class="w-6 h-6 text-blue-500"
                />
              </div>
            </template>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Smart Insights
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Get personalized recommendations and study tips based on your
              performance patterns.
            </p>
          </UCard>

          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <div
                class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-bell-alert"
                  class="w-6 h-6 text-purple-500"
                />
              </div>
            </template>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Grade Alerts
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Never miss an update with instant notifications when new grades
              are posted.
            </p>
          </UCard>

          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <div
                class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-calculator"
                  class="w-6 h-6 text-orange-500"
                />
              </div>
            </template>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              GPA Calculator
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Plan ahead with our GPA simulator. See what grades you need to
              reach your goals.
            </p>
          </UCard>

          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <div
                class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-document-chart-bar"
                  class="w-6 h-6 text-red-500"
                />
              </div>
            </template>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Progress Reports
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Generate detailed reports to share with advisors, parents, or for
              scholarship applications.
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            How It Works
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started in minutes and take control of your academic journey.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
            >
              1
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Create Account
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Sign up with your school email and verify your student status in
              seconds.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
            >
              2
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Connect Your School
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Link to your school's grading system or manually enter your
              courses and grades.
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
            >
              3
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Track & Improve
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Monitor your progress, set goals, and use insights to improve your
              performance.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 bg-white dark:bg-gray-800">
      <UContainer>
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            What Students Say
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of students who are already improving their grades.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <UCard>
            <div class="flex items-center gap-1 mb-4">
              <UIcon
                v-for="i in 5"
                :key="i"
                name="i-heroicons-star-solid"
                class="w-5 h-5 text-yellow-400"
              />
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              "StudentRank helped me identify my weak subjects early. I improved
              my GPA from 3.2 to 3.7 in one semester!"
            </p>
            <div class="flex items-center gap-3">
              <UAvatar text="SK" size="md" />
              <div>
                <p class="font-semibold text-gray-900 dark:text-white">
                  Sarah K.
                </p>
                <p class="text-sm text-gray-500">Computer Science, Junior</p>
              </div>
            </div>
          </UCard>

          <UCard>
            <div class="flex items-center gap-1 mb-4">
              <UIcon
                v-for="i in 5"
                :key="i"
                name="i-heroicons-star-solid"
                class="w-5 h-5 text-yellow-400"
              />
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              "The GPA simulator is a game changer. I can plan my semester
              knowing exactly what I need to achieve my goals."
            </p>
            <div class="flex items-center gap-3">
              <UAvatar text="MJ" size="md" />
              <div>
                <p class="font-semibold text-gray-900 dark:text-white">
                  Michael J.
                </p>
                <p class="text-sm text-gray-500">Business, Senior</p>
              </div>
            </div>
          </UCard>

          <UCard>
            <div class="flex items-center gap-1 mb-4">
              <UIcon
                v-for="i in 5"
                :key="i"
                name="i-heroicons-star-solid"
                class="w-5 h-5 text-yellow-400"
              />
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              "Being able to see my class ranking motivates me to work harder.
              It's healthy competition!"
            </p>
            <div class="flex items-center gap-3">
              <UAvatar text="EL" size="md" />
              <div>
                <p class="font-semibold text-gray-900 dark:text-white">
                  Emily L.
                </p>
                <p class="text-sm text-gray-500">Pre-Med, Sophomore</p>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
      <UContainer>
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Grades?
          </h2>
          <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join StudentRank today and start your journey to academic
            excellence. Free for students!
          </p>
          <UButton size="xl" color="white">
            Get Started for Free
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-gray-900 text-gray-400">
      <UContainer>
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <UIcon
                name="i-heroicons-academic-cap"
                class="w-8 h-8 text-primary-500"
              />
              <span class="text-xl font-bold text-white">StudentRank</span>
            </div>
            <p class="text-sm">
              Empowering students to achieve their academic potential through
              data-driven insights.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Product</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <ULink to="#" class="hover:text-white transition"
                  >Features</ULink
                >
              </li>
              <li>
                <ULink to="#" class="hover:text-white transition"
                  >Pricing</ULink
                >
              </li>
              <li>
                <ULink to="#" class="hover:text-white transition"
                  >Schools</ULink
                >
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Company</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <ULink to="#" class="hover:text-white transition">About</ULink>
              </li>
              <li>
                <ULink to="#" class="hover:text-white transition">Blog</ULink>
              </li>
              <li>
                <ULink to="#" class="hover:text-white transition"
                  >Careers</ULink
                >
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Support</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <ULink to="#" class="hover:text-white transition"
                  >Help Center</ULink
                >
              </li>
              <li>
                <ULink to="#" class="hover:text-white transition"
                  >Contact</ULink
                >
              </li>
              <li>
                <ULink to="#" class="hover:text-white transition"
                  >Privacy</ULink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 StudentRank. All rights reserved.</p>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: 'StudentRank - Track Your Academic Success',
    meta: [
      {
        name: 'description',
        content:
          'StudentRank helps you monitor your grades, compare performance, and achieve your academic goals with powerful analytics and insights.',
      },
    ],
  });
</script>
