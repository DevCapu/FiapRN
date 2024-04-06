import {Formik} from 'formik';
import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';

import {Input, Separator} from '@components';

import {useSignIn} from './hooks/useSignIn';
import {useSignInForm} from './hooks/useSignInForm';

export function SignIn() {
  const {t, styles} = useSignIn();
  const {signInSchema, handlePressSubmit, initialValues, formRef} =
    useSignInForm();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('title')}</Text>
      <Text style={styles.subTitle}>{t('sub_title')}</Text>
      <Separator size={12} />
      <Formik
        innerRef={f => (formRef.current = f)}
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values, {setSubmitting}) =>
          handlePressSubmit(values, setSubmitting)
        }>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          isSubmitting,
        }) => (
          <>
            <Input
              value={values.email}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.email}
              placeholder={t('signin_email_input')}
            />
            <Separator size={12} />
            <Input
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
              autoCapitalize="none"
              error={errors.password}
              placeholder={t('signin_password_input')}
            />
            <Separator size={12} />
            <TouchableOpacity
              style={styles.buttonArea}
              activeOpacity={0.7}
              disabled={isSubmitting}
              onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>
                {isSubmitting ? `${t('loading')}...` : t('enter')}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <Separator size={24} />
      <Pressable>
        <Text style={styles.signUpText}>
          {t('signin_button_signup').split('? ')[0]}?{' '}
          <Text style={styles.signUpTextSub}>
            {t('signin_button_signup').split('? ')[1]}
          </Text>
        </Text>
      </Pressable>
    </View>
  );
}
