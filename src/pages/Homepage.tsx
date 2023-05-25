import Header from "components/Layout/Header";
import ArticleSection from "components/articleSection/components/ArticleSection";

const Homepage = () => {
  return (
    <>
      <Header
        placeHolderText="Search"
        title="Customer Self-Service"
        description="Type in your search phrase or question and use our extensive database of answers"
        backgroundImage="/src/assets/Hero-BG.png"
      />
      <ArticleSection />
    </>
  );
};

export default Homepage;
