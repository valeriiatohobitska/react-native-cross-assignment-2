import React, { useMemo, useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ApplePaySheet } from '../components/ApplePaySheet';
import { CheckoutHeader } from '../components/CheckoutHeader';
import { PaymentOption } from '../components/PaymentOption';
import { PayButton } from '../components/PayButton';
import { SuccessModal } from '../components/SuccessModal';
import { SCREENS } from '../constants/screens';
import { colors, layout, spacing, typography } from '../constants/theme';
import { coffeeProducts } from '../data/products';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, typeof SCREENS.CHECKOUT>;

export function CheckoutScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();
  const [paymentMethod, setPaymentMethod] = useState<'apple' | 'card'>('apple');
  const [isPaySheetVisible, setIsPaySheetVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const product = useMemo(
    () => coffeeProducts.find(item => item.id === route.params?.productId),
    [route.params?.productId],
  );

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={[styles.checkoutContent, { paddingTop: insets.top }]}
        showsVerticalScrollIndicator={false}>
        <CheckoutHeader onBack={() => navigation.goBack()} />
        <View style={styles.checkoutCopy}>
          <Text style={styles.checkoutTitle}>Choose a payment method</Text>
          <Text style={styles.checkoutDescription}>
            {product
              ? `You are ordering ${product.title} for ${product.price}.`
              : 'Product id was not passed, so the order will be reviewed before payment.'}
          </Text>
        </View>
        <View style={styles.paymentStack}>
          <PaymentOption
            title="Apple Pay"
            selected={paymentMethod === 'apple'}
            checkedLabel="My billing address is the same as my shipping address"
            onPress={() => setPaymentMethod('apple')}
          />
          <PaymentOption
            title="Credit card"
            selected={paymentMethod === 'card'}
            onPress={() => setPaymentMethod('card')}
          />
        </View>
        <PayButton onPress={() => setIsPaySheetVisible(true)} />
      </ScrollView>
      <Modal
        transparent
        visible={isPaySheetVisible}
        animationType="none"
        presentationStyle="overFullScreen"
        statusBarTranslucent>
        <View style={styles.paymentModal}>
          <View style={styles.paymentModalPhone}>
            <ApplePaySheet
              onCancel={() => setIsPaySheetVisible(false)}
              onConfirm={() => {
                setIsPaySheetVisible(false);
                setIsSuccessVisible(true);
              }}
            />
          </View>
        </View>
      </Modal>
      <SuccessModal
        visible={isSuccessVisible}
        onDone={() => setIsSuccessVisible(false)}
        onMenu={() => {
          setIsSuccessVisible(false);
          navigation.popToTop();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  checkoutContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  checkoutCopy: {
    marginTop: spacing.xxl,
  },
  checkoutTitle: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '900',
  },
  checkoutDescription: {
    color: colors.muted,
    fontSize: typography.caption,
    lineHeight: 18,
    marginTop: spacing.sm,
    maxWidth: 320,
  },
  paymentStack: {
    gap: spacing.lg,
    marginTop: 40,
  },
  paymentModal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
  },
  paymentModalPhone: {
    flex: 1,
    width: '100%',
    maxWidth: layout.phoneMaxWidth,
    position: 'relative',
    overflow: 'hidden',
  },
});
