import Layout from '@/components/Layout';
import {
  friendsInfo,
  getFriends,
} from '@/models/friendsInfoApplicationService';
import Link from 'next/link';
import Router from 'next/router';
import { selectUser } from '../features/useSlics';
import { selectUsers } from '../features/usersSlics';
import { useAppSelector } from '../hooks/useRTK';
import { logout } from '../models/authApplicationServics';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';



const Friends = () => {
  const user = useAppSelector(selectUser);
  const users = useAppSelector(selectUsers);
  console.log(users,"確認")


  const handler = (path: string) => {
    Router.push(`${path}/`);
  };

  const addFriends = async () => {
    await friendsInfo(user.uid);
  };

  const googleLogOut = async () => {
    await logout();
    handler('/login');
    console.log('logout');
  };

  const get = async () => {
    await getFriends(user.uid);
  };





  return (
    <Layout>
      <div></div>
      <div>名前：{user.displayName}</div>
      <div>テスト：{user.displayName }</div>
     

      <button onClick={googleLogOut}>ログアウト</button>

      <div>
        <Link href="/login">戻る</Link>
      </div>
      {/* <button onClick={addFriends}>友達追加</button>
      <br />

      <button onClick={get}>友達取得</button> */}
      <br />
      <Link href="/friendsSarch">友達検索</Link>
      <br />
      <Link href="/locationinfo">位置情報取得</Link>
    </Layout>
  );
};
export default Friends;
