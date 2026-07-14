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
  background: '#F8FAFC',
  foreground: '#111827',

  // Card
  card: '#FFFFFF',
  cardForeground: '#111827',

  // Popover
  popover: '#FFFFFF',
  popoverForeground: '#111827',

  // Primary (Safzan Blue)
  primary: '#2563EB',
  primaryForeground: '#FFFFFF',
  primaryLight: '#60A5FA',
  primaryDark: '#1D4ED8',

  // Secondary (Safzan Purple)
  secondary: '#7C3AED',
  secondaryForeground: '#FFFFFF',

  // Muted
  muted: '#F3F4F6',
  mutedForeground: '#6B7280',

  // Accent (Violet)
  accent: '#A855F7',
  accentForeground: '#FFFFFF',

  // Destructive (Error/Danger)
  destructive: '#EF4444',
  destructiveForeground: '#FFFFFF',

  // Success
  success: '#22C55E',
  successForeground: '#FFFFFF',

  // Warning
  warning: '#F59E0B',
  warningForeground: '#FFFFFF',

  // Info
  info: '#3B82F6',
  infoForeground: '#FFFFFF',

  // Border & Input
  border: '#E5E7EB',
  input: '#E5E7EB',
  inputBackground: '#FFFFFF',

  // Focus Ring
  ring: '#2563EB',

  // Sidebar
  sidebarBackground: '#F8FAFC',
  sidebarForeground: '#4B5563',
  sidebarPrimary: '#2563EB',
  sidebarPrimaryForeground: '#FFFFFF',
  sidebarAccent: '#E5E7EB',
  sidebarAccentForeground: '#111827',
  sidebarBorder: '#D1D5DB',
  sidebarRing: '#1D4ED8',

  // Charts
  chart1: '#2563EB',
  chart2: '#7C3AED',
  chart3: '#A855F7',
  chart4: '#60A5FA',
  chart5: '#FFFFFF',

  // Text variants
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  textDisabled: '#D1D5DB',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
} as const;

/**
 * Dark theme color palette
 */
export const darkColors = {
  // Core colors
  background: '#09090B',
  foreground: '#F4F4F5',

  // Card
  card: '#18181B',
  cardForeground: '#F4F4F5',

  // Popover
  popover: '#09090B',
  popoverForeground: '#F4F4F5',

  // Primary (Safzan Blue)
  primary: '#2563EB',
  primaryForeground: '#F4F4F5',
  primaryLight: '#60A5FA',
  primaryDark: '#1D4ED8',

  // Secondary (Safzan Purple)
  secondary: '#7C3AED',
  secondaryForeground: '#F4F4F5',

  // Muted
  muted: '#27272A',
  mutedForeground: '#A1A1AA',

  // Accent (Violet)
  accent: '#A855F7',
  accentForeground: '#F4F4F5',

  // Destructive (Error/Danger)
  destructive: '#EF4444',
  destructiveForeground: '#F4F4F5',

  // Success
  success: '#22C55E',
  successForeground: '#FFFFFF',

  // Warning
  warning: '#F59E0B',
  warningForeground: '#FFFFFF',

  // Info
  info: '#60A5FA',
  infoForeground: '#FFFFFF',

  // Border & Input
  border: '#27272A',
  input: '#27272A',
  inputBackground: '#18181B',

  // Focus Ring
  ring: '#2563EB',

  // Sidebar
  sidebarBackground: '#09090B',
  sidebarForeground: '#A1A1AA',
  sidebarPrimary: '#2563EB',
  sidebarPrimaryForeground: '#F4F4F5',
  sidebarAccent: '#27272A',
  sidebarAccentForeground: '#F4F4F5',
  sidebarBorder: '#3F3F46',
  sidebarRing: '#1D4ED8',

  // Charts
  chart1: '#2563EB',
  chart2: '#7C3AED',
  chart3: '#A855F7',
  chart4: '#60A5FA',
  chart5: '#18181B',

  // Text variants
  textPrimary: '#F4F4F5',
  textSecondary: '#A1A1AA',
  textTertiary: '#71717A',
  textDisabled: '#52525B',

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
