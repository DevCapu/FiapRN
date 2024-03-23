import React, {memo} from 'react';
import {View} from 'react-native';

import {stylesWithProps} from './styles';

export interface SeparatorProps {
  size: number;
  horizontal?: boolean;
}

export const Separator = memo(
  ({size, horizontal}: SeparatorProps) => {
    const styles = stylesWithProps({size, horizontal});

    return <View style={styles.container} />;
  },
);
