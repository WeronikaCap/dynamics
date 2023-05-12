import Rating from "@mui/material/Rating";
import Logo from "../assets/logo.svg";
import ArticleTag from "./ArticleTag";

interface Article {
  title: string;
  subtitle: string;
  tags: string[];
  img: string;
  author: string;
  publishingDate: string;
  rating: number;
  ratingCount: number;
}

const ArticleHeader = ({ articleData }: { articleData: Article }) => {
  const {
    title,
    subtitle,
    tags,
    author,
    publishingDate,
    rating,
    ratingCount,
    img,
  } = articleData;

  var formattedDate = new Date(publishingDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col justify-between h-[60%] mt-12 ">
      <h1 className="text-base-black font-semibold">{title}</h1>
      <h2>{subtitle}</h2>
      <div className="flex space-x-3">
        {tags.map((tag, index) => (
          <ArticleTag key={index}>{tag}</ArticleTag>
        ))}
      </div>
      <div className="flex justify-between items-center h-8 w-1/3">
        <div className="flex w-fit text-base-black">
          <img src={img} alt="User avatar" />
          <p className="pl-2 font-medium">{author}</p>
        </div>
        <p>{formattedDate}</p>
        <div className="flex items-center">
          <Rating
            name="read-only"
            value={rating}
            size="large"
            precision={0.5}
            readOnly
          />
          <p className="font-medium">({ratingCount})</p>
        </div>
      </div>
    </div>
  );
};
export default ArticleHeader;
