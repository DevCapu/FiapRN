import remoteConfig, {
  FirebaseRemoteConfigTypes,
} from '@react-native-firebase/remote-config';
import {useCallback, useEffect} from 'react';
import {create} from 'zustand';

export const remoteKeysName = {
  shouldUseLanguage: 'shouldUseLanguage',
  shouldUseTheme: 'shouldUseTheme',
} as const;

export const remoteConfigDefaultKeys = {
  [remoteKeysName.shouldUseLanguage]: true,
  [remoteKeysName.shouldUseTheme]: true,
};

interface RemoteConfigState {
  featuresToggles: FirebaseRemoteConfigTypes.ConfigValues;
  fetchRemoteConfigKeys: (
    ft: FirebaseRemoteConfigTypes.ConfigValues,
  ) => void;
}

export const useRemoteConfigStore = create<RemoteConfigState>(
  set => ({
    featuresToggles: {},
    fetchRemoteConfigKeys: ft => {
      set({featuresToggles: ft});
    },
  }),
);

export function useRemoteConfig() {
  const fetchRemoteConfigKeys = useRemoteConfigStore(
    state => state.fetchRemoteConfigKeys,
  );

  const initRemoteConfig = useCallback(() => {
    remoteConfig()
      .setDefaults(remoteConfigDefaultKeys)
      .then(() => remoteConfig().fetchAndActivate())
      .then(() => {
        fetchRemoteConfigKeys(remoteConfig().getAll());
      })
      .catch(e => {
        console.error(e);
      });
  }, [fetchRemoteConfigKeys]);

  useEffect(() => {
    initRemoteConfig();
  }, [initRemoteConfig]);
}
