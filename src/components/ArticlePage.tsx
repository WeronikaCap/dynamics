import ContentContainer from "./ContentContainer";

const ArticlePage = () => {
  return (
    <ContentContainer>
      <div className="h-80 pl-24">
        <div className="h-[14%] bg-green-200">Breadcrumbs</div>
        <div className="h-[60%] bg-red-200 mt-12 ">Article header</div>
      </div>
      <div className="flex h-screen mt-12 pl-24">
        <div className="h-full w-9/12 bg-orange-200">Article content</div>
        <div className="h-full w-2/12 bg-pink-200 m-auto">Article sidebar </div>
      </div>
    </ContentContainer>
  );
};
export default ArticlePage;
