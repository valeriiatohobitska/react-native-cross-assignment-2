import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, useWindowDimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
import { colors, layout } from './src/constants/theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const { width } = useWindowDimensions();
  const appWidth = Math.min(width, layout.phoneMaxWidth);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <View style={styles.root}>
        <View style={[styles.phone, { width: appWidth }]}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </View>
      </View>
    </SafeAreaProvider>
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
    overflow: 'hidden',
    backgroundColor: colors.background,
  },
});

export default App;
