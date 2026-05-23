import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, layout, radii, spacing, typography } from '../constants/theme';
import { CoffeeIcon } from './CoffeeIcon';

type ToolbarButtonProps = {
  iconName: 'arrow-up-down' | 'list-filter';
  label: string;
  badge?: string;
};

export function ToolbarButton({ iconName, label, badge }: ToolbarButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.75} style={styles.button}>
      <CoffeeIcon name={iconName} size={14} color={colors.muted} />
      <Text style={styles.label}>{label}</Text>
      {badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: layout.controlHeight - 8,
    minWidth: 88,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.sm,
    backgroundColor: colors.background,
  },
  label: {
    color: colors.text,
    fontSize: typography.caption,
    fontWeight: '500',
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.coffee,
  },
  badgeText: {
    color: colors.background,
    fontSize: typography.tiny,
    fontWeight: '800',
  },
});
