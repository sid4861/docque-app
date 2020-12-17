import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import OnboardingScreens from './src/Screens/OnboardingScreens';
import SigninScreen from './src/Screens/SigninScreen';
import SignupScreen from './src/Screens/SignupScreen';
import HomeScreen from './src/Screens/HomeScreen';
import LoadingScreen from './src/Screens/LoadingScreen';
import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen';
import UserDetailsScreen from './src/Screens/UserDetailsScreen';
import AddQuestionScreen from './src/Screens/AddQuestionScreen';
import AddAnswerScreen from './src/Screens/AddAnswerScreen';
import AddCommentScreen from './src/Screens/AddCommentScreen';
import QuestionScreen from './src/Screens/QuestionScreen';
import CommentsScreen from './src/Screens/CommentsScreen';
import YourQuestionsScreen from './src/Screens/YourQuestionsScreen';
import YourAnswersScreen from './src/Screens/YourAnswersScreen';
import UserProfileScreen from './src/Screens/UserProfileScreen';
import ContactUsScreen from './src/Screens/ContactUsScreen';
import LogoutScreen from './src/Screens/LogoutScreen';
import ViewPdfScreen from './src/Screens/ViewPdfScreen';
import TagFiltersScreen from './src/Screens/TagFiltersScreen';
import SearchScreen from './src/Screens/SearchScreen';
import ResolveAuthScreen from './src/Screens/ResolveAuthScreen';
import { setNavigator } from './src/navigationRef';
import { Provider as AuthProvider } from './src/Context/AuthContext';
import { Provider as QuestionProvider } from './src/Context/QuestionContext';
import { Provider as UserProfileProvider } from './src/Context/UserProfileContext';
import * as firebase from 'firebase';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import userProfileScreenStack from './src/Navigators/UserProfileScreenStackNavigator';
import yourQuestionsScreenStack from './src/Navigators/YourQuestionsScreenStackNavigator';
import yourAnswersScreenStack from './src/Navigators/YourAnswersScreenStackNavigator';
import contactUsScreenStack from './src/Navigators/ContactUsScreenStackNavigator';

const firebaseConfig = {
  apiKey: "AIzaSyBzYmdifMIowrHQgIPejuUzGRRNkMK_6G4",
  authDomain: "docque-e6f1f.firebaseapp.com",
  databaseURL: "docque-e6f1f.firebaseapp.com",
  storageBucket: "gs://docque-e6f1f.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('./assets/Fonts/Sen-Bold.ttf'),
    'roboto-italic': require('./assets/Fonts/Sen-Regular.ttf'),
    'roboto-regular': require('./assets/Fonts/Sen-ExtraBold.ttf')
  });
};

const switchNavigator = createSwitchNavigator({
  ResolveAuthScreen,
  OnboardingScreens,
  loginFlow: createStackNavigator({
    SigninScreen,
    SignupScreen,
    LoadingScreen,
    ForgotPasswordScreen,
    UserDetailsScreen
  }),
  // mailFlow: createStackNavigator({
  //   HomeScreen,
  //   AddQuestionScreen,
  //   QuestionScreen,
  //   AddAnswerScreen,
  //   drawerNavigator: createDrawerNavigator({
  //     'Your Questions': {
  //       screen: YourQuestionsScreen
  //     },
  //     'Your Answers': {
  //       screen: YourAnswersScreen
  //     }
  //   })
  // })
  mainFlow: createStackNavigator({
    drawerNavigator: createDrawerNavigator({
      Home: createStackNavigator({
        HomeScreen,
        SearchScreen,
        ViewPdfScreen,
        TagFiltersScreen,
        AddQuestionScreen,
        QuestionScreen,
        AddAnswerScreen,
        AddCommentScreen,
        CommentsScreen
      }),
      'Profile': userProfileScreenStack,
      'Your Questions': yourQuestionsScreenStack,
      'Your Answers': yourAnswersScreenStack,
      'Contact': contactUsScreenStack,
      'Logout': LogoutScreen
    }, {
      drawerBackgroundColor: '#CA534C',
      contentOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#000000'
      }
    })
  }, {
    headerMode: 'none'
  }) //closing
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
    <UserProfileProvider>
      <QuestionProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
      </QuestionProvider>
    </UserProfileProvider>

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
