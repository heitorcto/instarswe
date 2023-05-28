'use client';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/logo.png';
import { BsFillMoonFill, BsFillSunFill, BsList } from "react-icons/bs";
import { useThemeContext } from '@/utils/ThemeContextProvider'

import { useState } from 'react';

export default function Navbar() {
  const [menuOpenMobile, setMenuOpenMobile] = useState(false);
  const { dark, setDark } = useThemeContext();

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-00 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href={'/'}>
            <Image className={dark ? 'contrast-0' : ''} src={Logo} width={150} alt="Imagem da empresa Instar - Sistemas Web" />
          </Link>
          <div className="border border-gray-500 p-3 rounded-full cursor-pointer" onClick={() => setDark(!dark)}>
            {dark ? <BsFillSunFill className="text-gray-500" /> : <BsFillMoonFill />}
          </div>
          <div className="flex md:order-2">
            <div type="button" className="cursor-pointer inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setMenuOpenMobile(!menuOpenMobile)}>
              <BsList className="text-3xl" />
            </div>
          </div>
          <div className={`items-center justify-between ${menuOpenMobile ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href={'/'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href={'/about'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link href={'/sg'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  SG
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

