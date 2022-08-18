import Head from 'next/head';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { allpost, getAllPost } from '../services/allpost';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
export default function Home() {
  const [dataPost, setDataPost] = useState([]);

  // allpost.getAllPost().then((res) => setDataPost(res));

  // const add = useCallback(() => {}, []);

  return (
    <div className='md:px-24 py-4 bg-[#F2F2EA]'>
      <Navbar />
      <MainContent />
      <div className='mx-auto flex flex-col md:flex-row items-center space-y-4 md:justify-between md:w-3/4 md:h-36 bg-[#C37CB4] py-4 px-16'>
        <div className='flex flex-col md:flex-row space-y-4 md:space-x-4'>
          <Image
            src='/Frame (3).png'
            alt='image behance'
            width={128}
            height={114}
            objectFit='contain'
          />
          <div className='flex flex-col md:items-start'>
            <p>Revive with music</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row space-y-4 md:space-x-4'>
          <Image
            src='/Frame (4).png'
            alt='image behance'
            width={120}
            height={124}
            objectFit='contain'
          />
          <div className='flex flex-col  items-center md:items-start'>
            <p>Music can add memories</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
