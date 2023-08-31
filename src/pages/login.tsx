import { useLocation } from '@/hooks/useLocation';
import { useLoginCheck } from '@/hooks/useLoginCheck';
import { userInfo } from '@/models/userInfoApplicationService';
import Image from 'next/image';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { googleLogin } from '../models/authApplicationServics';

const Login = () => {
  const isUser = useLoginCheck();
  const { location } = useLocation();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    if (isUser) {
      Router.push(`friends`);
    }
  }, [isUser]);

  useEffect(() => {
    if (user !== undefined) {
      setLocationFunc(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, location]);
  // login
  const google = async () => {
    const user = await googleLogin();
    setUser(user);
  };

  const setLocationFunc = async (user: any) => {
    await userInfo(user, location);
    Router.push(`friends/`);
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <Image
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
            width={500}
            height={500}
          />
          BetWeen
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="flex flex-col items-center justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your Google account
            </h1>
            <button
              onClick={google}
              className=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200  focus:ring-4 focus:outline-none focus:ring-red-100 "
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Sign In With Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
