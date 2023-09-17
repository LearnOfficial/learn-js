export const authProviderAdapter = {
  async logIn(setToken) {
    setToken('token');
  },
  async logOut(setToken) {
    setToken('');
  },
  async signUp(setToken) {
    setToken('token');
  }
};
