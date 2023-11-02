import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { settingsSliceReducer } from './reducers/settings';
import { statusSliceReducer } from './reducers/status';
import { accountSliceReducer } from './reducers/account';
import { notesSliceReducer } from './reducers/notes';

const appStore = configureStore({
  reducer: combineReducers({
    settingsSliceReducer,
    statusSliceReducer,
    accountSliceReducer,
    notesSliceReducer
  })
});

export default appStore;
