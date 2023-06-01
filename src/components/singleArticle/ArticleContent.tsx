import { Rating } from "@mui/material";

const ArticleContent = ({ article }: { article: string }) => {
  return (
    <article className="w-8/12">
      <div
        className="h-fit article-content"
        dangerouslySetInnerHTML={{ __html: article }}
      ></div>
      <div className="text-[#272D37] text-2xl text-center py-16">
        <p className="pb-2">Did you find this article helpfull? </p>
        <Rating
          name="rating"
          value={0}
          size="large"
          precision={0.5}
          onChange={(event, value) => console.log(`article rating: ${value}`)}
        />
      </div>
    </article>
  );
};
export default ArticleContent;
