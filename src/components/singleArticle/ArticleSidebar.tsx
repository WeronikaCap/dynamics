import ArticleTile from "components/articleSection/ArticleTile";

interface SidebarData {
  title: string;
  description: string;
  knowledgearticleid: string;
}

const ArticleSidebar = ({ data }: { data: SidebarData[] }) => {
  const sidebarData = data.slice(0, 3);

  return (
    <div className="w-3/12 bg-white mx-auto border-solid border border-light-gray rounded-xl mb-8">
      <h2 className="m-4 text-black font-medium text-lg">Related Articles</h2>
      {sidebarData.map((article: SidebarData, id: number) => (
        <ArticleTile
          key={article.knowledgearticleid}
          id={id}
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
