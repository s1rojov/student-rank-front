# Ma'lumotlar bazasi sxemasi (Database Schema)

## Google OAuth Setup

### 1. Google Cloud Console da loyiha yaratish

1. [Google Cloud Console](https://console.cloud.google.com/) ga kiring
2. Yangi loyiha yarating
3. "APIs & Services" > "OAuth consent screen" ga o'ting
4. "External" ni tanlang va ma'lumotlarni to'ldiring
5. "Credentials" bo'limiga o'ting
6. "Create Credentials" > "OAuth 2.0 Client ID" ni tanlang
7. Application type: "Web application"
8. Authorized redirect URIs ga qo'shing:
   - `http://localhost:3000/auth/google/callback` (development)
   - `https://yourdomain.com/auth/google/callback` (production)

### 2. Google'dan olinadigan ma'lumotlar

Google OAuth orqali quyidagi ma'lumotlarni olishingiz mumkin:

```json
{
  "sub": "1234567890", // Google ID (unique identifier)
  "email": "user@gmail.com", // Email manzil
  "email_verified": true, // Email tasdiqlanganligi
  "name": "John Doe", // To'liq ism
  "given_name": "John", // Ism
  "family_name": "Doe", // Familiya
  "picture": "https://lh3.googleusercontent.com/...", // Profil rasmi URL
  "locale": "en" // Til sozlamalari
}
```

## Users Table Schema

### PostgreSQL

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  google_id VARCHAR(255) UNIQUE,              -- Google ID (Google orqali kirgan foydalanuvchilar uchun)
  email VARCHAR(255) UNIQUE NOT NULL,         -- Email (unique va required)
  email_verified BOOLEAN DEFAULT FALSE,        -- Email tasdiqlanganmi
  name VARCHAR(255) NOT NULL,                 -- To'liq ism
  given_name VARCHAR(100),                    -- Ism
  family_name VARCHAR(100),                   -- Familiya
  avatar_url TEXT,                            -- Profil rasmi URL
  phone VARCHAR(20),                          -- Telefon raqam (optional)
  password_hash VARCHAR(255),                 -- Parol hash (faqat email/password orqali ro'yxatdan o'tganlar uchun)
  locale VARCHAR(10) DEFAULT 'uz',            -- Til sozlamalari
  auth_provider VARCHAR(20) DEFAULT 'email',  -- 'google' yoki 'email'
  role VARCHAR(20) DEFAULT 'student',         -- 'student', 'admin', 'teacher'
  is_active BOOLEAN DEFAULT TRUE,             -- Akkaunt faolmi
  last_login_at TIMESTAMP,                    -- Oxirgi kirgan vaqti
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Indexlar
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_google_id ON users(google_id);
CREATE INDEX idx_users_auth_provider ON users(auth_provider);
```

### MongoDB

```javascript
{
  _id: ObjectId,
  googleId: String,              // Google ID (Google orqali kirgan foydalanuvchilar uchun)
  email: String,                 // Email (unique va required)
  emailVerified: Boolean,        // Email tasdiqlanganmi
  name: String,                  // To'liq ism
  givenName: String,             // Ism
  familyName: String,            // Familiya
  avatarUrl: String,             // Profil rasmi URL
  phone: String,                 // Telefon raqam (optional)
  passwordHash: String,          // Parol hash (faqat email/password orqali ro'yxatdan o'tganlar uchun)
  locale: String,                // Til sozlamalari
  authProvider: String,          // 'google' yoki 'email'
  role: String,                  // 'student', 'admin', 'teacher'
  isActive: Boolean,             // Akkaunt faolmi
  lastLoginAt: Date,             // Oxirgi kirgan vaqti
  createdAt: Date,
  updatedAt: Date
}

// Indexlar
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ googleId: 1 }, { unique: true, sparse: true });
```

## Environment Variables (.env)

```env
# Google OAuth
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/google/callback

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/studentrank
# yoki
MONGODB_URI=mongodb://localhost:27017/studentrank

# JWT
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=7d

# Application
APP_URL=http://localhost:3000
```

## Backend API Endpoints (Kerakli endpointlar)

### Authentication

```typescript
// POST /api/auth/google
// Google OAuth login boshlash
{
  // Returns: Google OAuth URL
  url: "https://accounts.google.com/o/oauth2/v2/auth?..."
}

// POST /api/auth/google/callback
// Google OAuth callback
{
  code: "authorization_code"
}
// Returns: { user, token }

// POST /api/auth/login
// Email/password login
{
  email: "user@email.com",
  password: "password123"
}
// Returns: { user, token }

// POST /api/auth/register
// Email/password register
{
  name: "John Doe",
  email: "user@email.com",
  phone: "+998901234567",
  password: "password123"
}
// Returns: { success: true }

// GET /api/auth/me
// Hozirgi foydalanuvchi ma'lumotlarini olish
// Headers: Authorization: Bearer <token>
// Returns: { user }

// POST /api/auth/logout
// Tizimdan chiqish
// Headers: Authorization: Bearer <token>
// Returns: { success: true }
```

## Backend Implementation Example (Node.js)

### Google OAuth Flow

```javascript
// server/api/auth/google.post.ts
export default defineEventHandler((event) => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;
  const scope = 'openid email profile';

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${clientId}&` +
    `redirect_uri=${redirectUri}&` +
    `response_type=code&` +
    `scope=${scope}&` +
    `access_type=offline&` +
    `prompt=consent`;

  return { url: authUrl };
});

// server/api/auth/google/callback.post.ts
import { google } from 'googleapis';

export default defineEventHandler(async (event) => {
  const { code } = await readBody(event);

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  // Exchange code for tokens
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  // Get user info
  const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
  const { data } = await oauth2.userinfo.get();

  // Check if user exists
  let user = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (!user) {
    // Create new user
    user = await prisma.user.create({
      data: {
        googleId: data.id,
        email: data.email,
        emailVerified: data.verified_email,
        name: data.name,
        givenName: data.given_name,
        familyName: data.family_name,
        avatarUrl: data.picture,
        locale: data.locale,
        authProvider: 'google',
      }
    });
  } else if (!user.googleId) {
    // Link Google account to existing user
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        googleId: data.id,
        emailVerified: data.verified_email,
        avatarUrl: data.picture,
      }
    });
  }

  // Update last login
  await prisma.user.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() }
  });

  // Generate JWT token
  const token = generateJWT(user);

  return { user, token };
});
```

## Qo'shimcha ma'lumotlar

### Google OAuth Scopes

Agar qo'shimcha ma'lumotlar kerak bo'lsa, quyidagi scope'larni qo'shishingiz mumkin:

- `https://www.googleapis.com/auth/userinfo.profile` - Profil ma'lumotlari
- `https://www.googleapis.com/auth/userinfo.email` - Email
- `https://www.googleapis.com/auth/calendar.readonly` - Calendar o'qish
- `https://www.googleapis.com/auth/drive.readonly` - Drive o'qish

### Security Best Practices

1. JWT tokenlarni xavfsiz saqlang (httpOnly cookies)
2. Access token va refresh token ishlatilsin
3. CSRF tokenlardan foydalaning
4. Rate limiting qo'shing
5. Email verifikatsiya jarayonini qo'shing (email/password uchun)
6. Password hash uchun bcrypt yoki argon2 ishlatilsin
