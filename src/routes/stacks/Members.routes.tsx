import auth from '@react-native-firebase/auth';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';

import {Maps, News, Welcome} from '@screens'; //Criar dps
import {themeSchema} from '@utils';
import Felipe from 'src/screens/Membros/Felipe';
import Bruno from 'src/screens/Membros/Bruno';
import Davi from 'src/screens/Membros/Davi';
import Paulo from 'src/screens/Membros/Paulo';
import Todos from 'src/screens/Membros/Todos';

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
    />
    <MembersStackNavigator.Screen
      name={MembersStackScreenNames.Paulo}
      component={Paulo}
    />
    <MembersStackNavigator.Screen
        name={MembersStackScreenNames.Bruno}
        component={Bruno}/>
  </>
);
