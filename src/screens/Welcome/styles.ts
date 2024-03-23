import {StyleSheet} from 'react-native';

import {type themeType} from '@utils';

export const stylesWithTheme = (theme: themeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
    },
    title: {
      fontFamily: theme.fonts.RobotoBlack,
      fontSize: 36,
      color: theme.colors.text,
    },
    subTitle: {
      fontFamily: theme.fonts.RobotoMedium,
      fontSize: 18,
      color: theme.colors.text,
    },
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
    chooseArea: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    chooseText: {
      fontFamily: theme.fonts.RobotoRegular,
      color: theme.colors.text,
    },
    imageArea: {
      flexDirection: 'row',
      width: '50%',
    },
    image: {
      width: 36,
      height: 36,
      borderRadius: 18,
    },
    icon: {
      width: 36,
      height: 36,
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
