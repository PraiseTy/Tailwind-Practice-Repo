import Image from 'next/image';
import TrendingNewsCard from '@/components/Content/TrendingNewsCard';
import { TrendingData } from '@/components/Content/TrendingData';
const Content = () => {
  return (
    <div className="container mx-auto md:px-24 px-4 mt-10">
      <div className="flex md:flex-row flex-col md:space-x-8 space-x-0">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 h-full">
          <div className="relative md:col-span-2 w-full">
            <Image
              src="/image-web-3-desktop.jpg"
              alt="web-3-image-desktop"
              height={500}
              width={500}
              className="w-full md:block hidden"
            />
            <Image
              src="/image-web-3-mobile.jpg"
              alt="web-3-image-mobile"
              height={0}
              width={0}
              className="w-full h-auto md:hidden block"
              sizes="100vw"
              priority
            />
          </div>
          <div className="max-w-auto">
            <h2 className="md:text-6xl text-5xl w-full text-dark-blue font-bold">The Bright Future of Web 3.0?</h2>
          </div>
          <div>
            <p>
              We dive into the next evolution of the web that claims to put the power of the platforms back into the
              hands of the people. But is it really fulfilling its promise?
            </p>
            <button className="mt-5 bg-soft-red text-dark-blue hover:bg-dark-blue hover:text-white uppercase tracking-widest px-6 py-3 cursor-pointer">
              read more
            </button>
          </div>
        </div>
        <div className="bg-dark-blue w-full mx-auto px-4 pt-5 md:mt-0 mt-16">
          <h1 className="text-soft-orange text-3xl mb-6">New</h1>
          <div>
            {TrendingData.map((card, index) => (
              <TrendingNewsCard key={index} title={card.title} body={card.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
