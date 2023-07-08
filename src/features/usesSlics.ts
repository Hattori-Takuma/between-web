import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { UserType } from '../types/UserTypse'

interface InitialState {
  value: UserType
}

const initialState: InitialState = {
  value: {
    uid: "",
    email: "",
    displayName: "",
    photoUrl: "",
  }
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    search: (state, action) => {
      state.value = action.payload
    }

  },
});

export const { search } = usersSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default usersSlice.reducer;