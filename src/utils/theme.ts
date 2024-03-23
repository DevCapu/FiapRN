import {userPrefStorage} from '@storage';

export function themeSchema() {
  const mode = userPrefStorage.getString('mode') || 'light';

  const defaultColors = {
    white: '#fafafa',
    black: '#121212',
    green: 'rgb(31, 136, 61)',
    greenDark: '#18682e',
    grayLight: 'rgb(246, 248, 250)',
    grayDark: 'rgb(208, 215, 222)',
    gray300: 'rgb(48, 54, 61)',
    blue: 'rgb(9, 105, 218)',
    red: 'rgb(209, 36, 47)',
    yellow: '#ffdd33',
    primary: '#ed145b',
  };

  const lightMode = {
    colors: {
      primary: '#ed145b',
      background: '#454545',
      text: defaultColors.black,
      buttonBackground: defaultColors.white,
    },
  };

  const darkMode = {
    colors: {
      primary: '#e21d5f',
      background: '#bababa',
      text: '#ededed',
      buttonBackground: '#050505',
    },
  };

  const fonts = {
    RobotoRegular: 'Roboto-Regular',
    RobotoBlack: 'Roboto-Black',
    RobotoBold: 'Roboto-Bold',
    RobotoMedium: 'Roboto-Medium',
  };

  const theme = {
    fonts,
    colors: {
      ...defaultColors,
      ...(mode === 'light' ? lightMode.colors : darkMode.colors),
    },
  };

  return {
    theme,
  };
}

const {theme} = themeSchema();

export type themeType = typeof theme;
