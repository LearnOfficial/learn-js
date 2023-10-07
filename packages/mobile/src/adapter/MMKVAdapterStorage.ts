import {MMKV} from 'react-native-mmkv';
import {IAdapterStorage} from './AdapterStorage';

export const MMKVStorage = new MMKV();

export const MMKVAdapterStorage: IAdapterStorage = {
  getItem: (key: string) => {
    return MMKVStorage.getString(key);
  },
  setItem(key: string, value: string) {
    MMKVStorage.set(key, value);
  },
  removeItem(key) {
    MMKVStorage.delete(key);
  },
};
