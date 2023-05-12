import ArticleHeader from "./ArticleHeader";
import ContentContainer from "./ContentContainer";
import Logo from "../assets/logo.svg";

const data = {
  title: "Boiler A Bosch Greenstar",
  subtitle: "Bosch Greenstar Condensing Boilers Superior Design & Components",
  tags: ["Bosch1", "Bosch2"],
  author: "Dave Jones",
  publishingDate: "2018-09-20T14:25:52Z",
  rating: 4.5,
  ratingCount: 14,
  img: Logo,
};

const ArticlePage = () => {
  return (
    <ContentContainer>
      <div className="h-80 pl-24">
        <div className="h-[14%] bg-green-200">Breadcrumbs</div>
        <ArticleHeader articleData={data} />
      </div>
      <div className="flex h-screen mt-12 pl-24">
        <div className="h-full w-9/12 bg-orange-200">Article content</div>
        <div className="h-full w-2/12 bg-pink-200 m-auto">Article sidebar </div>
      </div>
    </ContentContainer>
  );
};
export default ArticlePage;
