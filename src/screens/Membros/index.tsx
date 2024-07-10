import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { navigation } from "src/routes/navigation";
import { MembersStack, MembersStackParams } from "src/routes/stacks/Members.routes";


export type RootStackParams = {
    MembersStack: MembersStackParams;
  };
  
  const RootStack = createNativeStackNavigator<RootStackParams>();
  
  const NavigatorOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: 'none',
  };

export function Membros({navigation}) {
    return (
        <RootStack.Navigator initialRouteName="Todos" screenOptions={NavigatorOptions}>
        { MembersStack }
      </RootStack.Navigator>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    text: {
      fontSize: 18,
    },
  });