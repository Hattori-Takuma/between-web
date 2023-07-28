import Layout from '@/components/Layout';
import Link from 'next/link'
import { useAppSelector } from '../hooks/useRTK';
import { selectUser } from '../features/useSlics';
import Router from 'next/router'
import { selectUsers } from '@/features/usersSlics';
import Search from '../components/Search '
import React, { useState } from 'react';
import SearchResultComponent from '@/components/SearchResultComponen';

// import { getFriends2} from '@/models/friendsInfoApplicationService';

const FriendsSarch = () => {
  const user = useAppSelector(selectUser);
  const users = useAppSelector(selectUsers);
  console.log("🚀 ~ file: friendsSarch.tsx:12 ~ FriendsSarch ~ users:", users)
  // const user = useLoginCheck()
 const handler = (path: string) => {
    Router.push(`${path}/`)
  }

 const [searchKeyword, setSearchKeyword] = useState('');


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(event.target.value);
    };

  
    return (

      <Layout>

  
        <div>
    <h1> ログイン中：「{user.displayName}」</h1>

          <h3>「FriendsSarch」</h3>
          <input
            type="text"
            value={searchKeyword}
            onChange={handleSearchChange}
            placeholder="uid..."
          />
          <SearchResultComponent searchKeyword={searchKeyword} />
      



        </div>
        <button type="submit">検索</button>
    
   
       
  
        <ul id="searchResults"></ul>

        <Link href="/friends">
          戻る
      </Link>
        <br />
        {/* <button onClick={getFriends2}>友達取得</button> */}

     
      </Layout>
    )
  

}
export default FriendsSarch;






