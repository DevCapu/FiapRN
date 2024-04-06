import {FormikProps} from 'formik';
import {useCallback, useEffect, useRef} from 'react';
import {Alert} from 'react-native';
import * as Keychain from 'react-native-keychain';
import * as Yup from 'yup';

import {logCrashlytics} from '@analytics';
import {useBiometrics, usePermissions} from '@hooks';

import {useSignIn} from './useSignIn';

export function useSignInForm() {
  const formRef = useRef<FormikProps<typeof initialValues> | null>();
  const {signInRequest, t} = useSignIn();
  const {checkAndRequestFaceID} = usePermissions();
  const {requestBiometrics} = useBiometrics();

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

  const saveCredentials = async () => {
    await checkAndRequestFaceID().then(async hasFaceID => {
      if (hasFaceID) {
        await requestBiometrics().then(async match => {
          if (match) {
            if (formRef.current) {
              const {email, password} = formRef.current.values;
              await Keychain.setGenericPassword(email, password);
            }
          }
        });
      }
    });
  };

  async function handlePressSubmit(
    {email, password}: typeof initialValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ) {
    try {
      setSubmitting(true);
      const credentials = await Keychain.getGenericPassword();
      console.log(credentials);
      if (!credentials || credentials.username === '_pfo') {
        await saveCredentials().then(async () => {
          await signInRequest.mutateAsync({email, password});
        });
      } else {
        await signInRequest.mutateAsync({email, password});
      }
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

  const checkKeychain = useCallback(async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (
        credentials &&
        credentials.username !== '_pfo' &&
        formRef.current
      ) {
        formRef.current.setValues({
          email: credentials.username,
          password: credentials.password,
        });
      }
    } catch (error) {
      logCrashlytics(String(error));
    }
  }, []);

  useEffect(() => {
    checkKeychain();
  }, [checkKeychain]);

  return {
    signInSchema,
    handlePressSubmit,
    initialValues,
    formRef,
  };
}
