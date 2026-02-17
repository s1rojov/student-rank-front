# StudentRank - O'quvchilar reytingi tizimi

StudentRank - bu o'quvchilarning reytingini boshqarish va turnirlar o'tkazish uchun zamonaviy web platforma.

## ✨ Xususiyatlar

- 🔐 **Google OAuth Authentication** - Google hisobi orqali tizimga kirish
- 👥 **User Management** - Foydalanuvchilarni boshqarish
- 🏆 **Tournament System** - Turnirlar tizimi
- 📊 **Rating System** - Reytinglar tizimi
- 📈 **Analytics Dashboard** - Analitika dashboard
- 🎨 **Modern UI** - Zamonaviy dizayn (Nuxt UI)

## 🚀 Tezkor boshlash

### 1. O'rnatish

```bash
npm install
```

### 2. Google OAuth sozlash

Google OAuth authentication'ni sozlash uchun batafsil yo'riqnoma:

📖 **[GOOGLE_OAUTH_SETUP.md](./GOOGLE_OAUTH_SETUP.md)** - To'liq o'rnatish yo'riqnomasi

Qisqacha:

1. [Google Cloud Console](https://console.cloud.google.com/) da loyiha yarating
2. OAuth 2.0 Client ID oling
3. `.env` fayl yarating (`.env.example` dan nusxa oling):

```bash
cp .env.example .env
```

4. `.env` faylida sozlamalarni kiriting

### 3. Ishga tushirish

```bash
npm run dev
```

Brauzerda oching: `http://localhost:3000`

## 📁 Loyiha tuzilishi

```
student-rank/
├── app/
│   ├── assets/          # CSS va rasmlar
│   ├── components/      # Vue komponentlar
│   ├── layouts/         # Layout'lar
│   ├── pages/           # Sahifalar (routing)
│   │   ├── auth/
│   │   │   └── google/
│   │   │       └── callback.vue  # Google OAuth callback
│   │   ├── dashboard/   # Dashboard sahifalari
│   │   ├── login.vue    # Login sahifasi ✨
│   │   └── register.vue # Register sahifasi ✨
│   └── stores/          # Pinia stores
│       └── auth.ts      # Auth store ✨ (Google OAuth)
├── public/              # Static fayllar
├── .env.example         # Environment variables misoli ✨
├── DATABASE_SCHEMA.md   # Database schema ✨
├── GOOGLE_OAUTH_SETUP.md # Google OAuth setup yo'riqnomasi ✨
└── nuxt.config.ts       # Nuxt konfiguratsiyasi
```

## 🗄️ Database

Ma'lumotlar bazasi sxemasi va backend implementatsiya misollari:

📖 **[DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md)** - To'liq database schema

## 🔧 Texnologiyalar

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **UI Library**: [Nuxt UI](https://ui.nuxt.com/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: Google OAuth 2.0

## 📚 Hujjatlar

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com/)
- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)

## 🏗️ Production build

```bash
npm run build
```

## 🎯 Keyingi qadamlar

1. ✅ Frontend - Google OAuth (Tayyor)
2. ⏳ Backend API'larni yaratish
3. ⏳ Ma'lumotlar bazasini sozlash
4. ⏳ JWT authentication qo'shish
5. ⏳ Tournament va Rating tizimlarini tugallash

## 📝 Litsenziya

MIT

---

**Good luck! 🚀**

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
