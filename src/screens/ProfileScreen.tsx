import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CoffeeIcon } from '../components/CoffeeIcon';
import { colors, radii, spacing, typography } from '../constants/theme';

export function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.avatar}>
        <CoffeeIcon name="user" size={32} color={colors.coffeeDark} />
      </View>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.description}>Delivery settings, saved payment methods and app preferences.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  avatar: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.md,
    backgroundColor: colors.surface,
    marginBottom: spacing.lg,
  },
  title: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '900',
  },
  description: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 21,
    marginTop: spacing.sm,
  },
});
