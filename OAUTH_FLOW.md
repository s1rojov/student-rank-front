# Google OAuth Flow - Ishlash mexanizmi

## 🔄 OAuth Flow diagrammasi

```
┌─────────────┐                           ┌──────────────┐                    ┌─────────────┐
│  Foydalanuvchi│                          │   Frontend   │                    │   Google    │
│   (Browser)  │                           │   (Nuxt 3)   │                    │   OAuth     │
└──────┬───────┘                           └──────┬───────┘                    └──────┬──────┘
       │                                          │                                   │
       │  1. "Google orqali kirish" tugmasini bosadi                                 │
       ├─────────────────────────────────────────>│                                   │
       │                                          │                                   │
       │                                          │  2. Google OAuth URL yasaydi      │
       │                                          │     client_id, redirect_uri,      │
       │                                          │     scope, response_type          │
       │                                          │                                   │
       │  3. Google OAuth sahifasiga yo'naltiradi                                    │
       │<─────────────────────────────────────────┤                                   │
       │                                          │                                   │
       │  4. Google login sahifasiga kiriladi                                        │
       ├─────────────────────────────────────────────────────────────────────────────>│
       │                                          │                                   │
       │                                          │  5. Foydalanuvchi login qiladi    │
       │                                          │     va ruxsat beradi              │
       │                                          │                                   │
       │  6. Authorization code bilan callback URL ga qaytadi                        │
       │<─────────────────────────────────────────────────────────────────────────────┤
       │     /auth/google/callback?code=...      │                                   │
       │                                          │                                   │
       │                                          │  7. Code'ni backend'ga yuboradi   │
       │                                          ├──────────────>┐                   │
       │                                          │               │ Backend           │
       │                                          │               │                   │
       │                                          │  8. Code'ni Google'ga yuborib     │
       │                                          │     access_token oladi            │
       │                                          │               ├──────────────────>│
       │                                          │               │                   │
       │                                          │  9. Access token qaytadi          │
       │                                          │               │<──────────────────┤
       │                                          │               │                   │
       │                                          │  10. User info so'raydi           │
       │                                          │               ├──────────────────>│
       │                                          │               │  (access_token)   │
       │                                          │               │                   │
       │                                          │  11. User ma'lumotlari qaytadi    │
       │                                          │               │<──────────────────┤
       │                                          │               │  {email, name,    │
       │                                          │               │   picture, ...}   │
       │                                          │               │                   │
       │                                          │  12. Database'da user yaratadi    │
       │                                          │      yoki yangilaydi              │
       │                                          │               │                   │
       │                                          │  13. JWT token generatsiya        │
       │                                          │<──────────────┘                   │
       │                                          │     { user, token }               │
       │                                          │                                   │
       │  14. Dashboard'ga yo'naltiradi          │                                   │
       │<─────────────────────────────────────────┤                                   │
       │     /dashboard                          │                                   │
       │                                          │                                   │
```

## 📝 Qadamma-qadam jarayon

### 1. Foydalanuvchi "Google orqali kirish" tugmasini bosadi

**Frontend** - `app/pages/login.vue` yoki `register.vue`:

```vue
<UButton @click="handleGoogleLogin">
  Google orqali kirish
</UButton>
```

### 2. Auth store'dagi `loginWithGoogle()` metodi chaqiriladi

**Frontend** - `app/stores/auth.ts`:

```typescript
async loginWithGoogle() {
  const config = useRuntimeConfig();

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${config.public.googleClientId}&` +
    `redirect_uri=${config.public.googleRedirectUri}&` +
    `response_type=code&` +
    `scope=openid email profile&` +
    `access_type=offline&` +
    `prompt=consent`;

  window.location.href = authUrl;
}
```

**Parametrlar**:

- `client_id`: Google Cloud Console'dan olingan
- `redirect_uri`: `http://localhost:3000/auth/google/callback`
- `response_type`: `code` (authorization code flow)
- `scope`: `openid email profile` (qaysi ma'lumotlar kerakligi)
- `access_type`: `offline` (refresh token olish uchun)
- `prompt`: `consent` (har safar consent screen ko'rsatish)

### 3. Google OAuth sahifasi ochiladi

Foydalanuvchi Google hisobiga kirib, ilovaga ruxsat beradi.

### 4. Google callback URL ga authorization code bilan qaytadi

URL: `http://localhost:3000/auth/google/callback?code=4/0AfJoh...`

### 5. Callback sahifasi code'ni qayta ishlaydi

**Frontend** - `app/pages/auth/google/callback.vue`:

```typescript
const code = route.query.code as string;
await authStore.handleGoogleCallback(code);
navigateTo('/dashboard');
```

### 6. Backend'ga code yuboriladi

**Backend API** - `POST /api/auth/google/callback`:

```javascript
{
  code: '4/0AfJoh...';
}
```

### 7. Backend code'ni Google'ga yuborib token oladi

**Backend**:

```javascript
const { tokens } = await oauth2Client.getToken(code);

// Response:
{
  access_token: "ya29.a0AfH6...",
  refresh_token: "1/fW...",
  scope: "openid email profile",
  token_type: "Bearer",
  id_token: "eyJhbG..."
}
```

### 8. Access token bilan user info olinadi

**Backend**:

```javascript
const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
const { data } = await oauth2.userinfo.get();

// Response:
{
  sub: "1234567890",              // Google ID
  email: "user@gmail.com",
  email_verified: true,
  name: "John Doe",
  given_name: "John",
  family_name: "Doe",
  picture: "https://lh3.googleusercontent.com/...",
  locale: "en"
}
```

### 9. Database'da user yaratiladi yoki yangilanadi

**Backend**:

```javascript
let user = await db.users.findOne({ email: data.email });

if (!user) {
  // Yangi user yaratish
  user = await db.users.create({
    googleId: data.sub,
    email: data.email,
    emailVerified: data.email_verified,
    name: data.name,
    givenName: data.given_name,
    familyName: data.family_name,
    avatarUrl: data.picture,
    locale: data.locale,
    authProvider: 'google',
  });
}
```

### 10. JWT token generatsiya qilinadi

**Backend**:

```javascript
const token = jwt.sign(
  { userId: user.id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '7d' },
);

return { user, token };
```

### 11. Frontend token va user ma'lumotlarini saqlaydi

**Frontend** - `app/stores/auth.ts`:

```typescript
this.user = response.user;
this.token = response.token;
this.isAuthenticated = true;
```

### 12. Dashboard'ga yo'naltiriladi

```typescript
navigateTo('/dashboard');
```

## 🔐 Xavfsizlik

### Frontend (Client-side)

- ✅ Faqat `client_id` public
- ❌ `client_secret` hech qachon frontend'da bo'lmaydi
- ✅ Authorization code qisqa vaqt (10 daqiqa) amal qiladi
- ✅ Code faqat bir marta ishlatilishi mumkin

### Backend (Server-side)

- ✅ `client_secret` faqat backend'da
- ✅ JWT token httpOnly cookie'da saqlanadi
- ✅ Access token va refresh token xavfsiz saqlanadi
- ✅ Rate limiting va CSRF protection

## 🎯 Google'dan olinadigan ma'lumotlar

### Default scope: `openid email profile`

```json
{
  "sub": "1234567890", // ✅ Google ID (Unique)
  "email": "user@gmail.com", // ✅ Email
  "email_verified": true, // ✅ Email tasdiqlangan
  "name": "John Doe", // ✅ To'liq ism
  "given_name": "John", // ✅ Ism
  "family_name": "Doe", // ✅ Familiya
  "picture": "https://...", // ✅ Profil rasmi
  "locale": "en" // ✅ Til
}
```

### Qo'shimcha scope'lar (optional)

Agar kerak bo'lsa:

- `https://www.googleapis.com/auth/calendar.readonly` - Calendar
- `https://www.googleapis.com/auth/drive.readonly` - Google Drive
- `https://www.googleapis.com/auth/gmail.readonly` - Gmail

## 🔄 Token yangilash (Refresh)

Access token 1 soat amal qiladi. Refresh token bilan yangilash:

```javascript
const { credentials } = await oauth2Client.refreshAccessToken();
const newAccessToken = credentials.access_token;
```

## 🌐 Testing

### Development

- Callback URL: `http://localhost:3000/auth/google/callback`
- Test user: Istalgan Google hisobini ishlatishingiz mumkin

### Production

- Callback URL: `https://yourdomain.com/auth/google/callback`
- OAuth Consent Screen'ni "Publish" qiling

---

**Muvaffaqiyatlar! 🚀**
