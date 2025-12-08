import { apiClient } from './apiClient';
import type { User } from '../types';

export interface UpdateProfileData {
  name?: string;
  email?: string;
}

/**
 * User service
 * Handles user-related operations
 */
export class UserService {
  async getProfile(): Promise<User> {
    // Demo implementation - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '1',
          name: 'Demo User',
          email: 'demo@example.com',
        });
      }, 500);
    });

    // Real implementation would be:
    // return apiClient.get<User>('/user/profile');
  }

  async updateProfile(data: UpdateProfileData): Promise<User> {
    // Demo implementation - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '1',
          name: data.name || 'Demo User',
          email: data.email || 'demo@example.com',
        });
      }, 500);
    });

    // Real implementation would be:
    // return apiClient.put<User>('/user/profile', data);
  }
}

export const userService = new UserService();

/**
 * Hook for using user service
 */
export function useUserService() {
  return {
    getProfile: userService.getProfile.bind(userService),
    updateProfile: userService.updateProfile.bind(userService),
  };
}


