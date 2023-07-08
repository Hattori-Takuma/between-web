import { useEffect } from 'react';
import { fetchGetUserData, search, selectUser } from '../features/usesSlics';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { auth } from '../plugins/firebase';
import { UserType } from '../types/UserTypse';
import { getAllFriends } from '../models/friendsInfoApplicationService'

export const usesSearchCheck = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetUserData())
  }, [dispatch]);

};





