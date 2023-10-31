import { configureStore } from '@reduxjs/toolkit';
import { settingSliceReducer } from './reducers/settings';

const appStore = configureStore({
  reducer: settingSliceReducer
});

export default appStore;
