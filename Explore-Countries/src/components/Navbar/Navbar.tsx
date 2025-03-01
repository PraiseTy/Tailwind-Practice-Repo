'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/provider/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="bg-[var(--color-navColor)]">
      <div className="flex flex-row justify-between container w-full mx-auto py-6 max-sm:mx-0 max-sm:py-12 max-sm:px-6">
        <div className="text-2xl max-sm:text-lg font-semibold">Where in the World?</div>
        <button onClick={toggleTheme}>
          <div className="flex items-center justify-center space-x-2 max-sm:text-sm">
            {isDarkMode ?
              (<Image src="/lightMoon.svg" alt="light" width={20} height={20} />)
              :
              (<Image src="/darkMoon.svg" alt="dark" width={20} height={20} />)
            }
            <p>Dark Mode</p>
          </div>
        </button>

      </div>
    </div>
  )
    ;
};
export default Navbar;
