import { getAllFriends } from '@/models/friendsInfoApplicationService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../app/store';
import { UserType } from '../types/UserTypse'

interface InitialState {
  value: UserType[]
}

const initialState: InitialState = {
  value: []
}
export const fetchGetUserData = createAsyncThunk('fetch/getUsers', async () => {
  const res = await getAllFriends()
  return res
})


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    search: (state, action) => {
      state.value = action.payload
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetUserData.fulfilled, (state, action) => {
      console.log('check', action.payload)
      return {
        ...state,
        value: action.payload
      }
    })
  }
});

export const { search } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;


export default usersSlice.reducer;