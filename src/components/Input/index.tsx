import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import {themeSchema} from '@utils';

import {Separator} from '../Separator';

const {theme} = themeSchema();

interface InputProps extends TextInputProps {
  error?: string;
}

export function Input({error, ...props}: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
      {error && (
        <>
          <Separator size={5} />
          <Text style={styles.errorText}>* {error}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: 40,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    padding: 10,
    width: '100%',
  },
  errorText: {
    fontFamily: theme.fonts.RobotoMedium,
    color: theme.colors.red,
    fontStyle: 'italic',
    marginLeft: 5,
  },
});
