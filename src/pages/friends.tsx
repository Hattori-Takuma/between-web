import Layout from '@/components/Layout';
import Link from 'next/link'
import { Inter } from 'next/font/google';
import Router from 'next/router'
import { logout } from '../models/authApplicationServics'
import { friendsInfo,getFriends } from '@/models/friendsInfoApplicationService';
import { selectUser } from '../features/useSlics';
import { useAppSelector } from '../hooks/useRTK';
import{useLoginCheck}from'../hooks/useLoginCheck'


const inter = Inter({ subsets: ['latin'] });



const friends = () => {
 const user = useAppSelector(selectUser);

// const user = useLoginCheck()


const handler = (path:string) => {
  Router.push(`${path}/`)
}

const addFriends = async () => {
  // const userObj = {
  //   uid: user.uid,
  //   uname: "test1"
  // }
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
      

    </Layout>
  )
}
  export default friends;