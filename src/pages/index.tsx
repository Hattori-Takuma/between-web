import Layout from '@/components/Layout';

import Link from 'next/link'

import { createGptMessage } from '@/models/gptApplicationService';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <section
        className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-
center flex-col"
      >
        <h1 className="mb-4 text-green-500 text-3xl">サンプル</h1>
        <p className="mb-2 text-center">sample text</p>

        <button
          onClick={() => createGptMessage('日本で最も美味しい食べ物は？')}
          className="btn-blue"
        >
          Lets Start!!
        </button>

          <Link href="/login">
        ログイン画面へ
      </Link>



      </section>
    </Layout>
  );
}
