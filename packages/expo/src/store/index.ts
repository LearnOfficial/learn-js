import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { settingsSliceReducer } from './reducers/settings';
import { statusSliceReducer } from './reducers/status';
import { accountSliceReducer } from './reducers/account';

const appStore = configureStore({
  reducer: combineReducers({
    settingsSliceReducer,
    statusSliceReducer,
    accountSliceReducer
  })
});

export default appStore;
