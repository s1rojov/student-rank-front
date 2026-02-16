# Google OAuth Xatosini Hal Qilish

## ❌ Xato: "Error 401: invalid_client"

Bu xato Google OAuth credentials to'g'ri sozlanmaganini bildiradi.

## ✅ Hal Qilish Qadamlari

### 1-Qadam: Google Cloud Console'da OAuth Credentials Yaratish

#### A. Google Cloud Console'ga Kiring

🔗 [https://console.cloud.google.com/](https://console.cloud.google.com/)

#### B. Loyiha Yarating (agar yo'q bo'lsa)

1. Yuqori chap burchakda loyiha tanlash menyusini oching
2. "New Project" tugmasini bosing
3. Loyiha nomini kiriting: **StudentRank**
4. "Create" tugmasini bosing

#### C. OAuth Consent Screen Sozlang

1. Chap menuda **"APIs & Services"** → **"OAuth consent screen"** ga o'ting
2. **"External"** ni tanlang va **"Create"** bosing
3. Quyidagi maydonlarni to'ldiring:
   - **App name**: `StudentRank`
   - **User support email**: O'z email manzilingizni kiriting
   - **Developer contact information**: O'z emailingiz
4. **"Save and Continue"** bosing
5. **Scopes** sahifasida:
   - **"Add or Remove Scopes"** tugmasini bosing
   - Quyidagi scope'larni tanlang:
     - `openid`
     - `.../auth/userinfo.email`
     - `.../auth/userinfo.profile`
   - **"Update"** bosing
6. **"Save and Continue"** bosing
7. **Test users** qo'shing (development uchun):
   - **"Add Users"** tugmasini bosing
   - `sirojovdilshod4202@gmail.com` qo'shing
   - **"Save and Continue"** bosing
8. **"Back to Dashboard"** bosing

#### D. OAuth Client ID Yaratish

1. Chap menuda **"APIs & Services"** → **"Credentials"** ga o'ting
2. Yuqorida **"+ CREATE CREDENTIALS"** tugmasini bosing
3. **"OAuth client ID"** ni tanlang
4. **Application type**: **"Web application"** ni tanlang
5. **Name**: `StudentRank Web Client` kiriting
6. **Authorized JavaScript origins** ga qo'shing:
   ```
   http://localhost:3000
   http://localhost:4000
   ```
7. **Authorized redirect URIs** ga qo'shing:
   ```
   http://localhost:4000/auth/google/callback
   http://localhost:3000/auth/google/callback
   ```
8. **"Create"** tugmasini bosing
9. **Ko'rsatiladigan oynadan Client ID va Client Secret nusxalang!** ⚠️

---

### 2-Qadam: Backend .env Fayliga Credentials Qo'shish

Backend loyihasida `.env` fayl yarating yoki mavjud faylni o'zgartiring:

```env
# Google OAuth Configuration
GOOGLE_CLIENT_ID=sizning-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=sizning-client-secret

# Redirect URL (Backend)
GOOGLE_REDIRECT_URI=http://localhost:4000/auth/google/callback

# JWT va boshqa sozlamalar
JWT_SECRET=your-super-secret-jwt-key-change-this
PORT=4000
```

⚠️ **MUHIM**:

- `GOOGLE_CLIENT_ID` - Google Console'dan olgan Client ID
- `GOOGLE_CLIENT_SECRET` - Google Console'dan olgan Client Secret
- Bu ma'lumotlarni **HECH KIMGA BERMANG** va GitHub'ga commit qilmang!

---

### 3-Qadam: Frontend .env Fayliga API URL Qo'shish

Frontend loyihasida (agar kerak bo'lsa):

```env
# API Configuration
API_BASE_URL=http://localhost:4000

# Google OAuth (ixtiyoriy, backend ishlatadi)
GOOGLE_CLIENT_ID=sizning-client-id.apps.googleusercontent.com
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/callback
```

---

### 4-Qadam: Backend Serverni Qayta Ishga Tushirish

```bash
# Backend loyihasida
npm run dev
# yoki
yarn dev
```

Backend `http://localhost:4000`da ishga tushishi kerak.

---

### 5-Qadam: Test Qilish

1. Frontend'ni ishga tushiring: `npm run dev` (frontend papkasida)
2. Brauzerda `http://localhost:3000/login` ga o'ting
3. **"Google orqali kirish"** tugmasini bosing
4. Google login sahifasi ochilishi kerak
5. `sirojovdilshod4202@gmail.com` bilan kirish
6. Dashboard'ga yo'naltirilasiz

---

## 🔍 Debugging

### Xato: "The OAuth client was not found"

✅ **Hal qilish**:

- Backend `.env` faylidagi `GOOGLE_CLIENT_ID` to'g'riligini tekshiring
- Google Cloud Console'da credentials yaratilganligini tasdiqlang
- Backend serverni qayta ishga tushiring (`Ctrl+C` va `npm run dev`)

### Xato: "Redirect URI mismatch"

✅ **Hal qilish**:

- Google Cloud Console → Credentials → OAuth Client ID
- "Authorized redirect URIs" da `http://localhost:4000/auth/google/callback` borligini tekshiring
- Backend'dagi `GOOGLE_REDIRECT_URI` to'g'riligini tekshiring

### Xato: "Access blocked: This app's request is invalid"

✅ **Hal qilish**:

- OAuth Consent Screen to'liq sozlanganligini tekshiring
- Test users qo'shilganligini tasdiqlang
- App publish qilish kerak bo'lishi mumkin (Testing → Publishing)

### Backend Ishlamayapti

✅ **Tekshirish**:

```bash
# Backend papkasida
curl http://localhost:4000/auth/google
```

Agar Google'ga yo'naltirmasa, backend endpoint'lari to'g'ri sozlanmagan.

---

## 📋 Tekshirish Ro'yxati

- [ ] Google Cloud Console'da loyiha yaratdingizmi?
- [ ] OAuth Consent Screen to'ldirdingizmi?
- [ ] OAuth Client ID yaratdingizmi?
- [ ] Redirect URI'larni to'g'ri qo'shdingizmi?
- [ ] Backend `.env` fayliga credentials qo'shdingizmi?
- [ ] Backend serverni qayta ishga tushirdingizmi?
- [ ] Test user sifatida emailingizni qo'shdingizmi?
- [ ] `http://localhost:4000` ishlab turibmi?

---

## 🎯 Oxirgi Test

Terminal'da (backend papkasida):

```bash
# Backend teskshirish
curl http://localhost:4000/auth/google
```

Bu sizni Google login sahifasiga yo'naltirishi kerak.

---

## 💡 Production Uchun

Production'da deploy qilganda:

1. Google Cloud Console'da yangi redirect URI qo'shing:

   ```
   https://sizning-domen.uz/auth/google/callback
   ```

2. `.env` faylingizni yangilang:

   ```env
   API_BASE_URL=https://api.sizning-domen.uz
   GOOGLE_REDIRECT_URI=https://api.sizning-domen.uz/auth/google/callback
   ```

3. OAuth Consent Screen'ni **"Publish to Production"** qiling

---

## 🆘 Yordam Kerakmi?

Agar muammo hal bo'lmasa:

1. Backend terminal loglarini ko'ring
2. Browser DevTools Console'ni tekshiring
3. Google Cloud Console'da credentials to'g'riligini qayta tekshiring
