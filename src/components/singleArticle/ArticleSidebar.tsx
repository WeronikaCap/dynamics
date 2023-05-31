import ArticleTile from "components/articleSection/components/ArticleTile";

interface SidebarData {
  title: string;
  description: string;
  knowledgearticleid: string;
}

const ArticleSidebar = ({ data }: { data: SidebarData[] }) => {
  return (
    <div className="w-3/12 bg-white mx-auto border-solid border border-light-gray rounded-xl mb-8">
      <h2 className="m-4 text-black font-medium text-lg">Related Articles</h2>
      {data.map((article: SidebarData) => (
        <ArticleTile
          key={article.knowledgearticleid}
          sidebar
          title={article.title}
          image="https://picsum.photos/450/200"
          description={article.description}
        />
      ))}
    </div>
  );
};
export default ArticleSidebar;
