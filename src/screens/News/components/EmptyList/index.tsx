import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Text>Não encontramos nenhuma notícia 😭</Text>
      <Text>Puxe para baixo e tente novamente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
