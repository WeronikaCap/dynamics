import { useState, useEffect, useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useIsAuthenticated } from "@azure/msal-react";

import { useArticleService } from "components/articleSection/service/ArticleService";
import { KnowledgeArticle } from "components/articleSection/knowledgeArticle";
import { KnowledgeArticleResponse } from "components/articleSection/knowledgeArticle";
import { ArticleContext } from "components/articleSection/service/ArticleService";

import ArticleTile from "components/articleSection/components/ArticleTile";
import ContentContainer from "components/Layout/ContentContainer";
import BoxWrapper from "components/SearchResult/BoxWrapper";
import RadioGroupBox from "components/SearchResult/RadioGroupBox";
import CheckboxGroupBox from "components/SearchResult/CheckboxGroupBox";

const SearchResultSection = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<KnowledgeArticleResponse>();
  const [articlesCounts, setArticlesCounts] = useState<any>({
    total: 0,
    today: 0,
    pastWeek: 0,
  });

  const [mod, setMod] = useState({ today: 0, lastWeek: 0 });

  const { getAll } = useArticleService();

  const val = useContext(ArticleContext);

  console.log(slug, "slug");

  const urlSearch = `knowledgearticles?$filter=contains(title,%27${slug}%27)`;
  const formattedDate = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    getAll(urlSearch as string).then((articles: KnowledgeArticleResponse) => {
      setArticles(articles);
    });

    if (articles) {
      const a = articles.value.filter(
        (item) => item.createdon == formattedDate
      ).length;
      setMod({ today: a, lastWeek: 0 });
      setArticlesCounts({ total: articles?.value.length });
    }
  }, [slug]);

  console.log(articles?.value, "artykuly");
  return (
    <section className="bg-neutral-gray pt-16 pb-16">
      <ContentContainer>
        <div className="grid grid-cols-[minmax(90px,408px)_1fr] gap-24">
          <div className="flex flex-col gap-6">
            <BoxWrapper>
              <CheckboxGroupBox
                title="Type"
                radioItems={[
                  { value: "All", lable: "All", count: articlesCounts.total },
                  { value: "Today", lable: "Today", count: 1 },
                  { value: "Past Week", lable: "Past Week", count: 2 },
                ]}
              />
            </BoxWrapper>
            <BoxWrapper>
              <RadioGroupBox
                title="Date Modified"
                radioItems={[
                  { value: "All", lable: "All", count: 3 },
                  { value: "Today", lable: "Today", count: 6 },
                  { value: "Past Week", lable: "Past Week", count: 7 },
                ]}
              />
            </BoxWrapper>
            <BoxWrapper>
              <CheckboxGroupBox
                isRaiting={true}
                title="Raiting"
                radioItems={[
                  { value: 5, count: 6 },
                  { value: 4.2, count: 9 },
                  { value: 3, count: 64 },
                ]}
              />
            </BoxWrapper>
          </div>
          <div className="flex flex-col gap-3">
            {articles?.value.map((article: any) => {
              return (
                <ArticleTile
                  key={article.id}
                  type={article.__typename}
                  title={article.title}
                  image={article.image ? "" : "https://picsum.photos/450/200"}
                  rating={article.rating}
                  ratingCount={article.rating_count}
                  description={article.description}
                  createdon={article.createdon}
                  wideVariant={true}
                />
              );
            })}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default SearchResultSection;
