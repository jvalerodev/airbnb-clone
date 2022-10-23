import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MagnifyingGlassIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Calendar from '@/components/Calendar';

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <Link href="/">
        <a className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="/img/airbnb-logo.png"
            alt="Airbnb logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </a>
      </Link>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || 'Start your search'}
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />

        <MagnifyingGlassIcon className="hidden lg:inline-flex lg:mx-3 h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer" />
      </div>

      <div className="flex items-center space-x-3 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && <Calendar searchInput={searchInput} setSearchInput={setSearchInput} />}
    </header>
  );
};

export default Header;