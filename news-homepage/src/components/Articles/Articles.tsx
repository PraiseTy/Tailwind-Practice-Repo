import { ArticleData } from '@/components/Articles/ArticleData';
import ArticleCard from '@/components/Articles/ArticleCard';

const Articles = () => {
  return (
    <div className="container mx-auto  mt-10 md:px-24 px-4 mb-24">
      <div className="flex md:flex-row flex-col  flex-1 overflow-x-auto md:space-x-4 space-x-2 md:space-y-0 space-y-4">
        {ArticleData.map((piece, index) => (
          <ArticleCard key={index} img={piece.img} number={piece.number} title={piece.title} body={piece.body} />
        ))}
      </div>
    </div>
  );
};
export default Articles;
