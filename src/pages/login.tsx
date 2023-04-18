import Layout from '@/components/Layout';
import Link from 'next/link'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });






  

const login = () => {
  return (
    <Layout>
      
         <Link href="/friends">
        ログイン（仮）
      </Link>
      
   
    </Layout>
  )
}
  export default login;