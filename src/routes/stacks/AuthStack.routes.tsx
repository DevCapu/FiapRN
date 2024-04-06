import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {SignIn} from '@screens';

export const AuthStackScreenNames = {
  SignIn: 'SignIn',
} as const;

export type AuthStackParams = {
  [AuthStackScreenNames.SignIn]: undefined;
};

const AuthStackNavigator =
  createNativeStackNavigator<AuthStackParams>();

export const AuthStack = (
  <>
    <AuthStackNavigator.Screen
      name={AuthStackScreenNames.SignIn}
      component={SignIn}
    />
  </>
);
