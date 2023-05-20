import { FC } from 'react';
import { LayoutProps } from '../types/types';
import Footer from './Footer';
import Navbar from './Navbar';
import { useEffect } from 'react';
import{useLoginCheck} from '../hooks/useLoginCheck'



const Layout: FC<LayoutProps> = ({ children }) => {
  const isLogin = useLoginCheck();
  useEffect(() => {
    if (!isLogin) {
      console.log(`login status : [ ${isLogin} ]`);
    }
  }, [isLogin]);


  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col items-center w-full mx-auto">
        <Navbar />
        <main className="w-full pb-12 px-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
