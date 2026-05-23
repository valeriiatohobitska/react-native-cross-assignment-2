import React from 'react';
import { ComponentProps } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Lucide } from '@react-native-vector-icons/lucide/static';
import { colors, layout, spacing, typography } from '../constants/theme';
import { CoffeeIcon } from './CoffeeIcon';

type TabItem = {
  id: string;
  iconName: ComponentProps<typeof Lucide>['name'];
  label: string;
  active?: boolean;
};

const tabs: TabItem[] = [
  { id: 'menu', iconName: 'search', label: 'Menu', active: true },
  { id: 'favourites', iconName: 'heart', label: 'Favourites' },
  { id: 'cart', iconName: 'shopping-bag', label: 'Cart' },
  { id: 'profile', iconName: 'star', label: 'Profile' },
];

export function BottomTabBar() {
  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <View key={tab.id} style={styles.item}>
          <CoffeeIcon
            name={tab.iconName}
            size={25}
            color={tab.active ? colors.coffee : colors.softMuted}
          />
          <Text style={[styles.label, tab.active && styles.activeLabel]}>
            {tab.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: layout.bottomTabsHeight,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.surface,
  },
  item: {
    minWidth: 64,
    alignItems: 'center',
    gap: spacing.xs,
  },
  label: {
    color: colors.muted,
    fontSize: typography.tiny,
  },
  activeLabel: {
    color: colors.text,
    fontWeight: '800',
  },
});
