import Image from 'next/image';

interface ArticleProps {
  img: string;
  number: string;
  title: string;
  body: string;
}

const ArticleCard = ({ img, number, title, body }: ArticleProps) => {
  return (
    <div className="flex flex-row items-stretch gap-3 ">
      <Image src={img} alt="article image" height={200} width={200} className="w-auto" />
      <div className="space-y-2">
        <p className="text-soft-red text-3xl font-bold">{number}</p>
        <h3 className="text-dark-blue text-lg font-bold max-w-auto hover:text-soft-red">{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};
export default ArticleCard;
