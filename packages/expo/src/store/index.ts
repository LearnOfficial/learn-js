import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { settingsSliceReducer } from './reducers/settings';
import { statusSliceReducer } from './reducers/status';

const appStore = configureStore({
  reducer: combineReducers({
    settingsSliceReducer,
    statusSliceReducer
  })
});

export default appStore;
