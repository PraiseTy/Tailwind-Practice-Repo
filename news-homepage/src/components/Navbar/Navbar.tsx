'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto mt-10 md:px-24 px-4 flex justify-between items-center">
      <Image src="/logo.svg" alt="logo" height={50} width={50} />
      <div onClick={() => setIsOpen(!isOpen)}>
        <Image
          src="/icon-menu.svg"
          alt="mobile-menu"
          height={50}
          width={50}
          className={`md:hidden block ${isOpen ? 'hidden' : 'block'}`}
        />
      </div>
      <nav className="md:block hidden">
        <ul className="flex flex-row space-x-10">
          {['Home', 'New', 'Popular', 'Trending', 'Categories'].map((item) => (
            <li key={item}>
              <Link href="#" className="hover:text-soft-red">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/40 md:hidden block" onClick={() => setIsOpen(false)}>
          <div className="bg-white fixed top-0 right-0 z-100 w-2/3 h-full pt-10 transition-transform duration-300 ease-in-out">
            <div className="flex justify-end mr-5" onClick={() => setIsOpen(!isOpen)}>
              <Image src="/icon-menu-close.svg" alt="close-menu" height={30} width={30} className="text-right" />
            </div>
            <div>
              <ul className="text-dark-blue text-xl space-y-5 pl-10 pt-16">
                {['Home', 'New', 'Popular', 'Trending', 'Categories'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-soft-red">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
