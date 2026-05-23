This is a React Native homework project for cross assignment 4.

![Coffee app menu screen](image.png)
![Coffee app search screen](image-1.png)
![Coffee app checkout screen](image-2.png)
![Coffee app Apple Pay confirmation screen](image-3.png)
![Coffee app success modal](image-4.png)
![Horizontal view](image-5.png)

The app is based on a Figma coffee ordering prototype. Assignment 4 adds
React Navigation with Stack, Tab and Drawer navigation:

- Drawer: coffee menu, help, contacts and log out screens.
- Tabs: menu, cart, order history and profile.
- Stack: menu -> search -> product details -> checkout.

Product cards pass `productId` through `navigation.navigate()`. The product
details and checkout screens read it from `route.params` and show a fallback
state if the id is missing or invalid.

## Implemented UI Components

The app screen is built from reusable React Native components stored in `src/components`:

- `SearchField` - rounded search input from the menu/search screens.
- `ToolbarButton` - Sort and Filter controls with an optional badge.
- `ProductCard` - coffee image, drink name and price.
- `BottomTabBar` - Menu, Favourites, Cart and Profile navigation.
- `RecentSearchList` - recent search item with a remove action.
- `CheckoutHeader` - checkout title bar with back button.
- `PaymentOption` - Apple Pay and Credit card option cards.
- `PayButton` - black Apple Pay action button.
- `ApplePaySheet` - visual mock of the Apple Pay confirmation sheet.
- `SuccessModal` - order confirmation dialog.
- `CoffeeIcon` - wrapper around Lucide vector icons from `@react-native-vector-icons/lucide`.

Shared colors, spacing, radii, typography and platform shadows are stored in `src/constants/theme.ts`.
Demo data is stored in `src/data/products.ts`.
Navigation constants are stored in `src/constants/screens.ts`, and navigators
are split into `src/navigation/StackNavigator.tsx`,
`src/navigation/TabNavigator.tsx` and `src/navigation/DrawerNavigator.tsx`.

The layout uses `useWindowDimensions` and keeps the prototype responsive for different screen widths and orientations.
Icons use the optional `react-native-vector-icons` family package recommended in the homework tips.

## Navigation Demo

[Watch navigation demo](screenshots/navigation-demo.mov)

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
