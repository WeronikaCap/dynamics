import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useArticleService } from "service/ArticleService";
import ContentContainer from "components/Layout/ContentContainer";
import ArticleHeader from "../components/singleArticle/ArticleHeader";
import ArticleContent from "../components/singleArticle/ArticleContent";
import ArticleSidebar from "../components/singleArticle/ArticleSidebar";
import "./ArticlePage.css";

const ArticlePage = () => {
  const [contacts, setContacts] = useState<any[]>();
  const { articles } = useArticleService();
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const { slug } = useParams<any>();

  const tokenRequest = {
    account: accounts[0],
    scopes: ["https://capgeminidcxnl.crm4.dynamics.com/user_impersonation"],
  };

  useEffect(() => {
    if (isAuthenticated) {
      instance.acquireTokenSilent(tokenRequest).then((response) => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${response.accessToken}`);
        fetch(
          "https://capgeminidcxnl.api.crm4.dynamics.com/api/data/v9.2/contacts",
          {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          }
        )
          .then((response) => response.json())
          .then((result) => setContacts(result.value))
          .catch((error) => console.log("error", error));
      });
    }
  }, [isAuthenticated]);

  if (!articles || !slug || !contacts) return null;

  const data = articles.value;

  const articleId = Number(slug);

  const author = contacts.find(
    (authors: any) =>
      authors._createdby_value == data[articleId]._createdby_value
  );

  return (
    <ContentContainer>
      <div className="h-80 pl-28">
        <div className="h-[14%] bg-green-200">Breadcrumbs</div>
        <ArticleHeader author={author.fullname} articleData={data[articleId]} />
      </div>
      <div className="flex mt-20 pl-28">
        <ArticleContent article={data[articleId].content} />
        <ArticleSidebar data={data} />
      </div>
    </ContentContainer>
  );
};
export default ArticlePage;
