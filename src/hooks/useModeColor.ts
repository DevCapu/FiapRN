import {useReducer} from 'react';

import {userPrefStorage} from '@storage';

export function useModeColor() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const modeSchema = {
    light: 'light',
    dark: 'dark',
  };

  const mode = userPrefStorage.getString('mode') || modeSchema.light;

  function handleChangeMode() {
    if (mode === modeSchema.light) {
      userPrefStorage.set('mode', modeSchema.dark);
    } else {
      userPrefStorage.set('mode', modeSchema.light);
    }
    forceUpdate();
  }

  function handleChooseMode(theme: 'light' | 'dark') {
    userPrefStorage.set('mode', theme);
    forceUpdate();
  }

  return {
    mode,
    handleChangeMode,
    handleChooseMode,
    forceUpdate,
  };
}
