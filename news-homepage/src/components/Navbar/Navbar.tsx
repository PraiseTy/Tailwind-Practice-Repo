import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="container mx-auto mt-10 md:px-24 px-4 flex justify-between items-center">
      <Image src="/logo.svg" alt="logo" height={50} width={50} />
      <Image src="/icon-menu.svg" alt="mobile-menu" height={50} width={50} className="md:hidden block" />

      <nav className=" md:block hidden">
        <ul className="flex flex-row space-x-10">
          <li>
            <Link href="#" className="hover:text-soft-red">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-soft-red">
              New
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-soft-red">
              Popular
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-soft-red">
              Trending
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-soft-red">
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
