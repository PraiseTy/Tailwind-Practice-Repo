import Image from 'next/image';
import { DisplayData } from '@/components/Display/DisplayData';

const Display = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2">
      {DisplayData.map((pic, index) => (
        <Image key={index} src={pic.img} alt={pic.alt} width={500} height={200} />
      ))}
    </div>
  );
};
export default Display;
