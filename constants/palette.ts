/**
 * Safzan App Color Scheme
 *
 * This file contains the complete color palette for the Safzan app,
 * extracted from the web application for consistency across platforms.
 *
 * @module constants/palette
 */

/**
 * Light theme color palette
 */
export const lightColors = {
  // Core colors
  background: '#FFFFFF',
  foreground: '#0C0A09',

  // Card
  card: '#FFFFFF',
  cardForeground: '#0C0A09',

  // Popover
  popover: '#FFFFFF',
  popoverForeground: '#0C0A09',

  // Primary (Safzan Green)
  primary: '#275430',
  primaryForeground: '#FAFAF9',
  primaryLight: '#5A8A65',
  primaryDark: '#1B3721',

  // Secondary
  secondary: '#F5F5F4',
  secondaryForeground: '#7A726C',

  // Muted
  muted: '#F5F5F4',
  mutedForeground: '#7A726C',

  // Accent
  accent: '#F5F5F4',
  accentForeground: '#7A726C',

  // Destructive (Error/Danger)
  destructive: '#F90606',
  destructiveForeground: '#FAFAF9',

  // Success (Additional for mobile)
  success: '#2A9D8F',
  successForeground: '#FFFFFF',

  // Warning (Additional for mobile)
  warning: '#F4A261',
  warningForeground: '#1F2A2D',

  // Info (Additional for mobile)
  info: '#3B82F6',
  infoForeground: '#FFFFFF',

  // Border & Input
  border: '#E7E5E4',
  input: '#E7E5E4',
  inputBackground: '#FFFFFF',

  // Focus Ring
  ring: '#CDC713',

  // Sidebar
  sidebarBackground: '#F7F7F7',
  sidebarForeground: '#6C5A51',
  sidebarPrimary: '#75710B',
  sidebarPrimaryForeground: '#FAFAF9',
  sidebarAccent: '#C2C2BC',
  sidebarAccentForeground: '#000000',
  sidebarBorder: '#E0DDDC',
  sidebarRing: '#BFBA12',

  // Charts
  chart1: '#CDC713',
  chart2: '#F5F5F4',
  chart3: '#F5F5F4',
  chart4: '#F5F5F4',
  chart5: '#FFFFFF',

  // Text variants
  textPrimary: '#0C0A09',
  textSecondary: '#7A726C',
  textTertiary: '#A8A29E',
  textDisabled: '#D6D3D1',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
} as const;

/**
 * Dark theme color palette
 */
export const darkColors = {
  // Core colors
  background: '#262626',
  foreground: '#C6BAB3',

  // Card
  card: '#404040',
  cardForeground: '#C6BAB3',

  // Popover
  popover: '#262626',
  popoverForeground: '#C6BAB3',

  // Primary (Safzan Green)
  primary: '#275430',
  primaryForeground: '#F8FAFC',
  primaryLight: '#5A8A65',
  primaryDark: '#1B3721',

  // Secondary
  secondary: '#53534B',
  secondaryForeground: '#F3F2F1',

  // Muted
  muted: '#46463F',
  mutedForeground: '#F3F2F1',

  // Accent
  accent: '#53534B',
  accentForeground: '#F3F2F1',

  // Destructive (Error/Danger)
  destructive: '#630303',
  destructiveForeground: '#F8FAFC',

  // Success
  success: '#2A9D8F',
  successForeground: '#FFFFFF',

  // Warning
  warning: '#F4A261',
  warningForeground: '#1F2A2D',

  // Info
  info: '#60A5FA',
  infoForeground: '#FFFFFF',

  // Border & Input
  border: '#6C6460',
  input: '#6C6460',
  inputBackground: '#404040',

  // Focus Ring
  ring: '#CDC713',

  // Sidebar
  sidebarBackground: '#121212',
  sidebarForeground: '#9F8A7F',
  sidebarPrimary: '#75710B',
  sidebarPrimaryForeground: '#F8FAFC',
  sidebarAccent: '#3E3E38',
  sidebarAccentForeground: '#F3F2F1',
  sidebarBorder: '#56504D',
  sidebarRing: '#A8A310',

  // Charts
  chart1: '#413F06',
  chart2: '#ADADA4',
  chart3: '#ADADA4',
  chart4: '#ADADA4',
  chart5: '#262626',

  // Text variants
  textPrimary: '#C6BAB3',
  textSecondary: '#F3F2F1',
  textTertiary: '#A8A29E',
  textDisabled: '#78716C',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayLight: 'rgba(0, 0, 0, 0.5)',
} as const;

/**
 * Color type definitions
 */
export type LightColorPalette = typeof lightColors;
export type DarkColorPalette = typeof darkColors;
export type ColorPalette = LightColorPalette | DarkColorPalette;

/**
 * Base color keys (useful for type-safe color access)
 */
export type ColorKey = keyof LightColorPalette;

/**
 * Theme type definition
 */
export type ThemeType = 'light' | 'dark';

/**
 * Get colors based on theme
 */
export const getColors = (theme: ThemeType): ColorPalette => {
  return theme === 'dark' ? darkColors : lightColors;
};

/**
 * Design tokens for spacing, radius, etc.
 */
export const designTokens = {
  // Border radius (matching web app)
  radius: {
    sm: 11,
    md: 13,
    lg: 15,
    xl: 19,
    full: 9999,
  },

  // Spacing scale
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },

  // Font weights
  fontWeight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },

  // Shadows (for elevation)
  shadow: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },
} as const;

/**
 * Default export for convenience
 */
export default {
  light: lightColors,
  dark: darkColors,
  tokens: designTokens,
};
