import React from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';

import {Separator} from '@components';
import {TabNewsContentList} from '@services';

import {NewsListItem} from './NewsListItem';
import {EmptyList} from '..';

interface NewsListProps {
  data: TabNewsContentList | undefined;
  isLoading: boolean;
  refetch(): void;
}

export function NewsList({data, isLoading, refetch}: NewsListProps) {
  const separatorItem = () => {
    return <Separator size={10} />;
  };

  return (
    <FlatList
      data={data}
      scrollEnabled
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
      contentContainerStyle={styles.contentStyles}
      renderItem={({item}) => <NewsListItem item={item} />}
      ListEmptyComponent={<EmptyList />}
      ItemSeparatorComponent={separatorItem}
    />
  );
}

const styles = StyleSheet.create({
  contentStyles: {
    marginVertical: 10,
    paddingBottom: 20,
  },
});
