import Image from 'next/image';

const TestimonialCard = ({ img, body, name, role }) => {
  return (
    <div className="mt-10 flex flex-col items-center text-center  font-semibold">
      <Image src={img} alt="emily" height={50} width={50} className="rounded-full mb-10" />
      <p className="md:max-w-sm max-w-md text-grey-600 font-semibold md:px-6 px-10">{body}</p>
      <p className="text-primary-blue font-sans mt-5 font-bold">{name}</p>
      <p className="text-grey-400 text-xs mt-1">{role}</p>
    </div>
  );
};
export default TestimonialCard;
