import ArticleSlider from "./ArticleSlider";
import ArticleTile from "./ArticleTile";
import ArticleHeader from "./ArticleHeader";
import ContentContainer from "components/Layout/ContentContainer";
import { useArticleService } from "../service/ArticleService";
import { KnowledgeArticleResponse } from "../knowledgeArticle";
import { useState, useEffect } from "react";
import { useIsAuthenticated } from "@azure/msal-react";

const ArticleSection = () => {
  const { getAll } = useArticleService();
  const [articles, setArticles] = useState<KnowledgeArticleResponse>();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated) {
      getAll().then((articles: KnowledgeArticleResponse) => {
        setArticles(articles);
      });
    }
  }, [isAuthenticated]);

  return (
    <ContentContainer className="flex flex-col items-center w-full bg-neutral-gray">
      {!isAuthenticated ? (
        <div>log in to see articles</div>
      ) : articles?.error ? (
        <div className="m-4 ">
          There has been an error loading the articles. Please try again
        </div>
      ) : (
        <>
          <ArticleHeader />
          <div className="screen-3xl w-full mt-8">
            <ArticleSlider>
              {articles?.value.slice(0, 6).map((article: any, id: number) => {
                return (
                  <ArticleTile
                    key={id}
                    id={id}
                    type={article.__typename}
                    title={article.title}
                    image={article.image ? "" : "https://picsum.photos/450/200"}
                    rating={article.rating}
                    ratingCount={article.rating_count}
                    description={article.description}
                    createdon={article.createdon}
                  />
                );
              })}
            </ArticleSlider>
          </div>
        </>
      )}
      {articles && (
        <button className="my-11 bg-primary-blue text-white">
          Read More Articles
        </button>
      )}
    </ContentContainer>
  );
};

export default ArticleSection;
