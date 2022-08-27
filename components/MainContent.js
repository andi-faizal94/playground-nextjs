import Image from 'next/image';
import React from 'react';

const MainContent = ({ id }) => {
  return (
    <div
      className='relative flex flex-col justify-center items-center min-h-screen'
      id={id}
    >
      <h1 className='text-[Montserrat] text-center font-semibold text-5xl mt-14 mb-5'>
        Playing The Mood !
      </h1>
      <div className='bg-orange-400 px-4 py-2 text-white rounded-sm'>
        Lets Rock
      </div>
      <div>
        <Image
          src='/music.png'
          alt='image behance'
          width={415}
          height={492}
          objectFit='contain'
        />
      </div>
      <div className='hidden md:block md:absolute md:top-44 md:left-28'>
        <Image
          src='/music 2.png'
          alt='image behance'
          width={107}
          height={107}
          objectFit='contain'
        />
      </div>
      <div className='hidden md:block md:absolute md:top-14 md:left-28'>
        <Image
          src='/music 1.png'
          alt='image behance'
          width={73}
          height={73}
          objectFit='contain'
        />
      </div>
      <div className='hidden md:block md:absolute md:top-24 md:right-28'>
        <Image
          src='/music 3.png'
          alt='image behance'
          width={107}
          height={107}
        />
      </div>
      <div className='hidden md:block md:absolute md:top-24 md:-left-24'>
        <Image
          src='/Vector 1.png'
          alt='image behance'
          width={194}
          height={54}
        />
      </div>
      <div className='hidden md:block md:absolute md:top-96 md:-left-32'>
        <Image
          src='/Vector 2.png'
          alt='image behance'
          width={460}
          height={61}
          objectFit='contain'
        />
      </div>
      <div className='hidden md:block md:absolute md:top-80 md:right-28'>
        <Image
          src='/Vector 3.png'
          alt='image behance'
          width={194}
          height={54}
          objectFit='contain'
        />
      </div>
      <div className='hidden md:block md:absolute md:top-96 md:right-0'>
        <Image
          src='/Ellipse 1.png'
          alt='image behance'
          width={28}
          height={14}
          objectFit='contain'
        />
      </div>
      <div className='hidden md:bg-cover md:block md:absolute md:top-10 md:right-0'>
        <Image
          src='/Ellipse 3.png'
          alt='image behance'
          width={60}
          height={31}
          objectFit='contain'
        />
      </div>
      <div className='hidden md:block md:absolute md:top-96 md:right-56 bg-orange-400 w-10 h-10 rounded-full'></div>
      <div className='hidden md:block md:absolute md:top-80 md:left-64 bg-blue-400 w-10 h-10 rounded-full'></div>
    </div>
  );
};

export default MainContent;
