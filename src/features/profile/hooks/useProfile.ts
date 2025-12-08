import { useAuthStore } from '@/src/store/authStore';
import { useUserService } from '@/src/services/userService';

/**
 * Custom hook for profile management
 */
export function useProfile() {
  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);
  const { getProfile, updateProfile } = useUserService();

  return {
    user,
    getProfile,
    updateProfile: async (data: { name?: string; email?: string }) => {
      const updatedUser = await updateProfile(data);
      updateUser(updatedUser);
      return updatedUser;
    },
  };
}

