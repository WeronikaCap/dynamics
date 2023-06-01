import ArticleTile from "components/articleSection/ArticleTile";
import ContentContainer from "components/Layout/ContentContainer";
import BoxWrapper from "components/SearchResult/BoxWrapper";
import RadioGroupBox from "components/SearchResult/RadioGroupBox";
import CheckboxGroupBox from "components/SearchResult/CheckboxGroupBox";

import { useArticleService } from "service/ArticleService";

const SearchResultSection = () => {
  const { articles } = useArticleService();

  if (!articles) return null;

  const data = articles.value;

  return (
    <section className="bg-neutral-gray pt-16 pb-16">
      <ContentContainer>
        <div className="grid grid-cols-[minmax(90px,408px)_1fr] gap-24">
          <div className="flex flex-col gap-6">
            <BoxWrapper>
              <CheckboxGroupBox
                title="Type"
                radioItems={[
                  { value: "All", lable: "All", count: 3 },
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
            {data.map((item, id) => (
              <ArticleTile
                key={id}
                id={id}
                type={item.__typename}
                title={item.title}
                image={"https://picsum.photos/450/200"}
                rating={item.rating}
                ratingCount={item.rating_count}
                description={item.description}
                createdon={item.createdon}
                wideVariant
              />
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default SearchResultSection;
