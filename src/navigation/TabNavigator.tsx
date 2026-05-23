import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ComponentProps } from 'react';
import { Lucide } from '@react-native-vector-icons/lucide/static';
import { CoffeeIcon } from '../components/CoffeeIcon';
import { SCREENS } from '../constants/screens';
import { colors, layout, typography } from '../constants/theme';
import { CartScreen } from '../screens/CartScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

function TabIcon({
  color,
  name,
  size,
}: {
  color: string;
  name: ComponentProps<typeof Lucide>['name'];
  size: number;
}) {
  return <CoffeeIcon name={name} size={size} color={color} />;
}

function MenuTabIcon({ color, size }: { color: string; size: number }) {
  return <TabIcon name="search" size={size} color={color} />;
}

function CartTabIcon({ color, size }: { color: string; size: number }) {
  return <TabIcon name="shopping-bag" size={size} color={color} />;
}

function HistoryTabIcon({ color, size }: { color: string; size: number }) {
  return <TabIcon name="receipt-text" size={size} color={color} />;
}

function ProfileTabIcon({ color, size }: { color: string; size: number }) {
  return <TabIcon name="star" size={size} color={color} />;
}

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.coffee,
        tabBarInactiveTintColor: colors.softMuted,
        tabBarStyle: {
          height: layout.bottomTabsHeight,
          paddingTop: 8,
          paddingBottom: 12,
          borderTopColor: colors.surface,
          backgroundColor: colors.background,
        },
        tabBarLabelStyle: {
          fontSize: typography.tiny,
          fontWeight: '800',
        },
      }}>
      <Tab.Screen
        name={SCREENS.TAB_MENU}
        component={StackNavigator}
        options={{ title: 'Menu', tabBarIcon: MenuTabIcon }}
      />
      <Tab.Screen
        name={SCREENS.TAB_CART}
        component={CartScreen}
        options={{ title: 'Cart', tabBarIcon: CartTabIcon }}
      />
      <Tab.Screen
        name={SCREENS.TAB_HISTORY}
        component={HistoryScreen}
        options={{ title: 'History', tabBarIcon: HistoryTabIcon }}
      />
      <Tab.Screen
        name={SCREENS.TAB_PROFILE}
        component={ProfileScreen}
        options={{ title: 'Profile', tabBarIcon: ProfileTabIcon }}
      />
    </Tab.Navigator>
  );
}
