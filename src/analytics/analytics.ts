import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

export async function logEvent(
  name: string,
  params?: {
    [key: string]: any;
  },
) {
  await analytics().logEvent(name, params);
}

export async function logScreen(screenName: string | undefined) {
  await analytics().logScreenView({
    screen_name: screenName,
    screen_class: screenName,
  });
}

export function logCrashlytics(error: string) {
  crashlytics().log(error);
}

export function recordErrorCrashlytics(
  error: Error | any,
  jsError?: string | undefined,
) {
  crashlytics().recordError(error, jsError);
}
