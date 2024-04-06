import {StyleSheet} from 'react-native';

import {themeSchema} from '@utils';

const {theme} = themeSchema();

export const styles = StyleSheet.create({
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
