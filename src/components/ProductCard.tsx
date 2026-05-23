import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, radii, spacing, typography } from '../constants/theme';
import { CoffeeProduct } from '../data/products';

type ProductCardProps = {
  product: CoffeeProduct;
  width: number;
  onPress?: () => void;
};

export function ProductCard({ product, width, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.84}
      onPress={onPress}
      style={[styles.card, { width }]}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.copy}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: radii.md,
    backgroundColor: colors.card,
  },
  image: {
    width: '100%',
    aspectRatio: 1.2,
  },
  copy: {
    minHeight: 68,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: typography.caption,
    fontWeight: '500',
  },
  price: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '900',
    marginTop: spacing.xs,
  },
});
