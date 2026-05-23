import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, radii, spacing, typography } from '../constants/theme';

type PayButtonProps = {
  title?: string;
  onPress: () => void;
};

export function PayButton({ title = 'Pay', onPress }: PayButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.84} onPress={onPress} style={styles.button}>
      <Text style={styles.title}> {title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.sm,
    backgroundColor: colors.black,
    marginTop: spacing.lg,
  },
  title: {
    color: colors.background,
    fontSize: typography.heading,
    fontWeight: '800',
  },
});
