interface Props {
    publicationDate: string;
    articleRating: string;
    articleTitle: string;
    articleDescription: string;
    articleImage: string;
    type: string;
  }
  
  const ArticleCard = ({
    type,
    publicationDate,
    articleRating,
    articleTitle,
    articleDescription,
    articleImage
  }: Props) => {
    return (
      <div className="relative border-solid border border-light-gray rounded-xl max-w-xl mx-4">
        <div>
          <img
            src={articleImage}
            alt=""
            className="rounded-t-xl"
          ></img>
        </div>
        <div className="flex flex-row justify-between px-8 gap-8  pt-6 pb-5">
          <div className="flex flex-row">
            <div>{type}</div>
            <p className="px-4">{publicationDate}</p>
          </div>
          <div>{articleRating}</div>
        </div>
        <div className="px-8">
          <div className="text-2xl font-semibold">{articleTitle}</div>
          <p className="text-base">{articleDescription}</p>
          <div className="py-6">Read More</div>
        </div>
      </div>
    );
  };
  
  export default ArticleCard;