import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CoffeeIcon } from '../components/CoffeeIcon';
import { SCREENS } from '../constants/screens';
import { colors, typography } from '../constants/theme';
import { ContactsScreen } from '../screens/ContactsScreen';
import { HelpScreen } from '../screens/HelpScreen';
import { LogoutScreen } from '../screens/LogoutScreen';
import { RootDrawerParamList } from './types';
import { TabNavigator } from './TabNavigator';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerIcon({
  color,
  name,
  size,
}: {
  color: string;
  name: React.ComponentProps<typeof CoffeeIcon>['name'];
  size: number;
}) {
  return <CoffeeIcon name={name} size={size} color={color} />;
}

function CoffeeDrawerIcon({ color, size }: { color: string; size: number }) {
  return <DrawerIcon name="coffee" size={size} color={color} />;
}

function HelpDrawerIcon({ color, size }: { color: string; size: number }) {
  return <DrawerIcon name="circle-help" size={size} color={color} />;
}

function ContactsDrawerIcon({ color, size }: { color: string; size: number }) {
  return <DrawerIcon name="phone" size={size} color={color} />;
}

function LogoutDrawerIcon({ color, size }: { color: string; size: number }) {
  return <DrawerIcon name="log-out" size={size} color={color} />;
}

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.coffee,
        drawerInactiveTintColor: colors.text,
        drawerLabelStyle: { fontSize: typography.body, fontWeight: '800' },
        drawerStyle: { backgroundColor: colors.background, width: 290 },
        overlayColor: 'rgba(36, 37, 43, 0.36)',
      }}>
      <Drawer.Screen
        name={SCREENS.DRAWER_HOME}
        component={TabNavigator}
        options={{
          title: 'Coffee menu',
          drawerIcon: CoffeeDrawerIcon,
        }}
      />
      <Drawer.Screen
        name={SCREENS.DRAWER_HELP}
        component={HelpScreen}
        options={{
          title: 'Help',
          drawerIcon: HelpDrawerIcon,
        }}
      />
      <Drawer.Screen
        name={SCREENS.DRAWER_CONTACTS}
        component={ContactsScreen}
        options={{
          title: 'Contacts',
          drawerIcon: ContactsDrawerIcon,
        }}
      />
      <Drawer.Screen
        name={SCREENS.DRAWER_LOGOUT}
        component={LogoutScreen}
        options={{
          title: 'Log out',
          drawerIcon: LogoutDrawerIcon,
        }}
      />
    </Drawer.Navigator>
  );
}
