import { localStorageAdapter } from './local_storage_adapter';

export const authProviderAdapter = {
  async logIn(
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
  ) {
    await localStorageAdapter.setItem('token', token);
    setToken(token);
  },
  async logOut(
    _: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
  ) {
    await localStorageAdapter.removeItem('token');
    setToken('');
  },
  async signUp(
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
  ) {
    await localStorageAdapter.setItem('token', token);
    setToken(token);
  }
};
