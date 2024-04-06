import {Alert} from 'react-native';
import {PERMISSIONS, check, request} from 'react-native-permissions';

import {isAndroid} from '@utils';

const locationPermission = isAndroid
  ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
  : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

const faceIDPermission = PERMISSIONS.IOS.FACE_ID;

export function usePermissions() {
  async function checkAndRequestLocation() {
    try {
      const respCheck = await check(locationPermission).then(
        res => res,
      );

      switch (respCheck) {
        case 'blocked':
          Alert.alert('Atenção', 'Acesso a localização bloqueada');
          return false;
        case 'denied':
          const respRequest = await request(locationPermission).then(
            res => res,
          );
          return respRequest === ('granted' || 'limited');
        case 'granted':
        case 'limited':
          return true;

        default:
          return false;
      }
    } catch (error) {
      return false;
    }
  }

  async function checkAndRequestFaceID() {
    if (isAndroid) {
      return true;
    }

    try {
      const respCheck = await check(faceIDPermission).then(
        res => res,
      );
      console.log(respCheck);

      switch (respCheck) {
        case 'blocked':
          Alert.alert('Atenção', 'Acesso a localização bloqueada');
          return false;
        case 'denied':
          const respRequest = await request(faceIDPermission).then(
            res => res,
          );
          return respRequest === ('granted' || 'limited');
        case 'granted':
        case 'limited':
          return true;

        default:
          return false;
      }
    } catch (error) {
      return false;
    }
  }

  return {checkAndRequestLocation, checkAndRequestFaceID};
}
