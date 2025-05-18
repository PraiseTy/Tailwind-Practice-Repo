import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="container mx-auto mt-10 md:px-24 px-4 flex justify-between items-center">
      <Image src="/logo.svg" alt="logo" height={50} width={50} />
      <Image src="/icon-menu.svg" alt="mobile-menu" height={50} width={50} className="md:hidden block" />

      <div className="space-x-10 md:block hidden">
        <a href="#" className="hover:text-soft-red">
          Home
        </a>
        <a href="#" className="hover:text-soft-red">
          New
        </a>
        <a href="#" className="hover:text-soft-red">
          Popular
        </a>
        <a href="#" className="hover:text-soft-red">
          Trending
        </a>
        <a href="#" className="hover:text-soft-red">
          Categories
        </a>
      </div>
    </div>
  );
};
export default Navbar;
