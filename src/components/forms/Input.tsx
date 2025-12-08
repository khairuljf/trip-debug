import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { ThemedText } from '../themed-text';
import { ThemedView } from '../themed-view';
import { useTheme } from '@/src/design-system/theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function Input({ label, error, style, ...props }: InputProps) {
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      {label && <ThemedText style={styles.label}>{label}</ThemedText>}
      <TextInput
        style={[
          styles.input,
          { backgroundColor: theme.colors.surface, color: theme.colors.text },
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor={theme.colors.textSecondary}
        {...props}
      />
      {error && <ThemedText style={styles.error}>{error}</ThemedText>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  inputError: {
    borderWidth: 1,
    borderColor: '#ff3b30',
  },
  error: {
    color: '#ff3b30',
    fontSize: 12,
    marginTop: 4,
  },
});


