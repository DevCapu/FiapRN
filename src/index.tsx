import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';

import '@locale';

import {Routes} from '@routes';

import {useApp} from './hooks/useApp';

const queryClient = new QueryClient();

export default function App() {
  useApp();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
