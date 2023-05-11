import ArrowIcon from "../../assets/arrowIcon.svg";
import { Rating } from "@mui/material";

interface Props {
  publicationDate: string;
  rating: number;
  ratingCount: number;
  title: string;
  description: string;
  image: string;
  type: string;
}

const ArticleCard = ({
  type,
  publicationDate,
  rating,
  ratingCount,
  title,
  description,
  image,
}: Props) => {
  return (
    <div className="relative border-solid border border-light-gray rounded-xl mx-4 bg-white">
      <img src={image} alt="" className="rounded-t-xl w-screen"></img>
      <div className="flex flex-row justify-between px-8 gap-8 pt-6 pb-5">
        <div className="flex flex-row">
          <div className="flex align-center justify-center bg-light-blue w-16 h-7 rounded-l">
            <p className="text-primary-blue">{type}</p>
          </div>
          <p className="px-4">{publicationDate}</p>
        </div>
        <div className={"flex flex-row items-center"}>
          <Rating name="read-only" value={rating} readOnly />
          <p className="flex ">({ratingCount})</p>
        </div>
      </div>
      <div className="px-8">
        <div className="text-2xl font-semibold text-black">{title}</div>
        <p className="text-base">{description}</p>
        <div
          className="flex flex-row gap-2.5 items-center
         py-6 text-primary-blue font-semibold"
        >
          <p>Read More</p>
          <img src={ArrowIcon} />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
