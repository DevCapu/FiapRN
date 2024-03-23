import {t} from 'i18next';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>FIAP</Text>
      </View>
      <Pressable
        style={{
          backgroundColor: 'blue',
          width: '80%',
          padding: 10,
          height: 40,
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 16}}>
          {t('enter')}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
