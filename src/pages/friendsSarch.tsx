import Layout from '@/components/Layout';
import Link from 'next/link'
import { useAppSelector } from '../hooks/useRTK';
import { selectUser } from '../features/useSlics';
import Router from 'next/router'
import { selectUsers } from '@/features/usersSlics';
import Search from '../components/Search '
// import { getFriends2} from '@/models/friendsInfoApplicationService';

const FriendsSarch = () => {
  const user = useAppSelector(selectUser);
  const users = useAppSelector(selectUsers);
  console.log("🚀 ~ file: friendsSarch.tsx:12 ~ FriendsSarch ~ users:", users)
// const user = useLoginCheck()

const handler = (path:string) => {
  Router.push(`${path}/`)
}
  
  
  return(

    <Layout>  

  
      {/* <input type="text" id="searchInput" placeholder="nameを入力"></input> */}
          <Search/>
    <button type="submit">検索</button>
    
   
       
  
  <ul id="searchResults"></ul>

   <Link href="/friends">
        戻る
      </Link>
      <br/>
      {/* <button onClick={getFriends2}>友達取得</button> */}

     
</Layout>
  )
}


export default FriendsSarch;




