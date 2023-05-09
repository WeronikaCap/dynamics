import ArticleSlider from "./ArticleSlider";
import ArticleCard from "./ArticleCard";
import data from './mock.json';

const ArticleSection = () => {
  return (
    <div className="flex flex-col items-center px-12">
      <div className="flex flex-col items-center gap-6 w-2/5">
        <h1 className="text-3xl font-bold">Most Popular Articles</h1>
        <p className="text-sm text-center">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </p>
      </div>
      <div>
        <div className="max-w-7xl overflow-hidden w-screen">
          <ArticleSlider>
            {data.map((item) => (
              <ArticleCard
                key={item.id}
                type={item.__typename}
                articleTitle={item.title}
                articleImage={item.image}
                articleRating={item.rating}
                articleDescription={item.content}
                publicationDate={item.publicationDate}
              />
            ))}
          </ArticleSlider>
        </div>
      </div>
      <button>Show more</button>
    </div>
  );
};

export default ArticleSection;
