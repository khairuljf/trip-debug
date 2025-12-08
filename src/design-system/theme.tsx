import { useColorScheme } from 'react-native';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

/**
 * Theme hook that provides access to design tokens
 */
export function useTheme() {
  const colorScheme = useColorScheme() || 'light';

  return {
    colors: colors[colorScheme],
    spacing,
    typography,
    colorScheme,
  };
}

export type Theme = ReturnType<typeof useTheme>;


