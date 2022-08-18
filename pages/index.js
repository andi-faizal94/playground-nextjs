import Head from 'next/head';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { allpost, getAllPost } from '../services/allpost';
import Navbar from '../components/Navbar';
export default function Home() {
  const [dataPost, setDataPost] = useState([]);

  // allpost.getAllPost().then((res) => setDataPost(res));

  // const add = useCallback(() => {}, []);

  return (
    <div className='md:px-24 py-4'>
      <Navbar />
    </div>
  );
}
