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
import { withRouter } from 'next/router';

const navs = [
  { text: 'Home', href: '' },
  { text: 'Portofolio', href: '' },
  { text: 'Pages', href: '' },
  { text: 'Pricing', href: '' },
  { text: 'Services', href: '' },
];
const Navbar = ({ router }) => {
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
      <ul className='hidden md:flex'>
        {navs.map((nav) => (
          <li key={nav.text}>
            <Link href={nav.href}>
              <a
                className={`nav-item hover:scale-x-110  ${
                  router.pathname == nav.href
                    ? 'active font-[700] cursor-pointer text-black z-30'
                    : 'font-[700] mr-2 text-black hover:scale-x-110 z-30'
                }`}
                duration={500}
              >
                {nav.text}
              </a>
            </Link>
          </li>
        ))}
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
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-10'
        }
      >
        {navs.map((nav) => (
          <li key={nav.text}>
            <Link href={nav.href}>
              <a
                className={`nav-item ${
                  router.pathname == nav.href
                    ? 'active py-6 text-4xl scroll-smooth hover:text-gray-100 duration-75'
                    : 'py-6 text-4xl scroll-smooth hover:text-gray-100 duration-75'
                }`}
              >
                {nav.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
