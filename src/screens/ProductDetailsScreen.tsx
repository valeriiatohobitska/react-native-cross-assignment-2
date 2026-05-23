import React, { useMemo } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PayButton } from '../components/PayButton';
import { SCREENS } from '../constants/screens';
import { colors, radii, spacing, typography } from '../constants/theme';
import { coffeeProducts } from '../data/products';
import { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, typeof SCREENS.PRODUCT_DETAILS>;

export function ProductDetailsScreen({ navigation, route }: Props) {
  const product = useMemo(
    () => coffeeProducts.find(item => item.id === route.params?.productId),
    [route.params?.productId],
  );

  if (!product) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.title}>Drink not found</Text>
        <Text style={styles.description}>Product id was not passed or does not exist.</Text>
        <PayButton title="Back to menu" onPress={() => navigation.navigate(SCREENS.HOME)} />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>
        Freshly prepared drink from the menu prototype. The selected product id is{' '}
        {route.params?.productId}.
      </Text>
      <PayButton
        title="Order"
        onPress={() => navigation.navigate(SCREENS.CHECKOUT, { productId: product.id })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  image: {
    width: '100%',
    aspectRatio: 1.15,
    borderRadius: radii.md,
    backgroundColor: colors.surface,
  },
  title: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '900',
    marginTop: spacing.xl,
  },
  price: {
    color: colors.coffeeDark,
    fontSize: typography.heading,
    fontWeight: '900',
    marginTop: spacing.sm,
  },
  description: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 21,
    marginTop: spacing.lg,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
});
