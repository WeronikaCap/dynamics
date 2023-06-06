import Header from "components/Layout/Header";
import SearchResultSection from "components/SearchResult/SearchResultSection";

import { useArticleService } from "service/ArticleService";

const SearchResult = () => {
  const { articlesCount } = useArticleService();

  return (
    <>
      <Header
        placeHolderText="Search the knowledge base..."
        title={`${articlesCount} Search Results`}
        backgroundImage="/src/assets/HeroBg-searchPage.jpg"
        variantSmall={true}
      />
      <SearchResultSection />
    </>
  );
};

export default SearchResult;
