import ApiService from './api';
import type { User } from '~/types/auth';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export const AuthService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await ApiService.post('auth/login', credentials);
    return response.data;
  },

  async register(data: RegisterData): Promise<LoginResponse> {
    const response = await ApiService.post('auth/register', data);
    return response.data;
  },

  async logout(): Promise<void> {
    await ApiService.post('auth/logout');
  },

  async refreshToken(refreshToken: string): Promise<{ accessToken: string }> {
    const response = await ApiService.post('auth/refresh', { refreshToken });
    return response.data;
  },

  async getCurrentUser(): Promise<User> {
    const response = await ApiService.get('auth/me');
    return response.data;
  },
};
