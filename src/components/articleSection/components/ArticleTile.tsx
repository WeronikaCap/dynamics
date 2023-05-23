import ArrowIcon from "../../../assets/arrowIcon.svg";
import { Rating } from "@mui/material";

interface Props {
  createdon: string;
  rating: number;
  ratingCount: number;
  title: string;
  description: string;
  image: string;
  type: string;
  wideVariant?: boolean;
}

const ArticleTile = ({
  type,
  createdon,
  rating,
  ratingCount,
  title,
  description,
  image,
  wideVariant,
}: Props) => {
  const formattedDate = new Date(createdon).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className={
        wideVariant
          ? "flex flex-row relative border-solid border border-light-gray rounded-xl bg-white max-w-[1216px] h-[241px]"
          : "relative border-solid border border-light-gray rounded-xl mx-4 bg-white"
      }
    >
      <img
        src={image}
        alt={image}
        className={
          wideVariant
            ? "rounded-l-xl w-screen  max-w-[375px]"
            : "rounded-t-xl w-screen"
        }
      ></img>
      <div className={wideVariant ? "flex flex-col justify-between" : ""}>
        <div className="flex flex-row justify-between px-8 gap-8 pt-6 pb-5">
          <div className="flex flex-row">
            <div className="flex align-center justify-center bg-light-blue w-16 h-7 rounded-l">
              <p className="text-primary-blue">{type}</p>
            </div>
            <p className="px-4">{formattedDate}</p>
          </div>
          <div className={"flex flex-row items-center"}>
            <Rating name="read-only" value={rating} readOnly />
            <p className="flex ">({ratingCount})</p>
          </div>
        </div>
        <div className="flex flex-col px-8">
          <div className="text-2xl font-semibold text-black mb-4">{title}</div>
          <p className="text-base h-[48px]">{description}</p>
          <div
            className="flex flex-row gap-2.5 items-center
         py-6 text-primary-blue font-semibold"
          >
            <p>Read More</p>
            <img src={ArrowIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleTile;
