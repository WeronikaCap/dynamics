import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
} from "@azure/msal-react";
import { useArticleService } from "service/ArticleService";
import ArticleSlider from "./ArticleSlider";
import ArticleTile from "./ArticleTile";
import ArticleHeader from "./ArticleHeader";
import ContentContainer from "components/Layout/ContentContainer";
import { Button, CircularProgress } from "@mui/material";

const ArticleSection = () => {
  const { articles, loading } = useArticleService();
  const isAuthenticated = useIsAuthenticated();

  return (
    <ContentContainer className="flex flex-col items-center w-full bg-neutral-gray">
      <AuthenticatedTemplate>
        <>
          <ArticleHeader />
          <div className="screen-3xl w-screen mt-8 max-w-full">
            {loading ? (
              <div className="flex flex-row justify-center w-screen mb-12">
                <CircularProgress className="text-primary-blue" size={100} />
              </div>
            ) : (articles?.error ? (
              <div className="m-4 ">
                There has been an error loading the articles. Please try again
              </div>
            ) : (    <>
              <ArticleSlider>
                {articles?.value
                  .slice(0, 6)
                  .map((article: any, id: number) => {
                    return (
                      <ArticleTile
                        id={id}
                        data-index={id}
                        key={id}
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
                <Button
                  href="/search"
                  variant="contained"
                  className="font-semibold capitalize my-11 py-3 text-white"
                >
                  Read More Articles
                </Button>
              </div>
            </>)
          
            )}
          </div>
        </>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
          <div className="m-8 text-xl font-semibold">
            Sign in to see articles
          </div>
      </UnauthenticatedTemplate>
    </ContentContainer>
  );
};

export default ArticleSection;
