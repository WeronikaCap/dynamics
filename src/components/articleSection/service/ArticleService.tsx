import { createContext, useContext, FC } from "react";
import { KnowledgeArticleResponse } from "../knowledgeArticle";
import { useMsal} from "@azure/msal-react";

export const getURI = (endpoint: string) =>
  `https://capgeminidcxnl.api.crm4.dynamics.com/api/data/v9.2/${endpoint}`;

export interface ArticleService {
  getAll:  () => Promise<KnowledgeArticleResponse>;
}

export const ArticleContext = createContext<ArticleService>(
  {} as ArticleService
);

export const useArticles = () => {
  const { instance, accounts } = useMsal();
  const tokenRequest = {
    account: accounts[0],
    scopes: ["https://capgeminidcxnl.crm4.dynamics.com/user_impersonation"],
  };

  const getAll: ArticleService["getAll"] = async () => {
    let myHeaders = new Headers();
    await instance.acquireTokenSilent(tokenRequest).then((response) => {
      myHeaders.append("Authorization", `Bearer ${response.accessToken}`);
    });
    return fetch(getURI("knowledgearticles"), {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((articles) => {
        return articles;
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return {
    getAll,
  };
};

export const ArticleProvider: FC<any> = ({ children }) => {
  return (
    <ArticleContext.Provider value={useArticles()}>
      {children}
    </ArticleContext.Provider>
  );
};
export const useArticleService = () => {
  return useContext(ArticleContext);
};
