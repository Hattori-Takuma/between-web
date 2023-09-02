import {
  getMyFriends,
  getUserInfoByUid,
} from '@/models/friendsInfoApplicationService';
import { useEffect, useState } from 'react';
import Link from 'next/link';



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


   const invite = async (user:any) => {
  await setInviteFriend(
     user.address)
   }
  
 
  
   const handleBothFunctions = (user:any) => {
    invite(user);
     window.location.href = '/BetweenLocation';

    console.log(invite)
  };
  
  return (
    <div>
      <hr />
      *** ShowFriends ***
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <Link href="/BetweenLocation">
              {user.name} / {user.address} / <button onClick={handleBothFunctions}>🍺🍚🍖🍺🍚🍖</button>
                  </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowFriends;
