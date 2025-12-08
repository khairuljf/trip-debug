import { apiClient } from './apiClient';
import type { User } from '../types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

/**
 * Authentication service
 * Handles login, register, and logout operations
 */
export class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // Demo implementation - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            id: '1',
            name: credentials.email.split('@')[0],
            email: credentials.email,
          },
          token: 'demo-token-123',
        });
      }, 1000);
    });

    // Real implementation would be:
    // return apiClient.post<AuthResponse>('/auth/login', credentials);
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    // Demo implementation - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            id: '1',
            name: data.name,
            email: data.email,
          },
          token: 'demo-token-123',
        });
      }, 1000);
    });

    // Real implementation would be:
    // return apiClient.post<AuthResponse>('/auth/register', data);
  }

  async logout(): Promise<void> {
    // Demo implementation
    return Promise.resolve();

    // Real implementation would be:
    // return apiClient.post('/auth/logout');
  }

  async forgotPassword(email: string): Promise<void> {
    // Demo implementation
    return Promise.resolve();

    // Real implementation would be:
    // return apiClient.post('/auth/forgot-password', { email });
  }
}

export const authService = new AuthService();


