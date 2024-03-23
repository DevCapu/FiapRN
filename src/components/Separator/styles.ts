import {StyleSheet} from 'react-native';

import type {SeparatorProps} from '.';

export const stylesWithProps = ({size, horizontal}: SeparatorProps) =>
  StyleSheet.create({
    container: {
      width: horizontal ? size : 0,
      height: horizontal ? 0 : size,
    },
  });
