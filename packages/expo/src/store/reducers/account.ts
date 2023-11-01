import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AccountStoreState = {
  token: string;
};

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    token: ''
  } as AccountStoreState,
  reducers: {
    setToken(state, actions: PayloadAction<string>) {
      state.token = actions.payload;
    }
  }
});

export const { setToken } = accountSlice.actions;
export const accountSliceReducer = accountSlice.reducer;
