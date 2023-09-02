import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface InitialState {
  value: any;
}

const initialState: InitialState = {
  value: {
    address: '',
    name: '',
    uid: '',
  },
};

export const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    withFriend: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { withFriend } = friendSlice.actions;

export const selectFriend = (state: RootState) => state.friend.value;

export default friendSlice.reducer;
