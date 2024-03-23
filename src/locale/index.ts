// eslint-disable-next-line import/no-named-as-default
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {userPrefStorage} from '@storage';
import Config from 'react-native-config';

import {es} from './es';
import {ptBR} from './ptBR';

const resources = {
  ptBR,
  es,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: userPrefStorage.getString('APP_LANGUAGE'),
  fallbackLng: Config.APP_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
