import auth from '@react-native-firebase/auth';

export const signInService = (email: string, password: string) =>
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => response.user);

export const createUserService = (email: string, password: string) =>
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => response.user);
