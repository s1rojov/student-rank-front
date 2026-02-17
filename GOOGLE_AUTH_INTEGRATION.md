# Google OAuth Integration Guide

Bu loyihada Google OAuth integratsiyasi backend API bilan to'liq ishga tushirilgan.

## Backend Endpointlar

Backend quyidagi endpointlarni taqdim etishi kerak:

### 1. `/auth/google` (GET)

Google OAuth oqimini boshlaydi. Foydalanuvchini Google login sahifasiga yo'naltiradi.

**Response:** Google authorization sahifasiga redirect

### 2. `/auth/google/callback` (GET/POST)

Google OAuth callback. Google'dan authorization code qabul qiladi va token qaytaradi.

**Query params:**

- `code`: Google authorization code

**Response:**

```json
{
  "accessToken": "jwt-token",
  "user": {
    "id": 1,
    "name": "User Name",
    "email": "user@example.com",
    "avatar": "https://...",
    "googleId": "google-user-id",
    "authProvider": "google"
  }
}
```

**Yoki frontend'ga redirect:**

```
http://localhost:3000/auth/google/callback?token=jwt-token
```

### 3. `/auth/profile` (GET)

Autentifikatsiya qilingan foydalanuvchi ma'lumotlarini qaytaradi.

**Headers:**

```
Authorization: Bearer <access_token>
```

**Response:**

```json
{
  "id": 1,
  "name": "User Name",
  "email": "user@example.com",
  "avatar": "https://...",
  "googleId": "google-user-id",
  "authProvider": "google"
}
```

### 4. `/auth/check` (GET)

Token validligini tekshiradi.

**Headers:**

```
Authorization: Bearer <access_token>
```

**Response:**

```json
{
  "isAuthenticated": true,
  "user": {
    "id": 1,
    "name": "User Name",
    "email": "user@example.com"
  }
}
```

## Frontend Integratsiyasi

### 1. Environment Variables (.env)

```env
API_BASE_URL=http://localhost:4000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/callback
```

### 2. Auth Store (`stores/auth.ts`)

Quyidagi metodlar mavjud:

- `loginWithGoogle()`: Backend Google OAuth endpoint'iga yo'naltiradi
- `handleGoogleCallback(code)`: Backend'ga code yuboradi va token oladi
- `checkAuth()`: Token validligini backend bilan tekshiradi
- `fetchUser()`: Foydalanuvchi profilini oladi
- `logout()`: Foydalanuvchini tizimdan chiqaradi

### 3. Middleware (`middleware/auth.global.ts`)

Har bir route o'zgarishida:

- Token mavjudligini tekshiradi
- Backend bilan token validligini tasdiqlaydi
- Login sahifasiga yo'naltiradi (agar kerak bo'lsa)

### 4. API Composable (`composables/useApi.ts`)

- Avtomatik ravishda tokenda Authorization header qo'shadi
- 401 xatolarni ushlab, login sahifasiga yo'naltiradi
- Barcha API so'rovlarida ishlatiladi

### 5. Callback Page (`pages/auth/google/callback.vue`)

Ikki xil flow'ni qo'llab-quvvatlaydi:

**Variant 1: Backend tokenni URL'da yuboradi**

```
http://localhost:3000/auth/google/callback?token=jwt-token
```

**Variant 2: Backend code'ni yuboradi**

```
http://localhost:3000/auth/google/callback?code=authorization-code
```

Frontend code'ni backend'ga yuboradi va token oladi.

## Login Flow

1. Foydalanuvchi "Google orqali kirish" tugmasini bosadi
2. Frontend foydalanuvchini `http://localhost:4000/auth/google`ga yo'naltiradi
3. Backend Google login sahifasiga redirect qiladi
4. Foydalanuvchi Google'da login qiladi
5. Google foydalanuvchini backend callback'ga yo'naltiradi
6. Backend:
   - Variant A: Foydalanuvchini frontend'ga token bilan redirect qiladi
   - Variant B: Foydalanuvchini code bilan redirect qiladi
7. Frontend token oladi va foydalanuvchi ma'lumotlarini yuklaydi
8. Dashboard'ga yo'naltirish

## Xatoliklar

- `error` query parametri mavjud bo'lsa, foydalanuvchiga xatolik ko'rsatiladi
- 401 statusi: Token yaroqsiz yoki muddati o'tgan
- 403 statusi: Ruxsat yo'q
- 500 statusi: Server xatosi

## Muhim Eslatmalar

1. Backend `.env`da Google OAuth credentials sozlanishi kerak
2. Google Cloud Console'da redirect URI qo'shilishi kerak:
   - `http://localhost:4000/auth/google/callback` (backend)
   - `http://localhost:3000/auth/google/callback` (frontend)
3. Token'lar cookie'da saqlanadi (`access_token`)
4. Har bir sahifa yuklanishda auth holati tekshiriladi

## Test

1. Backend'ni ishga tushiring: `http://localhost:4000`
2. Frontend'ni ishga tushiring: `npm run dev`
3. Login sahifasiga o'ting: `http://localhost:3000/login`
4. "Google orqali kirish" tugmasini bosing
5. Google account tanlang
6. Dashboard'ga yo'naltirilishingiz kerak

## Troubleshooting

**Xatolik: "Avtorizatsiya kodi topilmadi"**

- Backend callback URL'ni tekshiring
- Google Cloud Console'da redirect URI to'g'riligini tekshiring

**Xatolik: 401 Unauthorized**

- Backend token validatsiyasini tekshiring
- JWT secret to'g'riligini tekshiring
- Token muddati o'tganligini tekshiring

**Xatolik: "Google OAuth Error"**

- Google Cloud Console'da OAuth consent screen sozlanganligini tekshiring
- Client ID va Secret to'g'riligini tekshiring
