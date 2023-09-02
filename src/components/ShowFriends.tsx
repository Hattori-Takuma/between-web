import {
  getMyFriends,
  getUserInfoByUid,
} from '@/models/friendsInfoApplicationService';
import Router from 'next/router';
import { useEffect, useState } from 'react';

const ShowFriends = ({ uid }: { uid: string }) => {
  const [users, setUsers] = useState<any[]>([]);
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

  const invite = async (user: any) => {
    await setInviteFriend(user.address);
  };

  const handleClick2 = () => {
    Router.push('/betweenLocation');
  };

  const handleBothFunctions = (user: any) => {
    invite(user);
    handleClick2();
  };

  return (
    <div>
      <hr />
      *** ShowFriends ***
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.name} / {user.address} / <button onClick={handleBothFunctions}>🍺🍚🍖🍺🍚🍖</button> <Link href="/BetweenLocation">進む
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowFriends;
