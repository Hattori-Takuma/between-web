import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from '../features/useSlics'

export const store = configureStore({
  reducer: {
    user: userReducer,
    users: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;