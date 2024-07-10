import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Routes } from '../routes';
import { useRoutes } from '../useRoutes';
import { Loading } from 'src/screens/News/components';
import { navigationRef } from '../navigation';
import { Membros } from 'src/screens/Membros';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const {onReady, onScreenChange, user, initializing} = useRoutes();

    if (initializing) {
      return <Loading />;
    }
  
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onScreenChange}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Routes} />
        <Drawer.Screen name="Membros" component={Membros} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;