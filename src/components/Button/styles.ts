import {StyleSheet} from 'react-native';

import {type themeType} from '@utils';

export const stylesWithTheme = (theme: themeType) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.colors.buttonBackground,
      width: '100%',
      padding: 10,
      height: 40,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontFamily: theme.fonts.RobotoBold,
      color: theme.colors.primary,
      fontSize: 14,
    },
  });
