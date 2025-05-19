interface NewsCardProps {
  title: string;
  body: string;
}
const TrendingNewsCard = ({ title, body }: NewsCardProps) => {
  return (
    <div>
      <h2 className="text-white text-xl font-semibold mb-2 hover:text-soft-orange cursor-pointer">{title}</h2>
      <p className="max-w-auto mb-6 text-grayish-blue">{body}</p>
    </div>
  );
};
export default TrendingNewsCard;
