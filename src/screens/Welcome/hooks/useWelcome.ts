import {useTranslation} from 'react-i18next';

import {
  useModeColor,
  useRemoteConfigStore,
  useTranslate,
} from '@hooks';
import {coordinator} from '@routes';
import {themeSchema} from '@utils';

import {stylesWithTheme} from '../styles';

export function useWelcome() {
  const {t} = useTranslation();
  const styles = stylesWithTheme(themeSchema().theme);
  const {handleChooseMode} = useModeColor();
  const {handleChooseLanguage} = useTranslate();
  const featuresToggles = useRemoteConfigStore(
    state => state.featuresToggles,
  );
  const {goToNews} = coordinator;

  return {
    t,
    styles,
    handleChooseLanguage,
    handleChooseMode,
    colors: themeSchema().theme.colors,
    featuresToggles,
    goToNews,
  };
}
