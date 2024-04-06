import ptBRCommom from './ptBR-Commom.json';
import ptBRSignIn from '../../screens/SignIn/locale/ptBR.json';
import ptBRWelcome from '../../screens/Welcome/locale/ptBR.json';

export const ptBR = {
  translation: {
    ...ptBRCommom,
    ...ptBRWelcome,
    ...ptBRSignIn,
  },
};
