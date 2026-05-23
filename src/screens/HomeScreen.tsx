import React, { useMemo } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CoffeeIcon } from '../components/CoffeeIcon';
import { ProductCard } from '../components/ProductCard';
import { SearchField } from '../components/SearchField';
import { ToolbarButton } from '../components/ToolbarButton';
import { SCREENS } from '../constants/screens';
import { colors, layout, spacing } from '../constants/theme';
import { CoffeeProduct, coffeeProducts } from '../data/products';
import { HomeStackParamList } from '../navigation/types';

type Navigation = NativeStackNavigationProp<HomeStackParamList, typeof SCREENS.HOME>;

export function HomeScreen() {
  const navigation = useNavigation<Navigation>();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const appWidth = Math.min(width, layout.phoneMaxWidth);
  const columns = appWidth >= 360 ? 2 : 1;
  const cardWidth = useMemo(
    () => (appWidth - spacing.lg * 2 - spacing.md * (columns - 1)) / columns,
    [appWidth, columns],
  );

  const renderProduct = ({ item }: ListRenderItemInfo<CoffeeProduct>) => (
    <ProductCard
      product={item}
      width={cardWidth}
      onPress={() => navigation.navigate(SCREENS.PRODUCT_DETAILS, { productId: item.id })}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        key={columns}
        data={coffeeProducts}
        numColumns={columns}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        columnWrapperStyle={columns > 1 ? styles.productRow : undefined}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.menuContent, { paddingTop: insets.top + spacing.sm }]}
        ListHeaderComponent={
          <View style={styles.menuHeader}>
            <View style={styles.topRow}>
              <TouchableOpacity
                accessibilityRole="button"
                activeOpacity={0.75}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                style={styles.iconButton}>
                <CoffeeIcon name="menu" size={24} color={colors.text} />
              </TouchableOpacity>
              <TouchableOpacity
                accessibilityRole="search"
                activeOpacity={0.85}
                onPress={() => navigation.navigate(SCREENS.SEARCH)}
                style={styles.searchWrap}>
                <SearchField value="Hot" />
              </TouchableOpacity>
            </View>
            <View style={styles.toolbar}>
              <ToolbarButton iconName="arrow-up-down" label="Sort" />
              <ToolbarButton iconName="list-filter" label="Filter" badge="2" />
            </View>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  menuContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: layout.bottomTabsHeight,
  },
  menuHeader: {
    gap: spacing.lg,
    marginBottom: spacing.xxl,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  searchWrap: {
    flex: 1,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productRow: {
    gap: spacing.md,
  },
});
