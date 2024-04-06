import auth from '@react-native-firebase/auth';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {News, Welcome} from '@screens';
import {themeSchema} from '@utils';

const theme = themeSchema().theme;

export const LoggedStackScreenNames = {
  Welcome: 'Welcome',
  News: 'News',
} as const;

export type LoggedStackParams = {
  [LoggedStackScreenNames.Welcome]: undefined;
  [LoggedStackScreenNames.News]: undefined;
};

const LoggedStackNavigator =
  createNativeStackNavigator<LoggedStackParams>();

function logOut() {
  auth().signOut();
}

const NewsOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.white,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTitleStyle: {
    fontFamily: theme.fonts.RobotoMedium,
  },
  title: 'Notícias',
  headerRight: ({tintColor}) => (
    <TouchableOpacity onPress={logOut} activeOpacity={0.7}>
      <Icon name="power-off" size={22} color={tintColor} />
    </TouchableOpacity>
  ),
};

export const LoggedStack = (
  <>
    <LoggedStackNavigator.Screen
      name={LoggedStackScreenNames.Welcome}
      component={Welcome}
    />
    <LoggedStackNavigator.Screen
      name={LoggedStackScreenNames.News}
      component={News}
      options={NewsOptions}
    />
  </>
);
