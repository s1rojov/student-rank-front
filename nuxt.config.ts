// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  runtimeConfig: {
    // Private keys (faqat server-side)
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    jwtSecret: process.env.JWT_SECRET || 'default-secret-change-in-production',
    databaseUrl: process.env.DATABASE_URL,

    // Public keys (client-side ham ko'rinadi)
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:4000',
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      googleRedirectUri:
        process.env.GOOGLE_REDIRECT_URI ||
        'http://localhost:3000/auth/google/callback',
      appUrl: process.env.APP_URL || 'http://localhost:3000',
    },
  },
});
