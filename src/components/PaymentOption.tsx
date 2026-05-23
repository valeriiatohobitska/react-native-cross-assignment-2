import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, radii, spacing, typography } from '../constants/theme';
import { CoffeeIcon } from './CoffeeIcon';

type PaymentOptionProps = {
  title: string;
  selected?: boolean;
  checkedLabel?: string;
  onPress?: () => void;
};

export function PaymentOption({
  title,
  selected = false,
  checkedLabel,
  onPress,
}: PaymentOptionProps) {
  return (
    <TouchableOpacity activeOpacity={0.78} onPress={onPress} style={styles.card}>
      <View style={styles.titleRow}>
        <View style={[styles.radio, selected && styles.selectedRadio]}>
          {selected ? <View style={styles.dot} /> : null}
          </View>
          <Text style={styles.title}>{title}</Text>
      </View>
      {checkedLabel ? (
        <View style={styles.checkRow}>
          <View style={styles.checkbox}>
            <CoffeeIcon name="check" size={12} color={colors.background} />
          </View>
          <Text style={styles.checkLabel}>{checkedLabel}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 48,
    justifyContent: 'center',
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    backgroundColor: colors.background,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colors.softMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadio: {
    borderColor: colors.coffee,
    backgroundColor: colors.coffee,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.muted,
    fontSize: typography.caption,
    fontWeight: '800',
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingLeft: 26,
    paddingTop: spacing.xl,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.coffee,
  },
  checkLabel: {
    flex: 1,
    color: colors.muted,
    fontSize: typography.caption,
    lineHeight: 17,
  },
});
