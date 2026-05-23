import React, { useMemo, useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { ApplePaySheet } from './src/components/ApplePaySheet';
import { BottomTabBar } from './src/components/BottomTabBar';
import { CheckoutHeader } from './src/components/CheckoutHeader';
import { CoffeeIcon } from './src/components/CoffeeIcon';
import { PayButton } from './src/components/PayButton';
import { PaymentOption } from './src/components/PaymentOption';
import { ProductCard } from './src/components/ProductCard';
import { RecentSearchList } from './src/components/RecentSearchList';
import { SearchField } from './src/components/SearchField';
import { SuccessModal } from './src/components/SuccessModal';
import { ToolbarButton } from './src/components/ToolbarButton';
import { colors, layout, spacing, typography } from './src/constants/theme';
import {
  CoffeeProduct,
  coffeeProducts,
  recentSearches,
} from './src/data/products';

type Screen = 'menu' | 'search' | 'checkout';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <CoffeeApp />
    </SafeAreaProvider>
  );
}

function CoffeeApp() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [screen, setScreen] = useState<Screen>('menu');
  const [paymentMethod, setPaymentMethod] = useState<'apple' | 'card'>('apple');
  const [isPaySheetVisible, setIsPaySheetVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const appWidth = Math.min(width, layout.phoneMaxWidth);
  const pagePadding = spacing.lg;
  const cardGap = spacing.md;
  const columns = appWidth >= 360 ? 2 : 1;
  const cardWidth = useMemo(
    () => (appWidth - pagePadding * 2 - cardGap * (columns - 1)) / columns,
    [appWidth, cardGap, columns, pagePadding],
  );

  const goToMenu = () => {
    setScreen('menu');
    setIsPaySheetVisible(false);
    setIsSuccessVisible(false);
  };

  const renderProduct = ({ item }: ListRenderItemInfo<CoffeeProduct>) => (
    <ProductCard
      product={item}
      width={cardWidth}
      onPress={() => setScreen('checkout')}
    />
  );

  return (
    <View style={styles.root}>
      <View style={[styles.phone, { width: appWidth }]}>
        <View style={[styles.safeContent, { paddingTop: insets.top }]}>
          {screen === 'checkout' ? (
            <CheckoutScreen
              selectedMethod={paymentMethod}
              onBack={() => setScreen('menu')}
              onSelect={setPaymentMethod}
              onPay={() => setIsPaySheetVisible(true)}
            />
          ) : (
            <MenuScreen
              mode={screen}
              cardWidth={cardWidth}
              columns={columns}
              bottomInset={insets.bottom}
              onFocusSearch={() => setScreen('search')}
              onCloseSearch={() => setScreen('menu')}
              renderProduct={renderProduct}
            />
          )}
        </View>
        <Modal
          transparent
          visible={isPaySheetVisible}
          animationType="none"
          presentationStyle="overFullScreen"
          statusBarTranslucent>
          <View style={styles.paymentModal}>
            <View style={[styles.paymentModalPhone, { width: appWidth }]}>
              <ApplePaySheet
                onCancel={() => setIsPaySheetVisible(false)}
                onConfirm={() => {
                  setIsPaySheetVisible(false);
                  setScreen('menu');
                  setIsSuccessVisible(true);
                }}
              />
            </View>
          </View>
        </Modal>
        <SuccessModal
          visible={isSuccessVisible}
          onDone={() => setIsSuccessVisible(false)}
          onMenu={goToMenu}
        />
      </View>
    </View>
  );
}

type MenuScreenProps = {
  mode: Screen;
  columns: number;
  cardWidth: number;
  bottomInset: number;
  onFocusSearch: () => void;
  onCloseSearch: () => void;
  renderProduct: (info: ListRenderItemInfo<CoffeeProduct>) => React.ReactElement;
};

function MenuScreen({
  mode,
  columns,
  bottomInset,
  onFocusSearch,
  onCloseSearch,
  renderProduct,
}: MenuScreenProps) {
  if (mode === 'search') {
    return (
      <View style={styles.screen}>
        <View style={styles.searchOnlyHeader}>
          <TouchableOpacity
            accessibilityRole="button"
            activeOpacity={0.75}
            onPress={onCloseSearch}
            style={styles.searchBackButton}>
            <CoffeeIcon name="chevron-left" size={28} color={colors.text} />
          </TouchableOpacity>
          <View style={styles.searchInputWrap}>
            <SearchField value="Hot" editable autoFocus onSubmit={onCloseSearch} />
          </View>
        </View>
        <RecentSearchList searches={recentSearches} />
      </View>
    );
  }

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
        contentContainerStyle={[
          styles.menuContent,
          { paddingBottom: layout.bottomTabsHeight + bottomInset },
        ]}
        ListHeaderComponent={
          <View style={styles.menuHeader}>
            <TouchableOpacity activeOpacity={0.85} onPress={onFocusSearch}>
              <SearchField value="Hot" />
            </TouchableOpacity>
            <View style={styles.toolbar}>
              <ToolbarButton iconName="arrow-up-down" label="Sort" />
              <ToolbarButton iconName="list-filter" label="Filter" badge="2" />
            </View>
          </View>
        }
      />
      <BottomTabBar />
    </View>
  );
}

type CheckoutScreenProps = {
  selectedMethod: 'apple' | 'card';
  onBack: () => void;
  onSelect: (method: 'apple' | 'card') => void;
  onPay: () => void;
};

function CheckoutScreen({
  selectedMethod,
  onBack,
  onSelect,
  onPay,
}: CheckoutScreenProps) {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.checkoutContent}
      showsVerticalScrollIndicator={false}>
      <CheckoutHeader onBack={onBack} />
      <View style={styles.checkoutCopy}>
        <Text style={styles.checkoutTitle}>Choose a payment method</Text>
        <Text style={styles.checkoutDescription}>
          You won't be charged until you review the order on the next page
        </Text>
      </View>
      <View style={styles.paymentStack}>
        <PaymentOption
          title="Apple Pay"
          selected={selectedMethod === 'apple'}
          checkedLabel="My billing address is the same as my shipping address"
          onPress={() => onSelect('apple')}
        />
        <PaymentOption
          title="Credit card"
          selected={selectedMethod === 'card'}
          onPress={() => onSelect('card')}
        />
      </View>
      <PayButton onPress={onPay} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  phone: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: colors.background,
  },
  safeContent: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchOnlyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  searchBackButton: {
    width: 36,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInputWrap: {
    flex: 1,
  },
  menuContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  menuHeader: {
    gap: spacing.lg,
    marginBottom: spacing.xxl,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productRow: {
    gap: spacing.md,
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
    position: 'relative',
    overflow: 'hidden',
  },
});

export default App;
