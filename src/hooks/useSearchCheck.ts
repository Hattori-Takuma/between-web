import { useEffect } from 'react';
import { fetchGetUserData, search, selectUser } from '../features/usersSlics';
import { useAppDispatch, useAppSelector } from './useRTK';
import { auth } from '../plugins/firebase';
import { UserType } from '../types/UserTypse';
import { getAllFriends } from '../models/friendsInfoApplicationService'

export const useSearchCheck = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetUserData())
  }, [dispatch]);
};





