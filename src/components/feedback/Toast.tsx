import { StyleSheet } from 'react-native';
import { ThemedText } from '../themed-text';
import { ThemedView } from '../themed-view';
import { useTheme } from '@/src/design-system/theme';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
}

export function Toast({ message, type = 'info' }: ToastProps) {
  const theme = useTheme();

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return theme.colors.success;
      case 'error':
        return theme.colors.error;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.info;
    }
  };

  return (
    <ThemedView style={[styles.toast, { backgroundColor: getBackgroundColor() }]}>
      <ThemedText style={styles.text}>{message}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  toast: {
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});

