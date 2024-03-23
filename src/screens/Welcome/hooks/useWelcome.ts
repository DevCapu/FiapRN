import {useTranslation} from 'react-i18next';

import {useModeColor, useTranslate} from '@hooks';
import {themeSchema} from '@utils';

import {stylesWithTheme} from '../styles';

export function useWelcome() {
  const {t} = useTranslation();
  const styles = stylesWithTheme(themeSchema().theme);
  const {handleChooseLanguage} = useTranslate();
  const {handleChooseMode} = useModeColor();

  return {
    t,
    styles,
    handleChooseLanguage,
    handleChooseMode,
    colors: themeSchema().theme.colors,
  };
}
