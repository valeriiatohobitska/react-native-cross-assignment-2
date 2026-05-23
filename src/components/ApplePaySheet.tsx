import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';
import { CoffeeIcon } from './CoffeeIcon';

type ApplePaySheetProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

export function ApplePaySheet({ onCancel, onConfirm }: ApplePaySheetProps) {
  return (
    <View style={styles.sheet}>
      <View style={styles.titleRow}>
        <Text style={styles.appleTitle}>Pay</Text>
        <TouchableOpacity activeOpacity={0.75} onPress={onCancel}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.82} onPress={onConfirm}>
        <View style={styles.row}>
          <View style={styles.cardLogo}>
            <View style={[styles.circle, styles.red]} />
            <View style={[styles.circle, styles.orange]} />
          </View>
          <View style={styles.rowCopy}>
            <Text style={styles.rowTitle}>MASTERCARD PLATINUM</Text>
            <Text style={styles.rowTitle}>(•••• 2505)</Text>
          </View>
          <CoffeeIcon name="chevron-right" size={24} color={colors.appleBlue} />
        </View>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.label}>ADDRESS</Text>
        <Text style={styles.address}>AVENIDA CAXANGÁ{'\n'}RECIFE{'\n'}PE 44886-232{'\n'}BRASIL</Text>
        <CoffeeIcon name="chevron-right" size={24} color={colors.appleBlue} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>CONTACT</Text>
        <Text style={styles.address}>GUIFRANCA@ICLOUD.COM{'\n'}(81) 92503-1996</Text>
        <CoffeeIcon name="chevron-right" size={24} color={colors.appleBlue} />
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>SUBTOTAL{'\n'}SHIPPING</Text>
        <Text style={styles.amount}>$ 6,00{'\n'}$ 0,00</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={onConfirm} style={styles.payRow}>
        <Text style={styles.totalLabel}>PAY MOTOGUI</Text>
        <Text style={styles.payAmount}>$ 6,00</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={onConfirm} style={styles.reader}>
        <ReaderIcon />
        <Text style={styles.readerText}>Hold Near Reader</Text>
      </TouchableOpacity>
    </View>
  );
}

function ReaderIcon() {
  return (
    <View style={styles.readerIcon}>
      <View style={[styles.readerDot, styles.readerDotLeft]} />
      <View style={[styles.readerDot, styles.readerDotRight]} />
      <View style={styles.readerSmileMask}>
        <View style={styles.readerSmile} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 20,
    elevation: 20,
    backgroundColor: '#F4F4F6',
  },
  titleRow: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D6D6D8',
  },
  appleTitle: {
    color: colors.black,
    fontSize: typography.heading,
    fontWeight: '900',
  },
  cancel: {
    color: colors.appleBlue,
    fontSize: typography.body,
  },
  row: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D6D8',
  },
  cardLogo: {
    width: 38,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  red: {
    backgroundColor: '#EB001B',
    marginRight: -5,
  },
  orange: {
    backgroundColor: '#F79E1B',
  },
  rowCopy: {
    flex: 1,
  },
  rowTitle: {
    color: colors.black,
    fontSize: typography.caption,
  },
  label: {
    width: 72,
    color: '#AEB0B6',
    fontSize: typography.caption,
  },
  address: {
    flex: 1,
    color: colors.black,
    fontSize: typography.caption,
    lineHeight: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.xxl,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
  },
  totalLabel: {
    color: '#AEB0B6',
    fontSize: typography.caption,
    lineHeight: 18,
  },
  amount: {
    color: colors.black,
    fontSize: typography.caption,
    lineHeight: 18,
    textAlign: 'right',
  },
  payRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.xxl,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.md,
  },
  payAmount: {
    color: colors.black,
    fontSize: typography.heading,
  },
  reader: {
    alignItems: 'center',
    paddingBottom: spacing.xl,
  },
  readerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.appleBlue,
  },
  readerDot: {
    position: 'absolute',
    top: 14,
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors.appleBlue,
  },
  readerDotLeft: {
    left: 12,
  },
  readerDotRight: {
    right: 12,
  },
  readerSmileMask: {
    position: 'absolute',
    left: 10,
    top: 12,
    width: 16,
    height: 12,
    overflow: 'hidden',
  },
  readerSmile: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: colors.appleBlue,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  readerText: {
    color: '#8E8E93',
    fontSize: typography.caption,
    marginTop: spacing.sm,
  },
});
