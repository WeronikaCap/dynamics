import ArticleSlider from "./ArticleSlider";
import ArticleTile from "./ArticleTile";
import ArticleHeader from "./ArticleHeader";
import ContentContainer from "components/Layout/ContentContainer";
import { useArticleService } from "../service/ArticleService";
import { KnowledgeArticleResponse } from "../knowledgeArticle";
import { useState, useEffect } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from "@mui/material/CircularProgress";

const ArticleSection = () => {
  const { getAll } = useArticleService();
  const [articles, setArticles] = useState<KnowledgeArticleResponse>();
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated) {
      getAll().then((articles: KnowledgeArticleResponse) => {
        setArticles(articles);
        setLoading(false);
      });
    }
  }, [isAuthenticated]);

  return (
    <ContentContainer className="flex flex-col items-center w-full bg-neutral-gray">
      {!isAuthenticated ? (
        <div className="m-8 text-xl font-semibold">Sign in to see articles</div>
      ) : articles?.error ? (
        <div className="m-4 ">
          There has been an error loading the articles. Please try again
        </div>
      ) : (
        <>
          <ArticleHeader />
          <div className="screen-3xl w-screen mt-8 max-w-full">
            {loading ? (
              <div className="flex flex-row justify-center w-screen mb-12">
                <CircularProgress className="text-primary-blue" size={100} />
              </div>
            ) : (
              <>
                <ArticleSlider>
                  {articles?.value
                    .slice(0, 6)
                    .map((article: any, index: number) => {
                      return (
                        <ArticleTile
                          data-index={index}
                          key={index}
                          type={article.__typename} 
                          title={article.title}
                          image={
                            article.image ? "" : "https://picsum.photos/450/200"
                          }
                          rating={article.rating}
                          ratingCount={article.rating_count}
                          description={article.description}
                          createdon={article.createdon}
                        />
                      );
                    })}
                </ArticleSlider>
                <div className="flex flex-row justify-center w-full">
                  <button className="my-11 bg-primary-blue text-white">
                    Read More Articles
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </ContentContainer>
  );
};

export default ArticleSection;
