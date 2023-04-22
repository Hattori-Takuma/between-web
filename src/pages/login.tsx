import Layout from '@/components/Layout';
import Link from 'next/link'
import { Inter } from 'next/font/google';
import Router from 'next/router'
import { googleLogin } from "../models/authApplicationServics"

const inter = Inter({ subsets: ['latin'] });

const handler = (path:string) => {
  Router.push(`${path}/`)
}

const google = async () => {
    const result = await googleLogin()
  handler('/friends')
  }

const login = () => {
  return (
    <Layout>
      
        <Link href="/">
          [戻る]
      </Link>
      
      
    

         <Link href="/friends">
          [ログイン]
      </Link>
      
      

         <button onClick={google}>
        [googleログイン]
      </button>

      
   
    </Layout>
  )
}
  export default login;