import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';
import { CoffeeIcon } from './CoffeeIcon';

type CheckoutHeaderProps = {
  onBack: () => void;
};

export function CheckoutHeader({ onBack }: CheckoutHeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.75} onPress={onBack} style={styles.back}>
        <CoffeeIcon name="chevron-left" size={28} color={colors.text} />
      </TouchableOpacity>
      <Text style={styles.title}>Checkout</Text>
      <View style={styles.back} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  back: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '900',
    marginRight: spacing.sm,
  },
});
