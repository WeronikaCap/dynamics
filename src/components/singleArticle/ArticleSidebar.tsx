import ArticleTile from "components/articleSection/ArticleTile";

const ArticleSidebar = () => {
  return (
    <div className="w-3/12 bg-white mx-auto border-solid border border-light-gray rounded-xl mb-8">
      <h2 className="m-4 text-black font-medium text-lg">Related Articles</h2>
      <ArticleTile
        sidebar
        title="Test"
        image="https://picsum.photos/450/200"
        description="Adidas Stan Smith is a tennis shoe made by Adidas, and first launched in 1965. Originally named Adidas Robert Haillet"
      />
      <ArticleTile
        sidebar
        title="Test"
        image="https://picsum.photos/450/200"
        description="Adidas Stan Smith is a tennis shoe made by Adidas, and first launched in 1965. Originally named Adidas Robert Haillet"
      />
      <ArticleTile
        sidebar
        title="Test"
        image="https://picsum.photos/450/200"
        description="Adidas Stan Smith is a tennis shoe made by Adidas, and first launched in 1965. Originally named Adidas Robert Haillet"
      />
    </div>
  );
};
export default ArticleSidebar;
