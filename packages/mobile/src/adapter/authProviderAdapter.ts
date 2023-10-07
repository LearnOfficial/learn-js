import {AdapterStorage} from './AdapterStorage';

export const authProviderAdapter = {
  async logIn(
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>,
  ) {
    AdapterStorage.setItem('token', token);
    setToken(token);
  },
  async logOut(setToken: React.Dispatch<React.SetStateAction<string>>) {
    AdapterStorage.removeItem('token');
    setToken('');
  },
  async signUp(
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>,
  ) {
    AdapterStorage.setItem('token', token);
    setToken(token);
  },
};
