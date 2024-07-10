import auth from '@react-native-firebase/auth';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Maps, News, Welcome} from '@screens'; //Criar dps
import {themeSchema} from '@utils';
import Felipe from 'src/screens/Membros/Felipe';
import Bruno from 'src/screens/Membros/Bruno';
import Davi from 'src/screens/Membros/Davi';
import Paulo from 'src/screens/Membros/Paulo';
import Todos from 'src/screens/Membros/Todos';

const theme = themeSchema().theme;

export const MembersStackScreenNames = {
    Todos: 'Todos',
  Felipe: 'Felipe',
  Bruno: 'Bruno',
  Davi: 'Davi',
  Paulo: 'Paulo',
} as const;

export type MembersStackParams = {
    [MembersStackScreenNames.Todos]: undefined;
    [MembersStackScreenNames.Felipe]: undefined;
    [MembersStackScreenNames.Bruno]: undefined;
    [MembersStackScreenNames.Davi]: undefined;
    [MembersStackScreenNames.Paulo]: undefined;
};

const MembersStackNavigator = createNativeStackNavigator<MembersStackParams>();

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

const MapsOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.white,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTitleStyle: {
    fontFamily: theme.fonts.RobotoMedium,
  },
  title: 'Mapa',
};

export const MembersStack = (
  <>
     <MembersStackNavigator.Screen
      name={MembersStackScreenNames.Todos}
      component={Todos}
    />

    <MembersStackNavigator.Screen
      name={MembersStackScreenNames.Felipe}
      component={Felipe}
    />
    <MembersStackNavigator.Screen
      name={MembersStackScreenNames.Davi}
      component={Davi}
      options={NewsOptions}
    />
    <MembersStackNavigator.Screen
      name={MembersStackScreenNames.Paulo}
      component={Paulo}
      options={MapsOptions}
    />
    <MembersStackNavigator.Screen
        name={MembersStackScreenNames.Bruno}
        component={Bruno}
        options={MapsOptions}/>
  </>
);
