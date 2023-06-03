import Layout from '@/components/Layout';
import { userInfo } from '@/models/userInfoApplicationService';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Router from 'next/router';
import { googleLogin } from '../models/authApplicationServics';

const inter = Inter({ subsets: ['latin'] });

const handler = (path: string) => {
  Router.push(`${path}/`);
};

const google = async () => {
  const user = await googleLogin();
  console.log('🚀 ~ file: login.tsx:17 ~ google ~ user:', user);
  await userInfo(user);
  handler('/friends');
  console.log('user', user);
};

const login = () => {
  return (
    <Layout>
      <Link href="/">[戻る]</Link>

      <Link href="/friends">[ログイン]</Link>

      <button onClick={google}>[googleログイン]</button>
    </Layout>
  );
};
export default login;
