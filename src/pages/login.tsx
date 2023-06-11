import Layout from '@/components/Layout';
import { userInfo } from '@/models/userInfoApplicationService';
import Link from 'next/link';
import Router from 'next/router';
import { googleLogin } from '../models/authApplicationServics';



const Login = () => {
// const google = async () => {
//   const user = await googleLogin();
//   console.log('🚀 ~ file: login.tsx:17 ~ google ~ user:', user);
//   await userInfo(user);
//   Router.push(`friends/`);
//   console.log('user', user);
// };
  return (
    <Layout>
      <Link href="/">[戻る]</Link>

      <Link href="/friends">[ログイン]</Link>

      {/* <button onClick={google}>[googleログイン]</button> */}
    </Layout>
  );
};
export default Login;
