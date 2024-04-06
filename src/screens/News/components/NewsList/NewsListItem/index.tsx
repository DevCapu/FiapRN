import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {TabNewsContent} from '@services';
import {themeSchema} from '@utils';

const {theme} = themeSchema();

interface NewsListItemProps {
  item: TabNewsContent;
}

export function NewsListItem({item}: NewsListItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.owner_username}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonArea}
        onPress={() => {
          Linking.openURL(
            `https://www.tabnews.com.br/${item.owner_username}/${item.slug}`,
          );
        }}>
        <Text style={styles.buttonText}>Leia mais</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.white,
    marginHorizontal: 10,
    borderRadius: 4,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  title: {
    fontFamily: theme.fonts.RobotoMedium,
    fontSize: 16,
  },
  author: {
    fontFamily: theme.fonts.RobotoRegular,
    fontSize: 14,
    fontWeight: '600',
  },
  buttonArea: {
    alignSelf: 'flex-end',
    padding: 5,
    backgroundColor: theme.colors.blue,
    borderRadius: 4,
  },
  buttonText: {
    fontFamily: theme.fonts.RobotoRegular,
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.white,
  },
});
