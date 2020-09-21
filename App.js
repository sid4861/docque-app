import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import OnboardingScreens from './src/Screens/OnboardingScreens';
import SigninScreen from './src/Screens/SigninScreen';
import SignupScreen from './src/Screens/SignupScreen';
import HomeScreen from './src/Screens/HomeScreen';
import LoadingScreen from './src/Screens/LoadingScreen';
import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen';
import UserDetailsScreen from './src/Screens/UserDetailsScreen';
import { setNavigator } from './src/navigationRef';
import { Provider as AuthProvider } from './src/Context/AuthContext';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('./assets/Fonts/Sen-Bold.ttf'),
    'roboto-italic': require('./assets/Fonts/Sen-Regular.ttf'),
    'roboto-regular': require('./assets/Fonts/Sen-ExtraBold.ttf')
  });
};

const switchNavigator = createSwitchNavigator({
  OnboardingScreens,
  loginFlow: createStackNavigator({
    SigninScreen,
    SignupScreen,
    LoadingScreen,
    ForgotPasswordScreen,
    UserDetailsScreen
  }),
  mailFlow: createStackNavigator({
    HomeScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => { setDataLoaded(true) }}
      autoHideSplash={true}
    />
  }
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </AuthProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
