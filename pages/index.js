import Head from 'next/head';
import Image from 'next/image';
import { allpost, getAllPost } from '../services/allpost';

export default function Home() {
  allpost.getAllPost().then((res) => console.log(res));

  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <div className=''>
          <h1 className='text-2xl'>Hallo</h1>
        </div>
      </main>

      <footer className=''></footer>
    </div>
  );
}
