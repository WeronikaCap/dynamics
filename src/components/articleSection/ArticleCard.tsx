import ArrowIcon from "../../assets/arrowIcon.svg";

interface Props {
  publicationDate: string;
  rating: string;
  title: string;
  description: string;
  image: string;
  type: string;
}

const ArticleCard = ({
  type,
  publicationDate,
  rating,
  title,
  description,
  image,
}: Props) => {
  return (
    <div className="relative border-solid border border-light-gray rounded-xl  mx-4">
        <img src={image} alt="" className="rounded-t-xl w-screen"></img>
      <div className="flex flex-row justify-between px-8 gap-8 pt-6 pb-5">
        <div className="flex flex-row">
          <div className="flex align-center justify-center bg-light-blue w-16 h-7 rounded-l">
            <p className="text-primary-blue">{type}</p>
          </div>
          <p className="px-4">{publicationDate}</p>
        </div>
        <div>{rating}</div>
      </div>
      <div className="px-8">
        <div className="text-2xl font-semibold">{title}</div>
        <p className="text-base">{description}</p>
        <div className="flex flex-row gap-2.5 items-center
         py-6 text-primary-blue font-semibold">
          <p>Read More</p>
          <img src={ArrowIcon} />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
