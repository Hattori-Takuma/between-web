import {
  getMyFriends,
  getUserInfoByUid,
} from '@/models/friendsInfoApplicationService';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const ShowFriends = ({ uid }: { uid: string }) => {
  const [users, setUsers] = useState<any[]>([]);
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
          return (
            <li key={index}>
              {user.name} / {user.address} / <Link href="/Map">🍺🍚🍖</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowFriends;
