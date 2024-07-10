/**
 * @format
 */
import 'react-native-gesture-handler';
import JailBreakLib from 'jail-monkey';
import {AppRegistry} from 'react-native';

import {JailBreak} from '@components';

import {name as appName} from './app.json';
import App from './src';

const jailBreakHasDetected = __DEV__
  ? false
  : JailBreakLib.isJailBroken() ||
    JailBreakLib.trustFall() ||
    JailBreakLib.canMockLocation();

AppRegistry.registerComponent(appName, () =>
  jailBreakHasDetected ? JailBreak : App,
);
