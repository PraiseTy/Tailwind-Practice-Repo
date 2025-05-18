'use client';
import Image from 'next/image';
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container md:bg-[url('/desktop/image-header.jpg')] bg-[url('/mobile/image-header.jpg')] bg-center  h-[650px] bg-cover  bg-no-repeat w-full">
      <div className="relative flex justify-between items-center px-10 pt-8 z-100">
        <Image src="/logo.svg" alt="logo" height={100} width={100} />
        <div className="text-white">
          <div className="md:block hidden space-x-10">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a
              href="#"
              className="bg-white text-grey-950 font-sans rounded-full px-4 py-3 font-black text-xs hover:bg-white/40 hover:text-white"
            >
              CONTACT
            </a>
          </div>
          <div>
            <Image
              src="/icon-hamburger.svg"
              alt="logo"
              height={25}
              width={25}
              className="md:hidden block"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center ">
        <h1 className="uppercase text-white text-5xl font-sans font-black  pt-26 ">We are Creatives</h1>
        <Image src="/icon-arrow-down.svg" alt="arrow" height={30} width={30} className="pt-26 mx-auto" />
        {isOpen && (
          <div className="bg-white mt-10 inline-flex flex-col absolute top-[70px] py-10 px-24 space-y-5 text-grey-550 font-semibold text-xl">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a
              href="#"
              className="bg-bright-yellow text-black font-sans rounded-full px-8 py-4 font-black text-xs hover:bg-white/40 hover:text-white"
            >
              CONTACT
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
