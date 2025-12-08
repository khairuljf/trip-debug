import { StyleSheet } from 'react-native';
import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';
import { useAuthStore } from '@/src/store/authStore';

export function WelcomeCard() {
  const user = useAuthStore((state) => state.user);

  return (
    <ThemedView style={styles.card}>
      <ThemedText type="title">Welcome{user ? `, ${user.name}` : ''}!</ThemedText>
      <ThemedText style={styles.subtitle}>
        {user ? 'Ready to get started?' : 'Please sign in to continue'}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    marginBottom: 16,
  },
  subtitle: {
    marginTop: 8,
    opacity: 0.7,
  },
});


