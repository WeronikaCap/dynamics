import Rating from "@mui/material/Rating";
import ArticleTag from "./ArticleTag";

interface Article {
  title: string;
  description: string;
  keywords: string;
  img: string;
  createdon: string;
  rating: number;
  rating_count: number;
}

const ArticleHeader = ({
  articleData,
  author,
}: {
  articleData: Article;
  author: string;
}) => {
  const { title, description, keywords, createdon, rating, rating_count, img } =
    articleData;

  const formattedDate = new Date(createdon).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const initials = author
    .split(" ")
    .map((string) => string.substring(0, 1).toUpperCase())
    .join("");

  return (
    <div className="flex flex-col justify-between h-[60%] mt-12 ">
      <h1 className="text-base-black font-semibold">{title}</h1>
      <h3>{description}</h3>
      <div className="flex space-x-3">
        {keywords
          ? keywords
              .split(/[ ,;]+/)
              .map((tag, index) => <ArticleTag key={index}>{tag}</ArticleTag>)
          : null}
      </div>
      <div className="flex justify-between items-center h-8 w-fit">
        <div className="flex items-center text-base-black">
          {img ? (
            <img src={img} alt="User avatar" />
          ) : (
            <div className="flex justify-center items-center w-8 h-8 bg-purple-500 text-white font-medium rounded-full">
              {initials}
            </div>
          )}
          <p className="flex items-center pl-2 pr-4 font-medium">{author}</p>
        </div>
        <p>{formattedDate}</p>
        <div className="flex items-center pl-4">
          <Rating
            name="read-only"
            value={rating}
            size="large"
            precision={0.5}
            readOnly
          />
          <p className="font-medium">({rating_count})</p>
        </div>
      </div>
    </div>
  );
};
export default ArticleHeader;
