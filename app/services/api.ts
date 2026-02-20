// const env: any = (import.meta as any).env;
const BASE_URL = 'http://localhost:4000/';

const pendingForms = new WeakMap();

const ApiService = {
  // Yordamchi wrapper (Fetch mantiqini osonlashtirish uchun)
  async request(resource: string, options: RequestInit = {}, data?: any) {
    // 1. AbortController mantiqi (Sizning kodingizdagi kabi)
    if (data && pendingForms.has(data)) {
      pendingForms.get(data).abort();
    }
    const controller = new AbortController();
    if (data) pendingForms.set(data, controller);

    const url = `${BASE_URL}${resource}`;

    // Authorization header qo'shish
    const token = useCookie('access_token');
    const headers: HeadersInit = {
      ...options.headers,
    };

    if (token.value) {
      headers['Authorization'] = `Bearer ${token.value}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        signal: controller.signal,
      });

      // 2. 401 yoki 403 xatolarni tekshirish (Backend qaytargan holat)
      if (!response.ok) {
        if (response.status === 401) {
          // Token muddati o'tgan bo'lsa login sahifasiga yo'naltirish
          console.error('Auth xatosi: 401');
          const refreshToken = useCookie('refresh_token');
          if (refreshToken.value) {
            // Token yangilashni sinab ko'rish
            // Bu yerda refresh token logikasi bo'lishi kerak
          } else {
            // Login sahifasiga yo'naltirish
            navigateTo('/auth/login');
          }
        }
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Xatolik: ${response.status}`);
      }

      // 3. JSON ma'lumotni qaytarish
      const result = await response.json();
      if (data) pendingForms.delete(data);
      return { data: result }; // Axios formatiga moslash uchun
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('So‘rov bekor qilindi');
      }
      throw error;
    }
  },

  get(resource: string) {
    return this.request(resource, { method: 'GET' });
  },

  post(resource: string, data?: any, config: RequestInit = {}) {
    return this.request(
      resource,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...config.headers },
        body: JSON.stringify(data || {}),
        ...config,
      },
      data,
    );
  },

  formData(resource: string, data: FormData) {
    return this.request(resource, {
      method: 'POST',
      body: data, // FormData yuborilganda 'Content-Type' ni o'zi avtomat belgilaydi
    });
  },

  put(resource: string, data: object) {
    return this.request(resource, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  },

  delete(resource: string) {
    return this.request(resource, { method: 'DELETE' });
  },

  async print(resource: string) {
    const url = `${BASE_URL}${resource}`;
    const response = await fetch(url);
    const blob = await response.blob();
    return { data: blob };
  },
};

export default ApiService;
