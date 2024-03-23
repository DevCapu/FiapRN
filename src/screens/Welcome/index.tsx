import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Images} from '@assets';
import {Button, Separator} from '@components';

import {useWelcome} from './hooks/useWelcome';

export function Welcome() {
  const {t, styles, handleChooseLanguage, handleChooseMode, colors} =
    useWelcome();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('title')}</Text>
      <Text style={styles.subTitle}>{t('sub_title')}</Text>
      <Separator size={36} />
      <Button text={t('enter')} />
      <Separator size={36} />
      <View style={styles.chooseArea}>
        <View style={styles.imageArea}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleChooseLanguage('ptBR')}>
            <Image
              source={Images.flags.brazil}
              style={styles.image}
            />
          </TouchableOpacity>
          <Separator horizontal size={16} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleChooseLanguage('es')}>
            <Image source={Images.flags.spain} style={styles.image} />
          </TouchableOpacity>
        </View>
        <Separator size={10} />
        <Text style={styles.chooseText}>
          {t('welcome_choose_language')}
        </Text>
      </View>
      <Separator size={10} />
      <View style={styles.chooseArea}>
        <View style={styles.imageArea}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleChooseMode('light')}>
            <Icon
              name="sun"
              style={styles.icon}
              size={36}
              solid
              color={colors.yellow}
            />
          </TouchableOpacity>
          <Separator horizontal size={16} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleChooseMode('dark')}>
            <Icon
              name="moon"
              style={styles.icon}
              size={36}
              solid
              color={colors.grayDark}
            />
          </TouchableOpacity>
        </View>
        <Separator size={10} />
        <Text style={styles.chooseText}>
          {t('welcome_choose_theme')}
        </Text>
      </View>
    </View>
  );
}
