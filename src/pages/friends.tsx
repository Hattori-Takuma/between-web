import Layout from '@/components/Layout';
import Link from 'next/link'
import { Inter } from 'next/font/google';
import Router from 'next/router'
import { logout } from '../models/authApplicationServics'
import { friendsInfo } from '@/models/friendsInfoApplicationService';


const inter = Inter({ subsets: ['latin'] });

const handler = (path:string) => {
  Router.push(`${path}/`)
}

const addFriends = async () => {
   await friendsInfo()
  }

   const googleLogOut = async () => {
    await logout();
    handler('/login')
    console.log('logout');
   };



const friends = () => {
  return (
     <Layout>
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