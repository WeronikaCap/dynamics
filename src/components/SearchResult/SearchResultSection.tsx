import ArticleTile from "components/articleSection/ArticleTile";
import ContentContainer from "components/Layout/ContentContainer";
import BoxWrapper from "components/SearchResult/BoxWrapper";
import RadioGroupBox from "components/SearchResult/RadioGroupBox";
import CheckboxGroupBox from "components/SearchResult/CheckboxGroupBox";

import data from "components/articleSection/mock.json";

const SearchResultSection = () => {
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
            {data.map((item) => (
              <ArticleTile
                key={item.id}
                type={item.__typename}
                title={item.title}
                image={item.image}
                rating={item.rating}
                ratingCount={item.ratingCount}
                description={item.content}
                publicationDate={item.publicationDate}
                wideVariant={true}
              />
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default SearchResultSection;
