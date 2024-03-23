declare module 'react-native-config' {
  export interface NativeConfig {
    APP_LANGUAGE?: string;
    ENCRYPT_KEY?: string;
  }
  export const Config: NativeConfig;
  export default Config;
}
