'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LanguageDropDown from './drop-down/LanguageDropDown';

import { X } from 'lucide-react';
import { Button } from './ui/button';

import Logo from '/public/logo.svg';
const Navbar = () => {
  const [toogle, setToogle] = useState<boolean>(false);

  return (
    <nav className="py-6 flex justify-between items-center">
      <Link className="block tablet:hidden" href={'/'}>
        <Image priority src={Logo} alt="logo" width={112} />
      </Link>
      <ul className="hidden items-center gap-10 tablet:flex">
        <li>
          <Link href={'/'}>
            <Image priority src={Logo} alt="logo" width={112} />
          </Link>
        </li>
        <li>
          <Link
            className="font-inter font-semibold leading-6 text-base text-gray-600 hover:text-gray-900"
            onClick={() => setToogle(false)}
            href={'#news'}
          >
            Yangiliklar
          </Link>
        </li>
        <li>
          <Link
            className="font-inter font-semibold leading-6 text-base text-gray-600 hover:text-gray-900"
            onClick={() => setToogle(false)}
            href={'#statistika'}
          >
            Statistika
          </Link>
        </li>
        <li>
          <Link
            className="font-inter font-semibold leading-6 text-base text-gray-600 hover:text-gray-900"
            onClick={() => setToogle(false)}
            href={'#links'}
          >
            Foydali havolalar
          </Link>
        </li>
        <li>
          <Link
            className="font-inter font-semibold leading-6 text-base text-gray-600 hover:text-gray-900"
            href={'#contact'}
          >
            Kontakt
          </Link>
        </li>
      </ul>
      <div className="flex gap-4 tablet:gap-6 items-center">
        <LanguageDropDown />
        <Link className="hidden tablet:block" href={''}>
          <Button className="text-white transition duration-200 bg-[#00359E] hover:bg-[#00359ee9]">
            Krish
          </Button>
        </Link>
        <Menu
          className="block tablet:hidden"
          onClick={() => setToogle(true)}
          size={24}
        />
      </div>

      {/* responsive Navbar */}

      {toogle ? (
        <div
          className={`fixed z-10 top-0  right-0 left-0 bottom-0 bg-white p-4 transition-all  duration-300 ease-in-out block tablet:hidden`}
        >
          <div className="flex items-center justify-between pt-2">
            <Link onClick={() => setToogle(false)} href={'/'}>
              <Image priority src={Logo} alt="logo" width={112} />
            </Link>
            <X onClick={() => setToogle(false)} size={24} />
          </div>
          <div className="pt-6 flex flex-col h-full justify-between">
            <ul className="flex flex-col gap-5">
              <li>
                <Link
                  className="font-inter font-semibold leading-6 text-base text-gray-600 hover:text-gray-900"
                  onClick={() => setToogle(false)}
                  href={'#news'}
                >
                  Yangiliklar
                </Link>
              </li>
              <li>
                <Link
                  className="font-inter font-semibold leading-6 text-base text-gray-600 hover:text-gray-900"
                  onClick={() => setToogle(false)}
                  href={'#statistika'}
                >
                  Statistika
                </Link>
              </li>
              <li>
                <Link
                  className="font-inter font-semibold leading-6 text-base text-gray-600 hover:text-gray-900"
                  onClick={() => setToogle(false)}
                  href={'#links'}
                >
                  Foydali havolalar
                </Link>
              </li>
              <li>
                <Link
                  className="font-inter font-semibold leading-6 text-base text-gray-600 hover:text-gray-900"
                  onClick={() => setToogle(false)}
                  href={'#contact'}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
            <Link href={''}>
              <Button className="text-white w-full mb-[45px] transition duration-200 bg-[#00359E] hover:bg-[#00359ee9]">
                Krish
              </Button>
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
