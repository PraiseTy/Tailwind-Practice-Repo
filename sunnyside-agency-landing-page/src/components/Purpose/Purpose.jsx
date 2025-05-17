import Image from 'next/image';
const Purpose = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <div className="md:px-28 px-10 flex flex-col justify-center items-center py-10 space-y-8 order-1 text-center md:text-left">
        <h1 className="text-primary-blue font-sans text-4xl font-extrabold">Transform your brand</h1>
        <p className="text-grey-550 font-semibold">
          We are a full service creative agency specializing in helping brands grow fast. Engage your clients through
          compelling visuals that do most of the marketing for you
        </p>
        <a
          href="#"
          className="rounded-underline underlined-yellow md:self-start hover:border-bright-yellow leading-none p-0 m-0 uppercase text-primary-blue font-sans font-semibold"
        >
          Learn More
        </a>
      </div>
      <div className="bg-cover order-2">
        <Image src="/desktop/image-transform.jpg" alt="orange" width="200" height="200" className="w-full h-auto" />
      </div>
      <div className="order-4 md:order-3">
        <Image src="/desktop/image-stand-out.jpg" alt="cup" width="200" height="200" className="w-full h-auto" />
      </div>
      <div className="order-3 md:order-4 md:px-28 px-10 flex flex-col justify-center items-center py-10 space-y-8 order-1 text-center md:text-left ">
        <h3 className="text-primary-blue font-sans text-4xl font-extrabold">Stand out to the right audience</h3>
        <p className="text-grey-550 font-semibold">
          Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll
          build and extend your brand in digital places
        </p>
        <a
          href="#"
          className="rounded-underline underlined-pink md:self-start hover:border-bright-yellow leading-none p-0 m-0 uppercase text-primary-blue font-sans font-semibold"
        >
          Learn More
        </a>
      </div>
      <div className="order-5 bg-custom-image flex flex-col justify-end items-center space-y-6 text-center text-green-800 pb-6">
        <h1 className="font-sans font-semibold text-3xl">Graphic Design</h1>
        <p className="font-semibold max-w-sm">
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures
          potential clients' attention
        </p>
      </div>
      <div className="order-6 bg-custom-image-photography flex flex-col justify-end items-center space-y-6 text-center text-grey-950 pb-6">
        <h1 className="font-sans font-semibold text-3xl">Photography</h1>
        <p className="font-semibold max-w-sm">
          Increase your credibility by getting the most stunning, high-quality photos that improve your business image
        </p>
      </div>
    </div>
  );
};
export default Purpose;
