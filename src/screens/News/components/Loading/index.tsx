import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {theme} = themeSchema();

import {Separator} from '@components';
import {themeSchema} from '@utils';
export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.primary} />
      <Separator size={14} />
      <Text>Carregando</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
