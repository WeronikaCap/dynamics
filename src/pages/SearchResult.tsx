import Header from "components/Layout/Header";
import SearchResultSection from "components/SearchResult/SearchResultSection";

const SearchResult = () => {
  return (
    <>
      <Header
        placeHolderText="Search the knowledge base..."
        title="2 Search Results for “Adidas”"
        backgroundImage="/src/assets/HeroBg-searchPage.jpg"
        variantSmall={true}
      />
      <SearchResultSection />
    </>
  );
};

export default SearchResult;
