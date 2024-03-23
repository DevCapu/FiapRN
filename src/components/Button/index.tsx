import React from 'react';
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';

import {themeSchema} from '@utils';

import {stylesWithTheme} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export const Button = ({text, ...props}: ButtonProps) => {
  const styles = stylesWithTheme(themeSchema().theme);
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...props}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
