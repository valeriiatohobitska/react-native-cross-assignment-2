import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../constants/screens';
import { colors, typography } from '../constants/theme';
import { CheckoutScreen } from '../screens/CheckoutScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HeaderTitle({ title }: { title: string }) {
  return <Text style={styles.headerTitle}>{title}</Text>;
}

function ProductDetailsHeaderTitle() {
  return <HeaderTitle title="Drink details" />;
}

const productDetailsOptions = {
  headerTitle: ProductDetailsHeaderTitle,
};

export function StackNavigator() {
  return (
    <Stack.Navigator
      // Stack keeps the order flow linear: menu -> details -> checkout.
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        contentStyle: { backgroundColor: colors.background },
      }}>
      <Stack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS.SEARCH}
        component={SearchScreen}
        options={{ headerShown: false, presentation: 'card' }}
      />
      <Stack.Screen
        name={SCREENS.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
        options={productDetailsOptions}
      />
      <Stack.Screen
        name={SCREENS.CHECKOUT}
        component={CheckoutScreen}
        options={{ headerShown: false, gestureEnabled: true }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '900',
  },
});
