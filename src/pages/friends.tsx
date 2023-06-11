import Layout from '@/components/Layout';
import Link from 'next/link'
import Router from 'next/router'
import { logout } from '../models/authApplicationServics'
import { friendsInfo,getFriends } from '@/models/friendsInfoApplicationService';
import { selectUser } from '../features/useSlics';
import { useAppSelector } from '../hooks/useRTK';

const Friends = () => {
 const user = useAppSelector(selectUser);

const handler = (path:string) => {
  Router.push(`${path}/`)
}

const addFriends = async () => {
  await friendsInfo(user.uid)
}
  

   const googleLogOut = async () => {
    await logout();
    handler('/login')
    console.log('logout');
   };
  
  
  const get = async () => {
    await getFriends(user.uid)
  }


  return (
    <Layout>
      <div></div>
      <div>名前：{user.displayName}</div>
    




      <button onClick={googleLogOut}>ログアウト</button>
      
      <div>
       <Link href="/login">
          戻る
      </Link>
      </div>
      <button onClick={addFriends}>友達追加</button>
      <br />
      
      <button onClick={get}>友達取得</button>
      <br/>
      <Link href="/friendsSarch">
          友達検索
      </Link>
      

    </Layout>
  )
}
  export default Friends;