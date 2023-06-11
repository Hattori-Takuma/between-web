import Layout from '@/components/Layout';
import Link from 'next/link'
import { useAppSelector } from '../hooks/useRTK';
import { selectUser } from '../features/useSlics';
import Router from 'next/router'
import { getFriends2} from '@/models/friendsInfoApplicationService';

const FriendsSarch = () => {
   const user = useAppSelector(selectUser);
// const user = useLoginCheck()

const handler = (path:string) => {
  Router.push(`${path}/`)
}
  return(

    <Layout>  

  <form id="searchForm">
    <input type="text" id="searchInput" placeholder="nameを入力"></input>
    <button type="submit">検索</button>
  </form>
  <ul id="searchResults"></ul>

   <Link href="/friends">
        戻る
      </Link>
      <br/>
      <button onClick={getFriends2}>友達取得</button>

</Layout>
  )
}


export default FriendsSarch;




