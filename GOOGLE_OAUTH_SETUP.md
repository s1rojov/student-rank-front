# Google OAuth Authentication - O'rnatish yo'riqnomasi

## 📋 Umumiy ma'lumot

Loyihangizda endi **Google OAuth** autentifikatsiyasi mavjud. Foydalanuvchilar Google hisobi orqali tizimga kirishi yoki ro'yxatdan o'tishi mumkin.

### Google'dan olinadigan ma'lumotlar:

- ✅ **Email** - Foydalanuvchi email manzili (tasdiqlangan)
- ✅ **Name** - To'liq ism
- ✅ **Given Name** - Ism
- ✅ **Family Name** - Familiya
- ✅ **Picture** - Profil rasmi URL
- ✅ **Google ID** - Noyob identifikator
- ✅ **Email Verified** - Email tasdiqlanganligi
- ✅ **Locale** - Til sozlamalari

## 🚀 O'rnatish qadamlari

### 1. Google Cloud Console sozlamalari

#### A. Google Cloud loyiha yaratish

1. [Google Cloud Console](https://console.cloud.google.com/) ga kiring
2. Yangi loyiha yarating yoki mavjudini tanlang
3. Loyiha nomini kiriting (masalan: "StudentRank")

#### B. OAuth Consent Screen sozlash

1. **"APIs & Services"** > **"OAuth consent screen"** ga o'ting
2. **"External"** ni tanlang va **Continue** bosing
3. Quyidagi ma'lumotlarni to'ldiring:
   - **App name**: StudentRank
   - **User support email**: Sizning email manzilingiz
   - **Developer contact email**: Sizning email manzilingiz
4. **Save and Continue** bosing
5. **Scopes** bo'limida:
   - `openid`
   - `email`
   - `profile`
     scope'larini qo'shing
6. **Save and Continue** bosing

#### C. OAuth Client ID yaratish

1. **"APIs & Services"** > **"Credentials"** ga o'ting
2. **"+ CREATE CREDENTIALS"** > **"OAuth 2.0 Client ID"** ni tanlang
3. **Application type**: "Web application" ni tanlang
4. **Name**: "StudentRank Web Client" (yoki istalgan nom)
5. **Authorized JavaScript origins** ga qo'shing:
   ```
   http://localhost:3000
   ```
6. **Authorized redirect URIs** ga qo'shing:
   ```
   http://localhost:3000/auth/google/callback
   ```
7. **CREATE** bosing
8. **Client ID** va **Client Secret** ni ko'chirib oling (keyinroq kerak bo'ladi)

### 2. Loyihani sozlash

#### A. .env fayl yaratish

Loyiha ildizida `.env` fayl yarating va quyidagilarni kiriting:

```env
# Google OAuth Configuration
GOOGLE_CLIENT_ID=sizning-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=sizning-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/callback

# JWT Configuration
JWT_SECRET=juda-xavfsiz-secret-key-kiriting
JWT_EXPIRES_IN=7d

# Application Configuration
APP_URL=http://localhost:3000
NODE_ENV=development
```

⚠️ **Muhim**: `.env` faylini `.gitignore` ga qo'shing (allaqachon qo'shilgan)

#### B. Package'larni o'rnatish

```bash
npm install
```

### 3. Ishga tushirish

```bash
npm run dev
```

Brauzerda ochish: `http://localhost:3000`

## 📝 Fayllarga kiritilgan o'zgarishlar

### 1. **Auth Store** - `app/stores/auth.ts`

Yangi metodlar qo'shildi:

```typescript
-loginWithGoogle() - // Google OAuth login
  handleGoogleCallback(); // Google callback handler
```

User interface yangilandi:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  emailVerified?: boolean;
  phone?: string;
  avatar?: string;
  googleId?: string; // ✨ Yangi
  givenName?: string; // ✨ Yangi
  familyName?: string; // ✨ Yangi
  locale?: string; // ✨ Yangi
  authProvider?: 'google' | 'email'; // ✨ Yangi
}
```

### 2. **Login Page** - `app/pages/login.vue`

- ✨ "Google orqali kirish" tugmasi qo'shildi
- Google logo va rang sxemasi qo'shildi
- "yoki" ajratuvchi qo'shildi

### 3. **Register Page** - `app/pages/register.vue`

- ✨ "Google orqali ro'yxatdan o'tish" tugmasi qo'shildi
- Google logo va rang sxemasi qo'shildi
- "yoki" ajratuvchi qo'shildi

### 4. **Google Callback Page** - `app/pages/auth/google/callback.vue`

- ✨ Yangi sahifa - Google OAuth callback'ni qayta ishlaydi
- Loading holatini ko'rsatadi
- Muvaffaqiyatli bo'lsa dashboard'ga yo'naltiradi

### 5. **Nuxt Config** - `nuxt.config.ts`

Runtime config qo'shildi:

```typescript
runtimeConfig: {
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  jwtSecret: process.env.JWT_SECRET,
  public: {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleRedirectUri: process.env.GOOGLE_REDIRECT_URI,
    appUrl: process.env.APP_URL,
  }
}
```

## 🗄️ Database Schema

Ma'lumotlar bazasi jadvali uchun to'liq schema `DATABASE_SCHEMA.md` faylida mavjud.

### PostgreSQL jadval (users):

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  google_id VARCHAR(255) UNIQUE,
  email VARCHAR(255) UNIQUE NOT NULL,
  email_verified BOOLEAN DEFAULT FALSE,
  name VARCHAR(255) NOT NULL,
  given_name VARCHAR(100),
  family_name VARCHAR(100),
  avatar_url TEXT,
  phone VARCHAR(20),
  password_hash VARCHAR(255),
  locale VARCHAR(10) DEFAULT 'uz',
  auth_provider VARCHAR(20) DEFAULT 'email',
  role VARCHAR(20) DEFAULT 'student',
  is_active BOOLEAN DEFAULT TRUE,
  last_login_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔧 Keyingi qadamlar (Backend)

Hozir frontend tayyor. Backend uchun quyidagilarni qilishingiz kerak:

### 1. Backend API endpoint'larini yaratish

```
POST /api/auth/google/callback
GET  /api/auth/me
POST /api/auth/logout
```

### 2. Google OAuth paketini o'rnatish

**Node.js uchun**:

```bash
npm install googleapis
```

**Python uchun**:

```bash
pip install google-auth google-auth-oauthlib google-auth-httplib2
```

### 3. Backend implementatsiya misoli

`DATABASE_SCHEMA.md` faylida to'liq backend implementatsiya misoli mavjud.

## 🔒 Xavfsizlik

1. ✅ `.env` faylini hech qachon git'ga qo'shmang
2. ✅ Production'da boshqa `CLIENT_SECRET` ishlating
3. ✅ JWT tokenlarni httpOnly cookie'larda saqlang
4. ✅ HTTPS ishlatilsin (production'da)
5. ✅ Rate limiting qo'shing
6. ✅ CSRF protection qo'shing

## 🌐 Production uchun

Production'da deploy qilishdan oldin:

1. **Google Cloud Console'da**:
   - Production URL'ni "Authorized JavaScript origins" ga qo'shing
   - Production callback URL'ni "Authorized redirect URIs" ga qo'shing

   ```
   https://yourdomain.com
   https://yourdomain.com/auth/google/callback
   ```

2. **.env faylini yangilang**:

   ```env
   GOOGLE_REDIRECT_URI=https://yourdomain.com/auth/google/callback
   APP_URL=https://yourdomain.com
   NODE_ENV=production
   ```

3. **OAuth Consent Screen'ni Publish qiling**

## 📚 Qo'shimcha resurslar

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Google Sign-In Best Practices](https://developers.google.com/identity/sign-in/web/sign-in)
- [Nuxt 3 Runtime Config](https://nuxt.com/docs/guide/going-further/runtime-config)

## 🆘 Muammolar va yechimlar

### Muammo: "redirect_uri_mismatch" xatosi

**Yechim**: Google Cloud Console'da redirect URI'ni to'g'ri yozganingizni tekshiring:

```
http://localhost:3000/auth/google/callback
```

### Muammo: "invalid_client" xatosi

**Yechim**: `GOOGLE_CLIENT_ID` va `GOOGLE_CLIENT_SECRET` to'g'ri ekanligini tekshiring

### Muammo: User ma'lumotlari kelmayapti

**Yechim**: OAuth Consent Screen'da scope'lar to'g'ri qo'shilganligini tekshiring

## 🤝 Yordam

Agar savollar bo'lsa yoki yordam kerak bo'lsa, issue oching yoki @your-username ga murojaat qiling.

---

**Good luck! 🚀**
