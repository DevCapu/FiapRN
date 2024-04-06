import {useMutation} from '@tanstack/react-query';
import {useTranslation} from 'react-i18next';

import {signInService} from '@services';
import {themeSchema} from '@utils';

import {stylesWithTheme} from '../styles';

export function useSignIn() {
  const {theme} = themeSchema();
  const styles = stylesWithTheme(theme);
  const {t} = useTranslation();

  const signInRequest = useMutation({
    mutationFn: ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => signInService(email, password),
  });

  return {
    styles,
    t,
    signInRequest,
  };
}
