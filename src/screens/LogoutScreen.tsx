import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerMenuButton } from '../components/DrawerMenuButton';
import { SCREENS } from '../constants/screens';
import { colors, radii, spacing, typography } from '../constants/theme';
import { RootDrawerParamList } from '../navigation/types';

type Navigation = DrawerNavigationProp<RootDrawerParamList, typeof SCREENS.DRAWER_LOGOUT>;

export function LogoutScreen() {
  const navigation = useNavigation<Navigation>();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top + spacing.sm }]}>
      <DrawerMenuButton />
      <View style={styles.content}>
        <Text style={styles.title}>Logged out</Text>
        <Text style={styles.description}>
          You have left the demo profile. Sign in again to continue ordering coffee.
        </Text>
        <TouchableOpacity
          accessibilityRole="button"
          activeOpacity={0.84}
          onPress={() =>
            navigation.navigate(SCREENS.DRAWER_HOME, {
              screen: SCREENS.TAB_MENU,
              params: { screen: SCREENS.HOME },
            })
          }
          style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '900',
  },
  description: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 21,
    marginTop: spacing.sm,
  },
  primaryButton: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.sm,
    backgroundColor: colors.black,
    marginTop: spacing.xl,
  },
  primaryButtonText: {
    color: colors.background,
    fontSize: typography.body,
    fontWeight: '900',
  },
});
