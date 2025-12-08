import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/src/components/themed-text';
import { ThemedView } from '@/src/components/themed-view';
import { IconSymbol } from '@/src/components/ui/icon-symbol';

const notifications = [
  { id: '1', title: 'New message', message: 'You have a new message from John', time: '2m ago' },
  { id: '2', title: 'Reminder', message: 'Don\'t forget your meeting at 3 PM', time: '1h ago' },
  { id: '3', title: 'Update', message: 'Your profile has been updated', time: '2h ago' },
];

export default function NotificationsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Notifications
      </ThemedText>
      <ScrollView style={styles.list}>
        {notifications.map((notification) => (
          <ThemedView key={notification.id} style={styles.notificationItem}>
            <ThemedView style={styles.iconContainer}>
              <IconSymbol name="bell.fill" size={24} color="#0a7ea4" />
            </ThemedView>
            <ThemedView style={styles.content}>
              <ThemedText type="defaultSemiBold">{notification.title}</ThemedText>
              <ThemedText style={styles.message}>{notification.message}</ThemedText>
              <ThemedText style={styles.time}>{notification.time}</ThemedText>
            </ThemedView>
          </ThemedView>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  list: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  iconContainer: {
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  message: {
    marginTop: 4,
    opacity: 0.7,
  },
  time: {
    marginTop: 4,
    fontSize: 12,
    opacity: 0.5,
  },
});


