import {useTranslation} from 'react-i18next';

import {userPrefStorage} from '@storage';

export function useTranslate() {
  const {i18n} = useTranslation();
  const appLng = userPrefStorage.getString('APP_LANGUAGE') || 'ptBR';

  function handleChangeLanguage() {
    if (appLng === 'ptBR') {
      userPrefStorage.set('APP_LANGUAGE', 'es');
      i18n.changeLanguage('es');
    } else {
      userPrefStorage.set('APP_LANGUAGE', 'ptBR');
      i18n.changeLanguage('ptBR');
    }
  }

  function handleChooseLanguage(language: 'ptBR' | 'es') {
    userPrefStorage.set('APP_LANGUAGE', language);
    i18n.changeLanguage(language);
  }

  return {
    appLng,
    handleChangeLanguage,
    handleChooseLanguage,
  };
}
