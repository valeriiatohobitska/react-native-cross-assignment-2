import { NavigatorScreenParams } from '@react-navigation/native';
import { SCREENS } from '../constants/screens';

export type HomeStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.SEARCH]: undefined;
  [SCREENS.PRODUCT_DETAILS]: { productId?: string };
  [SCREENS.CHECKOUT]: { productId?: string };
};

export type MainTabParamList = {
  [SCREENS.TAB_MENU]: NavigatorScreenParams<HomeStackParamList>;
  [SCREENS.TAB_CART]: undefined;
  [SCREENS.TAB_HISTORY]: undefined;
  [SCREENS.TAB_PROFILE]: undefined;
};

export type RootDrawerParamList = {
  [SCREENS.DRAWER_HOME]: NavigatorScreenParams<MainTabParamList>;
  [SCREENS.DRAWER_HELP]: undefined;
  [SCREENS.DRAWER_CONTACTS]: undefined;
  [SCREENS.DRAWER_LOGOUT]: undefined;
};
