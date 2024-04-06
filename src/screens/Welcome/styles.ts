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
      fontFamily: 'Roboto-Black',
      fontSize: 36,
      color: theme.colors.text,
    },
    subTitle: {
      fontFamily: 'Roboto-Medium',
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
      fontFamily: 'Roboto-Bold',
      color: theme.colors.text,
      fontSize: 14,
    },
    chooseArea: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    chooseText: {
      fontFamily: 'Roboto-regular',
      color: theme.colors.text,
    },
    imageArea: {
      flexDirection: 'row',
      width: '50%',
    },
    image: {
      width: 36,
      height: 36,
      borderRadius: 20,
    },
    icon: {
      width: 36,
      height: 36,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
