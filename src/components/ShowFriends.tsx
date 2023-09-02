import { withFriend } from '@/features/friendSlics';
import { useAppDispatch } from '@/hooks/useRTK';
import {
  getMyFriends,
  getUserInfoByUid,
} from '@/models/friendsInfoApplicationService';
import Router from 'next/router';
import { useEffect, useState } from 'react';

const ShowFriends = ({ uid }: { uid: string }) => {
  const [users, setUsers] = useState<any[]>([]);
  const dispatch = useAppDispatch();

  const [inviteFriend, setInviteFriend] = useState<any[]>([]);

  useEffect(() => {
    getFriends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  const getFriends = async () => {
    const uids = await getMyFriends(uid);
    const users = await getUserInfoByUid(uids);
    setUsers(users);
  };

  return (
    <div>
      <hr />
      *** ShowFriends ***
      <ul>
        {users.map((user, index) => {
          const invite = async (user: any) => {
            await setInviteFriend(user.address);
          };
          const handleBothFunctions = (user: any) => {
            console.log(
              '🚀 ~ file: ShowFriends.tsx:34 ~ handleBothFunctions ~ user:',
              user
            );
            invite(user);
            dispatch(withFriend(user));
            Router.push('/betweenLocation');
          };
          return (
            <li key={index}>
              {user.name} / {user.address} /{' '}
              <button onClick={() => handleBothFunctions(user)}>
                🍺🍚🍖🍺🍚🍖
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowFriends;
