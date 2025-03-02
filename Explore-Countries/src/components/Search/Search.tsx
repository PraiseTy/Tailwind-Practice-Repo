'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { options } from '@/components/Search/searchData';
import { useTheme } from '@/provider/ThemeContext';

interface SearchProps {
  setSelectedRegion: (region: string)=> void;
  setSelectedQuery: (query: string) => void;
}


const Search = ({ setSelectedRegion, setSelectedQuery }: SearchProps) => {
  const [selected, setSelected] = useState('Filter by Region');
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();


  return (
    <div className="flex flex-row max-sm:flex-col justify-between container mx-auto mt-12">
      <div className="relative max-sm:mx-auto ">
        <Image src={isDarkMode ? '/searchLight.svg' : '/search.svg'} alt="search" width={20} height={20}
               className="absolute z-10 bottom-5 max-sm:bottom-3 left-3" />
        <input placeholder="Search for a country..." onChange={(e) => setSelectedQuery(e.target.value.toLowerCase())}
               className="w-[400px] placeholder:text-[var(--color-input-color)] border-[var(--color-navColor)] bg-[var(--color-navColor)] border border-3 rounded-md focus:outline-none px-10 py-2 max-sm:w-[350px]" />
      </div>
      <div className="relative max-sm:mt-5 max-sm:pl-3">
        <button onClick={() => setIsOpen(!isOpen)}
                className="bg-[var(--color-navColor)] text-left pl-6 py-3 mb-2 rounded-md w-[200px]">{selected}</button>
        <Image src="/chevron-down.svg" alt="dropdown" width={20} height={20}
               className={`absolute z-10 top-4 left-40 right-0 ${isDarkMode ? 'invert' : ''}`} />
        {isOpen && <ul className="absolute bg-[var(--color-navColor)] rounded-md w-[200px] pl-6 text-left">
          {options.map((option) =>
              <li key={option.value} className=" py-2  " onClick={() => {
                setSelected(option.label);
                setSelectedRegion(option.value)
                setIsOpen(false);
              }}>
                {option.label}
              </li>
          )}
        </ul>}
      </div>
    </div>
  );
};
export default Search;
