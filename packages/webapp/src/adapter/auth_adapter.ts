export const authProviderAdapter = {
  async logIn(
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
  ) {
    setToken(token);
  },
  async logOut(
    _: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
  ) {
    setToken('');
  },
  async signUp(
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
  ) {
    setToken(token);
  }
};
