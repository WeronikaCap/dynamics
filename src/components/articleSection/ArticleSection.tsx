import ArticleSlider from "./ArticleSlider";
import ArticleCard from "./ArticleCard";
import ArticleHeader from "./ArticleHeader";
import ContentContainer from "../ContentContainer";
import data from "./mock.json";

const ArticleSection = () => {
  return (
    <ContentContainer className="flex flex-col items-center w-full bg-neutral-gray">
      <ArticleHeader/>
      <div className="screen-3xl w-full mt-8">
        <ArticleSlider>
          {data.map((item) => (
            <ArticleCard
              key={item.id}
              type={item.__typename}
              title={item.title}
              image={item.image}
              rating={item.rating}
              ratingCount={item.ratingCount}
              description={item.content}
              publicationDate={item.publicationDate}
            />
          ))}
        </ArticleSlider>
      </div>
      <button className="my-11 bg-primary-blue text-white">
        Read More Articles
      </button>
    </ContentContainer>
  );
};

export default ArticleSection;
