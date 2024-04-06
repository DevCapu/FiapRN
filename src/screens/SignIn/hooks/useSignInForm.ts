import {Alert} from 'react-native';
import * as Yup from 'yup';

import {logCrashlytics} from '@analytics';

import {useSignIn} from './useSignIn';

export function useSignInForm() {
  const {signInRequest, t} = useSignIn();

  const initialValues = {
    email: '',
    password: '',
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('signin_email_input_error'))
      .required(t('signin_input_error_required')),
    password: Yup.string().required(t('signin_input_error_required')),
  });

  async function handlePressSubmit(
    {email, password}: typeof initialValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ) {
    try {
      setSubmitting(true);
      await signInRequest.mutateAsync({email, password});
    } catch (error) {
      logCrashlytics(String(error));
      const err: any = error;

      if (err.code === 'auth/invalid-credential') {
        Alert.alert('Atenção', 'Usuário ou senha inválida');
      }
    } finally {
      setSubmitting(false);
    }
  }

  return {
    signInSchema,
    handlePressSubmit,
    initialValues,
  };
}
