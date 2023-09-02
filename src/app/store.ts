import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import friendReducer from '../features/friendSlics';
import usersReducer from '../features/usersSlics';
import userReducer from '../features/useSlics';

export const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    friend: friendReducer,
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
