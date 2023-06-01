import { useIsAuthenticated } from "@azure/msal-react";
import { useArticleService } from "service/ArticleService";
import ArticleSlider from "./ArticleSlider";
import ArticleTile from "./ArticleTile";
import ArticleHeader from "./ArticleHeader";
import ContentContainer from "components/Layout/ContentContainer";
import { Button } from "@mui/material";

const ArticleSection = () => {
  const { articles } = useArticleService();
  const isAuthenticated = useIsAuthenticated();

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
        <Button
          href="/search"
          variant="contained"
          className="font-semibold capitalize my-11 py-3 text-white"
        >
          Read More Articles
        </Button>
      )}
    </ContentContainer>
  );
};

export default ArticleSection;
