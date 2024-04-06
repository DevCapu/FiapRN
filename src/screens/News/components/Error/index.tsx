import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Separator} from '@components';
import {themeSchema} from '@utils';

interface ErrorProps {
  refetch(): void;
}

const {theme} = themeSchema();

export function Error({refetch}: ErrorProps) {
  return (
    <View style={styles.container}>
      <Text>Erro ao buscar notícias ☠️</Text>
      <Separator size={12} />
      <TouchableOpacity
        onPress={() => refetch()}
        style={styles.buttonArea}
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>Tente novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonArea: {
    borderRadius: 4,
    padding: 10,
    backgroundColor: theme.colors.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  buttonText: {
    fontFamily: theme.fonts.RobotoMedium,
    fontSize: 14,
    color: theme.colors.white,
  },
});
