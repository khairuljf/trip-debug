import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';
import { IconSymbol } from '@/src/components/ui/icon-symbol';
import { useAuthStore } from '@/src/store/authStore';

export default function ProfileScreen() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.replace('/(auth)/login');
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedView style={styles.avatar}>
          <IconSymbol name="person.fill" size={48} color="#fff" />
        </ThemedView>
        <ThemedText type="title" style={styles.name}>
          {user?.name || 'Guest User'}
        </ThemedText>
        <ThemedText style={styles.email}>{user?.email || 'guest@example.com'}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <Link href="/(modals)/edit-profile" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <IconSymbol name="pencil" size={20} color="#0a7ea4" />
            <ThemedText style={styles.menuText}>Edit Profile</ThemedText>
            <IconSymbol name="chevron.right" size={16} color="#999" />
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol name="gear" size={20} color="#0a7ea4" />
          <ThemedText style={styles.menuText}>Settings</ThemedText>
          <IconSymbol name="chevron.right" size={16} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol name="questionmark.circle" size={20} color="#0a7ea4" />
          <ThemedText style={styles.menuText}>Help & Support</ThemedText>
          <IconSymbol name="chevron.right" size={16} color="#999" />
        </TouchableOpacity>
      </ThemedView>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <ThemedText style={styles.logoutText}>Logout</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#0a7ea4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  name: {
    marginBottom: 4,
  },
  email: {
    opacity: 0.7,
  },
  section: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 12,
  },
  menuText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  logoutButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#ff3b30',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

