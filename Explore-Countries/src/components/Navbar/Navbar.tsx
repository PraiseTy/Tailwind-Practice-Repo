'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/provider/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className='flex flex-row'>
      <div className='text-2xl'>Where in the World?</div>
      <button onClick={toggleTheme}>
        {isDarkMode ?
          <div>
            <Image src="/sun.svg" alt="light" width={20} height={20} />
            <p>Dark Mode</p>
          </div>
          : <div>
            <Image src="/moon.svg" alt="dark" width={20} height={20} />
            <p>Light Mode</p></div>}
      </button>

    </div>
  );
};
export default Navbar;
