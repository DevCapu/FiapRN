import {StyleSheet} from 'react-native';

import {themeType} from '@utils';

export const stylesWithTheme = (theme: themeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.grayDark,
      padding: 40,
    },
    title: {
      fontSize: 36,
      fontFamily: theme.fonts.RobotoBlack,
    },
    subTitle: {
      fontSize: 18,
      fontFamily: theme.fonts.RobotoBold,
    },
    buttonArea: {
      borderRadius: 4,
      padding: 10,
      width: '100%',
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
    signUpText: {
      fontFamily: theme.fonts.RobotoMedium,
      fontSize: 14,
      color: theme.colors.black,
      textAlign: 'center',
    },
    signUpTextSub: {
      textDecorationLine: 'underline',
    },
  });
