import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { settingSliceReducer } from './reducers/settings';

const appStore = configureStore({
  reducer: combineReducers({
    settingSliceReducer
  })
});

export default appStore;
