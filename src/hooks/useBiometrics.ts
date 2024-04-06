import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometris = new ReactNativeBiometrics({
  allowDeviceCredentials: true,
});

export function useBiometrics() {
  async function requestBiometrics() {
    try {
      const isAvailable = (await rnBiometris.isSensorAvailable())
        .available;

      let faceIDMatch = false;

      if (isAvailable) {
        const {success} = await rnBiometris
          .simplePrompt({
            promptMessage: 'Olá, precisamos do seu rosto',
            cancelButtonText: 'Cancelar',
            fallbackPromptMessage: 'Falha na validação',
          })
          .then(res => res);

        faceIDMatch = success;
      }

      return faceIDMatch;
    } catch (error) {
      return false;
    }
  }

  return {
    requestBiometrics,
  };
}
