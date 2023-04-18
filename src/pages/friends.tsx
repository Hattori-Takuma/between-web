import Layout from '@/components/Layout';
import Link from 'next/link'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });



const friends = () => {
  return (
     <Layout>
      <div>お友達たち（仮）</div>
       <Link href="/login">
        こちら
      </Link>
    </Layout>
  )
}
  export default friends;