import { useEffect } from 'react';
import { search, selectUser } from '../features/usesSlics';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { auth } from '../plugins/firebase';
import { UserType } from '../types/UserTypse';
import { getAllFriends } from '../models/friendsInfoApplicationService'

export const usesSearchCheck = (): boolean => {
  const user: UserType = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const Fri = getAllFriends
    dispatch(search)
    return () => {
      Fri();
    };
  }, [dispatch]);
  return user.uid !== "" ? true : false
};





