import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    //     <Layout>
    //       <section
    //         className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-
    // center flex-col"
    //       >
    //         <h1 className="mb-4 text-cyan-500 text-8xl 	--tw-text-opacity: 0;">
    //           Between
    //         </h1>

    //         <button
    //           onClick={() => createGptMessage('日本で最も美味しい食べ物は？')}
    //           className="btn-blue"
    //         >
    //           Lets Start!!
    //         </button>

    //         <Link href="/login">ログイン画面へ</Link>
    //       </section>
    //     </Layout>
    <div className="relative">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <Image
          className="h-full w-full object-cover"
          src="https://www.stockvault.net/data/2016/03/14/187739/preview16.jpg"
          alt="logo"
          width={500}
          height={500}
        />
        <Link href="/login">
          <div className="flex absolute left-0 right-0 top-0 bottom-0 m-auto w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">
              Welcome to between Click Here!
            </h2>
            <p className="animate-spin font-sans text-lg text-white">⭐️</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
