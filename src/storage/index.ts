import {MMKV} from 'react-native-mmkv';

import Config from 'react-native-config';

export const userPrefStorage = new MMKV({
  id: 'user-pref',
  encryptionKey: Config.ENCRYPT_KEY,
});
