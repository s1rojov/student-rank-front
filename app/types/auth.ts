export interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  accessToken?: string;
  refreshToken?: string;
}
