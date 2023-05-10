import ArticleSlider from "./ArticleSlider";
import ArticleCard from "./ArticleCard";
import data from "./mock.json";

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
        <div className="max-w-7xl  w-screen">
          <ArticleSlider>
            {data.map((item) => (
              <ArticleCard
                key={item.id}
                type={item.__typename}
                title={item.title}
                image={item.image}
                rating={item.rating}
                description={item.content}
                publicationDate={item.publicationDate}
              />
            ))}
          </ArticleSlider>
        </div>
      </div>
      <button className="my-11 bg-primary-blue text-white">Read More Articles</button>
    </div>
  );
};

export default ArticleSection;
