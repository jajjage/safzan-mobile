/**
 * Safzan Colors for Expo/React Navigation
 * 
 * This file provides colors in the format expected by Expo and React Navigation.
 * The colors are derived from the Safzan color palette.
 */

import { darkColors, lightColors } from './palette';

const tintColorLight = lightColors.primary; // #275430 - Safzan Green
const tintColorDark = lightColors.primary;  // #275430 - Same in dark mode

export default {
  light: {
    text: lightColors.foreground,           // #0C0A09
    background: lightColors.background,      // #FFFFFF
    tint: tintColorLight,                    // #275430
    tabIconDefault: lightColors.mutedForeground, // #7A726C
    tabIconSelected: tintColorLight,
    
    // Additional navigation colors
    card: lightColors.card,
    border: lightColors.border,
    notification: lightColors.destructive,
    primary: lightColors.primary,
  },
  dark: {
    text: darkColors.foreground,             // #C6BAB3
    background: darkColors.background,        // #262626
    tint: tintColorDark,                      // #275430
    tabIconDefault: darkColors.mutedForeground, // #C6BAB3
    tabIconSelected: tintColorDark,
    
    // Additional navigation colors
    card: darkColors.card,
    border: darkColors.border,
    notification: darkColors.destructive,
    primary: darkColors.primary,
  },
};
