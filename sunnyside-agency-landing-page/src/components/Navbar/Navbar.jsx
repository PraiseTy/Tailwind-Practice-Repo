import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="container bg-blue-text flex justify-between items-center px-10 pt-8 z-100">
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
          <Image src="/icon-hamburger.svg" alt="logo" height={25} width={25} className="md:hidden block" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
