import Layout from '@/components/Layout';
import Link from 'next/link'
import { Inter } from 'next/font/google';
import Router from 'next/router'
import { logout } from '../models/authApplicationServics'
import { friendsInfo } from '@/models/friendsInfoApplicationService';
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


  return (
    <Layout>
      <div></div>
      <div>お友達たち（仮）</div>
      <button onClick={googleLogOut}>ログアウト</button>
      
      <div>
       <Link href="/login">
          戻る
      </Link>
      </div>
      <button onClick={addFriends}>友達追加</button>


    </Layout>
  )
}
  export default friends;