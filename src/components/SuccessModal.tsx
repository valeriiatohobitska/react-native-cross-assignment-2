import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, radii, shadows, spacing, typography } from '../constants/theme';

type SuccessModalProps = {
  visible: boolean;
  onDone: () => void;
  onMenu: () => void;
};

export function SuccessModal({ visible, onDone, onMenu }: SuccessModalProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <Text style={styles.title}>Success</Text>
          <Text style={styles.message}>
            Coffee is on it’s way!{'\n'}Go check something else to order
          </Text>
          <View style={styles.actions}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onDone}
              style={[styles.button, styles.secondary]}>
              <Text style={[styles.buttonText, styles.secondaryText]}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={onMenu} style={styles.button}>
              <Text style={styles.buttonText}>Go to Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xxl,
    backgroundColor: colors.successOverlay,
  },
  dialog: {
    width: '100%',
    maxWidth: 330,
    padding: spacing.lg,
    borderRadius: radii.lg,
    backgroundColor: colors.background,
    ...shadows,
  },
  title: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '900',
    textAlign: 'center',
  },
  message: {
    color: colors.muted,
    fontSize: typography.caption,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  button: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.sm,
    backgroundColor: colors.coffee,
  },
  secondary: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.coffee,
  },
  buttonText: {
    color: colors.background,
    fontSize: typography.caption,
    fontWeight: '800',
  },
  secondaryText: {
    color: colors.coffee,
  },
});
