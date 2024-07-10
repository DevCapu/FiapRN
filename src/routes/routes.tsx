import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';

import {Loading} from 'src/screens/News/components';

import {navigationRef} from './navigation/navigation';
import {AuthStack, AuthStackParams} from './stacks/AuthStack.routes';
import {LoggedStack, LoggedStackParams} from './stacks/Logged.routes';
import {useRoutes} from './useRoutes';

export type RootStackParams = {
  AuthStack: AuthStackParams;
  LoggedStack: LoggedStackParams;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const NavigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'none',
};

export const Routes = () => {
  return (
      <RootStack.Navigator screenOptions={NavigatorOptions}>
        { LoggedStack }
      </RootStack.Navigator>
  );
};
