import ArticleHeader from "./ArticleHeader";
import ContentContainer from "./ContentContainer";
import Logo from "../assets/logo.svg";
import { Rating } from "@mui/material";
import "./ArticlePage.css";
import ArticleContent from "./ArticleContent";

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

const article = `<div data-wrapper="true" style="font-size: 12px; font-family: &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, sans-serif"><h1 data-wrapper="true" style="font-size: 12px; font-family: &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, sans-serif">Bosch Greenstar Condensing Boilers</h1>
<h2 data-wrapper="true" style="font-size: 12px; font-family: &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, sans-serif">Superior Design &amp; Components</h2>
<div data-wrapper="true" style="font-size: 12px; font-family: &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, sans-serif">At Bosch we design and manufacture all of our key components in-house, our assembly process is tightly controlled, our<br>standards are driven by the Automotive sector as Bosch is the world's largest supplier to automobile manufacturers; all<br>processes are documented, monitored &amp; traceable. Before your new boiler leaves the factory it is live fire tested and<br>tuned for optimal efficiency. Bosch Greenstar Condensing Boilers feature industry-leading design and reliable internal<br>components built to deliver optimal heating comfort year after year all while being energy efficient!</div>
<div data-wrapper="true" style="font-size: 12px; font-family: &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, sans-serif">&nbsp;</div>
<div data-wrapper="true" style="font-size: 12px; font-family: &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, sans-serif"><img align="none" alt="" height="384" data-msdynid="___8b981dee-0b59-ed11-9561-6045bd8c9668___" data-msdyntype="data:image/png;base64" src="/api/data/v9.0/msdyn_knowledgearticleimages(8b981dee-0b59-ed11-9561-6045bd8c9668)/msdyn_blobfile/$value" style="width: 379px; height: 384px" width="379"></div>
<div data-wrapper="true" style="font-size: 12px; font-family: &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, sans-serif">&nbsp;</div>
<div data-wrapper="true" style="font-size: 12px; font-family: &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, sans-serif"><img align="none" alt="" height="393" data-msdynid="___94981dee-0b59-ed11-9561-6045bd8c9668___" data-msdyntype="data:image/png;base64" src="/api/data/v9.0/msdyn_knowledgearticleimages(94981dee-0b59-ed11-9561-6045bd8c9668)/msdyn_blobfile/$value" style="width: 366px; height: 393px" width="366"></div></div>`;

const ArticlePage = () => {
  console.log(typeof article);
  return (
    <ContentContainer>
      <div className="h-80 pl-28">
        <div className="h-[14%] bg-green-200">Breadcrumbs</div>
        <ArticleHeader articleData={data} />
      </div>
      <div className="flex mt-20 pl-28">
        <ArticleContent article={article} />
        <div className="h-screen w-3/12 bg-pink-200 mx-auto">
          Article sidebar
        </div>
      </div>
    </ContentContainer>
  );
};
export default ArticlePage;
