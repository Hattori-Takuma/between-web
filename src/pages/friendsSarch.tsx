import Layout from '@/components/Layout';
import Link from 'next/link'
import { Inter } from 'next/font/google';
import { useAppSelector } from '../hooks/useRTK';
import { selectUser } from '../features/useSlics';
import Router from 'next/router'

const inter = Inter({ subsets: ['latin'] });

const friendsSarch = () => {


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
    

</Layout>
  )
}


export default friendsSarch;




