import ArticleSlider from "./ArticleSlider";
import ArticleTile from "./ArticleTile";
import ArticleHeader from "./ArticleHeader";
import ContentContainer from "components/Layout/ContentContainer";
import data from "../mock.json";
import { useArticleService } from "../service/ArticleService";
import { Article } from "../article";
import { useState, useEffect } from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const ArticleSection = () => {
  const { getAll } = useArticleService();
  const [articles, setArticles] = useState<Article[]>();
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();

  const tokenRequest = {
    account: accounts[0],
    scopes: ["https://capgeminidcxnl.crm4.dynamics.com/user_impersonation"],
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAll().then((articles: any) => {
        setArticles(articles.value);
      });
    }
  }, [isAuthenticated]);

  const mostViewedArticles =
    articles &&
    articles.sort((a: any, b: any) => {
      if (a.knowledgearticleviews > b.knowledgearticleviews) {
        return -1;
      } else {
        return 1;
      }
    });

  return (
    <ContentContainer className="flex flex-col items-center w-full bg-neutral-gray">
      <ArticleHeader />
      <div className="screen-3xl w-full mt-8">
        <ArticleSlider>
          {data.map((item: any) => (
            <ArticleTile
              key={item.id}
              type={item.__typename}
              title={item.title}
              image={item.image}
              rating={item.rating}
              ratingCount={item.ratingCount}
              description={item.content}
              createdon={item.publicationDate}
            />
          ))}
        </ArticleSlider>
      </div>
      <button className="my-11 bg-primary-blue text-white">
        Read More Articles
      </button>
      <div className="screen-3xl w-full mt-8">
        <ArticleSlider>
          {mostViewedArticles ? (
            mostViewedArticles.slice(0, 6).map((article: any, id: number) => {
              return (
                <ArticleTile
                  key={id}
                  type={article.__typename}
                  title={article.title}
                  image={article.image}
                  rating={article.rating}
                  ratingCount={article.rating_count}
                  description={article.description}
                  createdon={article.createdon}
                />
              );
            })
          ) : (
            <h1 className="m-4 ">Log in to see articles</h1>
          )}
        </ArticleSlider>
      </div>
    </ContentContainer>
  );
};

export default ArticleSection;
