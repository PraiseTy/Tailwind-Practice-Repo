import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-green-200 flex flex-col justify-center items-center pt-10">
      <Image src="/footer-logo.svg" alt="logo" width={150} height={150} className="text-green-800" />
      <div className="space-x-12 mt-5 text-green-500 font-semibold">
        <a href="#" className="hover:text-white">
          About
        </a>
        <a href="#" className="hover:text-white">
          Services
        </a>
        <a href="#" className="hover:text-white">
          Projects
        </a>
      </div>
      <div className="flex space-x-4 my-10 cursor-pointer">
        <Image
          src="/icon-facebook.svg"
          alt="facebook"
          width={20}
          height={20}
          className="filter hover:brightness-0 hover:invert"
        />
        <Image
          src="/icon-instagram.svg"
          alt="instagram"
          width={20}
          height={20}
          className="filter hover:brightness-0 hover:invert"
        />
        <Image
          src="/icon-twitter.svg"
          alt="twitter"
          width={20}
          height={20}
          className="filter hover:brightness-0 hover:invert"
        />
        <Image
          src="/icon-pinterest.svg"
          alt="pinterest"
          width={20}
          height={20}
          className="filter hover:brightness-0 hover:invert"
        />
      </div>
    </div>
  );
};
export default Footer;
