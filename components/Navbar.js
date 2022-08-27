import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import Image from 'next/image';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

// const navs = [
//   { text: 'Home', href: '' },
//   { text: 'Portofolio', href: '' },
//   { text: 'Pages', href: '' },
//   { text: 'Pricing', href: '' },
//   { text: 'Services', href: '' },
// ];
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = (e) => {
    setNav(!nav);
  };
  return (
    <nav className='w-full flex justify-around items-center text-gray-300 z-30'>
      <div>
        <Link href='/' duration={500}>
          <a>
            <h1 className='text-black font-[700] hover:scale-x-110'>
              Ants
              <span className='text-orange-400 font-bold font-serif '>
                Theme
              </span>
            </h1>
          </a>
        </Link>
      </div>

      {/* menu */}
      <ul className='hidden md:flex space-x-3'>
        <li>
          <a href='#home' duration={500}>
            Home
          </a>
        </li>
        <li>
          <a href='#portofolio' duration={500}>
            Portofolio
          </a>
        </li>
        <li>
          <a href='#pages' duration={500}>
            Pages
          </a>
        </li>
        <li>
          <a href='#pricing' duration={500}>
            Pricing
          </a>
        </li>
        <li>
          <a href='#services' duration={500}>
            Services
          </a>
        </li>
      </ul>

      <ul className='hidden md:flex'>
        <li className='flex items-center space-x-4'>
          <div>
            <Image
              src='/behance.png'
              alt='image behance'
              width={30}
              height={30}
            />
          </div>
          <div>
            <Image
              src='/instagram.png'
              alt='image behance'
              width={30}
              height={30}
            />
          </div>
          <div>
            <Image
              src='/dribbble.png'
              alt='image behance'
              width={30}
              height={30}
            />
          </div>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-30'>
        {!nav ? (
          <FaBars className='transition duration-500 ease-out' />
        ) : (
          <FaTimes className='transition duration-500 ease-out' />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center z-10'
        }
      >
        {/* <ul className='flex flex-col'> */}
        <li>
          <a className='text-white' href='#home' duration={500}>
            Home
          </a>
        </li>
        <li>
          <a href='#portofolio' duration={500}>
            Portofolio
          </a>
        </li>
        <li>
          <a href='#pages' duration={500}>
            Pages
          </a>
        </li>
        <li>
          <a href='#pricing' duration={500}>
            Pricing
          </a>
        </li>
        <li>
          <a href='#services' duration={500}>
            Services
          </a>
        </li>
        {/* </ul> */}
      </ul>
    </nav>
  );
};

export default Navbar;
