import {MMKVAdapterStorage} from './MMKVAdapterStorage';

export type IAdapterStorage = {
  getItem: (key: string) => string | undefined;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
};

export const AdapterStorage: IAdapterStorage = MMKVAdapterStorage;
