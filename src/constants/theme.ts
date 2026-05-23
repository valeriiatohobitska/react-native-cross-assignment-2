import { Platform } from 'react-native';

export const colors = {
  background: '#FFFFFF',
  surface: '#F7F8FC',
  card: '#F5F6FA',
  text: '#24252B',
  muted: '#7C808A',
  softMuted: '#C8CDD6',
  border: '#E0E3EA',
  coffee: '#B48567',
  coffeeDark: '#8E6045',
  black: '#000000',
  successOverlay: 'rgba(18, 19, 24, 0.78)',
  appleBlue: '#007AFF',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
};

export const typography = {
  title: 22,
  heading: 18,
  body: 14,
  caption: 12,
  tiny: 10,
};

export const layout = {
  phoneMaxWidth: 430,
  bottomTabsHeight: 84,
  controlHeight: 44,
};

export const shadows = Platform.select({
  ios: {
    shadowColor: '#2D2E34',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
  },
  android: {
    elevation: 3,
  },
  default: {},
});
