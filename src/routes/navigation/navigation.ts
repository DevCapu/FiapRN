import {
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {createRef} from 'react';

import {RootStackParams} from '../routes';

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParams>>();

export const navigation = {
  replace: (
    to: string,
    params?: {[key: string]: string | number},
  ) => {
    navigationRef.current?.dispatch(StackActions.replace(to, params));
  },
  push: (to: string, params?: {[key: string]: unknown}) => {
    navigationRef.current?.dispatch(StackActions.push(to, params));
  },
  goBack: () => {
    navigationRef.current?.canGoBack() &&
      navigationRef.current?.goBack();
  },
};
