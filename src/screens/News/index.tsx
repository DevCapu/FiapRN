import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Error, Loading, NewsList} from './components';
import {useNews} from './hooks/useNews';
import {styles} from './styles';

export function News() {
  const {data, isLoading, error, refetch, isFetching} = useNews();

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (error) {
    return <Error refetch={refetch} />;
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <NewsList
        data={data}
        isLoading={isFetching}
        refetch={refetch}
      />
    </SafeAreaView>
  );
}
