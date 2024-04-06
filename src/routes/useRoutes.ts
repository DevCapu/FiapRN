/* eslint-disable react-hooks/exhaustive-deps */
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useEffect, useRef, useState} from 'react';

import {logScreen} from '@analytics';

import {navigationRef} from './navigation';

export function useRoutes() {
  const routeNameRef = useRef<string>();
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const [initializing, setInitializing] = useState<boolean>(true);

  function onReady() {
    routeNameRef.current =
      navigationRef.current?.getCurrentRoute()?.name;
  }

  async function onScreenChange() {
    const previousRouteName = routeNameRef.current;
    const currentRouteName =
      navigationRef.current?.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName) {
      await logScreen(currentRouteName);
    }
    routeNameRef.current = currentRouteName;
  }

  function onAuthStateChanged(
    userLogged: FirebaseAuthTypes.User | null,
  ) {
    setUser(userLogged);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return {
    user,
    initializing,
    onReady,
    onScreenChange,
  };
}
