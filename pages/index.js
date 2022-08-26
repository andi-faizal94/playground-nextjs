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
    <div className='bg-[#F2F2EA]'>
      <div className='md:px-24 py-4 bg-[#F2F2EA]'>
        <Navbar />
        <MainContent />
        <div
          // style={{ width: 1505 }}
          className='mx-auto flex flex-col md:flex-row items-center space-y-4 md:justify-between md:w-5/6 md:h-36 bg-[#C37CB4] py-4 px-16'
        >
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              </p>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center md:px-24 mt-20'>
          <div className='w-full md:w-6/12'>
            <div className='text-center md:text-left'>
              <h1 className='w-full text-2xl md:text-6xl font-extrabold font-[Montserrat]'>
                Making <span className='text-orange-400'>your</span>
              </h1>
              <h1 className='w-full text-2xl md:text-6xl text-orange-400 font-extrabold font-[Montserrat]'>
                party <span className='text-black'>moments</span>
              </h1>
              <h1 className='w-full text-2xl md:text-6xl font-extrabold font-[Montserrat]'>
                perfects
              </h1>
            </div>
            <div className='hidden md:block md:my-4 -ml-10'>
              <Image
                src='/Vector 7.png'
                alt='image behance'
                width={234}
                height={12}
                objectFit='contain'
              />
            </div>
            <p className='w-full px-4 py-4 md:px-0 md:w-10/12 font-[Open-Sans]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </p>
          </div>
          <div className='object-cover w-6/12 h-full'>
            <Image
              className='object-cover'
              src='/music 4.png'
              alt='image behance'
              width={753}
              height={682}
              objectFit='cover'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row bg-[#e7e7d8] items-center w-screen mt-32 h-96 p-4'>
        <div className='w-6/12 md:-mt-96 h-full'>
          <Image
            src='/person.png'
            alt='image behance'
            width={753}
            height={682}
            objectFit='contain'
          />
        </div>
        <div className='w-6/12'>
          <h1 className='font-[Montserrat] font-semibold text-3xl'>
            listen to your heart, move
          </h1>
          <h1 className='font-[Montserrat] font-semibold text-3xl'>
            with your heartbeats.
          </h1>
          <p className='font-[Opens-Sans] text-xs md:text-sm'>
            Edward Linkedstein - Designer
          </p>
        </div>
      </div>
      {/* galeri */}
      <div className='flex flex-col justify-center items-center mt-10 mb-10'>
        <h1 className='font-extrabold text-xl md:text-5xl mb-4'>
          <span className='text-yellow-600'>Music </span>Say Things
        </h1>
        <Image
          src='/Vector 4.png'
          alt='image behance'
          width={234}
          height={12}
          objectFit='contain'
        />
      </div>

      {/* image galeri */}
      <div className='grid grid-col-1 md:grid-cols-3 px-4 md:px-48 mb-20'>
        <Image
          src='/Rectangle 6.png'
          alt='image behance'
          width={464}
          height={445}
          objectFit='contain'
        />{' '}
        <Image
          src='/Rectangle 7.png'
          alt='image behance'
          width={464}
          height={445}
          objectFit='contain'
        />{' '}
        <Image
          src='/Rectangle 8.png'
          alt='image behance'
          width={464}
          height={445}
          objectFit='contain'
        />{' '}
        <Image
          src='/Rectangle 10.png'
          alt='image behance'
          width={464}
          height={445}
          objectFit='contain'
        />{' '}
        <Image
          src='/Rectangle 11.png'
          alt='image behance'
          width={464}
          height={445}
          objectFit='contain'
        />{' '}
        <Image
          src='/Rectangle 12.png'
          alt='image behance'
          width={464}
          height={445}
          objectFit='contain'
        />
      </div>

      <div className='bg-black flex flex-col justify-center items-center py-20'>
        <h1 className='text-white font-extrabold text-4xl my-5 mb-5'>
          Ant<span className='text-yellow-600'>stheme</span>
        </h1>
        <p className='text-white text-center my-5 mb-5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor
          <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim{' '}
        </p>

        <form className='flex flex-col md:flex-row my-5 mb-5'>
          <input
            className='outline px-7 py-2'
            type='text'
            placeholder='Enter Your Email'
          />
          <button className='bg-yellow-500 px-7 py-2 text-white mx-auto w-1/2 md:w-full'>
            Subcribe
          </button>
        </form>

        <div className='flex items-center space-x-5'>
          <div>
            <Image
              src='/whatsapp.png'
              alt='image behance'
              width={25}
              height={25}
              objectFit='cover'
            />
          </div>
          <div>
            <Image
              src='/029-instagram 1.png'
              alt='image behance'
              width={25}
              height={25}
              objectFit='cover'
            />
          </div>
          <div>
            <Image
              src='/twitter.png'
              alt='image behance'
              width={25}
              height={25}
              objectFit='cover'
            />
          </div>
          <div>
            <Image
              src='/dribbble (1).png'
              alt='image behance'
              width={25}
              height={25}
              objectFit='cover'
            />
          </div>
          <div>
            <Image
              src='/behance 2.png'
              alt='image behance'
              width={25}
              height={25}
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
