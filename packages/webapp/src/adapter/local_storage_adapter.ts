export const localStorageAdapter = {
  async setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  },

  async getItem(key: string) {
    return localStorage.getItem(key);
  },

  async removeItem(key: string) {
    localStorage.removeItem(key);
  },

  async clear() {
    localStorage.clear();
  }
};
