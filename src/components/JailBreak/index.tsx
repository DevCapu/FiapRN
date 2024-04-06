import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import RNExitApp from 'react-native-exit-app';

import {themeSchema} from '@utils';

const {theme} = themeSchema();

export function JailBreak() {
  const [countDown, setCountDown] = useState<number>(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countDown === 0) {
        RNExitApp.exitApp();
      }

      if (countDown > 0) {
        setCountDown(value => value - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countDown]);

  return (
    <>
      <StatusBar backgroundColor={theme.colors.black} />
      <View style={styles.container}>
        <Text style={styles.title}>☠️</Text>
        <Text style={styles.subTitle}>JailBreak</Text>
        <Text style={styles.text}>
          Parece que você está querendo fazer coisas erradas, não será
          dessa vez
        </Text>
        <Text style={styles.subTitle}>{countDown}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
    padding: 40,
  },
  title: {
    fontSize: 48,
  },
  subTitle: {
    color: theme.colors.white,
    fontFamily: theme.fonts.RobotoBlack,
    marginTop: 10,
    fontSize: 32,
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.RobotoBlack,
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
