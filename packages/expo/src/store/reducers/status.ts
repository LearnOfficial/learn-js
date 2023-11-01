import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type StatusStoreState = {
  onboardingCompleted: boolean;
};

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    onboardingCompleted: false
  },
  reducers: {
    setOnboardingCompleted(state, actions: PayloadAction<StatusStoreState>) {
      state.onboardingCompleted = actions.payload.onboardingCompleted;
    }
  }
});

export const { setOnboardingCompleted } = statusSlice.actions;
export const statusSliceReducer = statusSlice.reducer;
