import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Images} from '@assets';
import {Separator} from '@components';
import {remoteKeysName} from 'src/hooks/useRemoteConfig';

import {useWelcome} from './hooks/useWelcome';

export function Welcome() {
  const {
    t,
    handleChooseLanguage,
    handleChooseMode,
    styles,
    colors,
    featuresToggles,
    goToNews,
  } = useWelcome();

  return (
    <LinearGradient
      colors={[colors.primary, colors.primaryDark]}
      style={styles.container}>
      <Text style={styles.title}>{t('title')}</Text>
      <Text style={styles.subTitle}>{t('sub_title')}</Text>
      <Separator size={36} />
      <TouchableOpacity
        onPress={goToNews}
        activeOpacity={0.7}
        style={styles.button}>
        <Text style={styles.buttonText}>
          {t('welcome_access_system')}
        </Text>
      </TouchableOpacity>
      {featuresToggles[
        remoteKeysName.shouldUseLanguage
      ]?.asBoolean() && (
        <>
          <Separator size={36} />
          <View style={styles.chooseArea}>
            <View style={styles.imageArea}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleChooseLanguage('ptBR')}>
                <Image
                  style={styles.image}
                  source={Images.flags.brazil}
                />
              </TouchableOpacity>
              <Separator size={16} horizontal />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleChooseLanguage('es')}>
                <Image
                  style={styles.image}
                  source={Images.flags.spain}
                />
              </TouchableOpacity>
            </View>
            <Separator size={10} />
            <Text style={styles.chooseText}>
              {t('welcome_choose_language')}
            </Text>
          </View>
        </>
      )}
      {featuresToggles[
        remoteKeysName.shouldUseTheme
      ]?.asBoolean() && (
        <>
          <Separator size={24} />
          <View style={styles.chooseArea}>
            <View style={styles.imageArea}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleChooseMode('light')}>
                <Icon
                  style={styles.icon}
                  size={36}
                  solid
                  name="sun"
                  color={colors.yellow}
                />
              </TouchableOpacity>
              <Separator size={16} horizontal />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleChooseMode('dark')}>
                <Icon
                  style={styles.icon}
                  size={36}
                  solid
                  name="moon"
                  color={colors.grayDark}
                />
              </TouchableOpacity>
            </View>
            <Separator size={10} />
            <Text style={styles.chooseText}>
              {t('welcome_choose_theme')}
            </Text>
          </View>
        </>
      )}
    </LinearGradient>
  );
}
