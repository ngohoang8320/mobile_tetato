import { colors, colorsDark } from '@/constants/theme';
import { useColorScheme } from 'nativewind';

export const useTheme = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return {
    isDark: colorScheme === 'dark',
    toggle: toggleColorScheme,
  };
};

export const useColors = () => {
  const { isDark } = useTheme();
  return isDark ? colorsDark : colors;
};
