import { useEffect, useState, createContext, useContext, FC } from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { KnowledgeArticleResponse } from "components/articleSection/knowledgeArticle";

export const getURI = (endpoint: string) =>
  `https://capgeminidcxnl.api.crm4.dynamics.com/api/data/v9.2/${endpoint}`;

export interface ArticleService {
  // getAll: () => Promise<KnowledgeArticleResponse>;
  articles: KnowledgeArticleResponse | undefined
}

export const ArticleContext = createContext<ArticleService>(
  {} as ArticleService
);

export const useArticles = () => {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const [articles, setArticles] = useState<KnowledgeArticleResponse>();

  const tokenRequest = {
    account: accounts[0],
    scopes: ["https://capgeminidcxnl.crm4.dynamics.com/user_impersonation"],
  };

  useEffect(() => {
    const fetchData = async () => {
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
          setArticles(articles);
        })
        .catch((e) => {
          throw e;
        });
    };
    if (isAuthenticated) fetchData();
  }, [isAuthenticated]);

  // const getAll: ArticleService["getAll"] = async () => {
  //   let myHeaders = new Headers();
  //   await instance.acquireTokenSilent(tokenRequest).then((response) => {
  //     myHeaders.append("Authorization", `Bearer ${response.accessToken}`);
  //   });
  //   return fetch(getURI("knowledgearticles"), {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   })
  //     .then((response) => response.json())
  //     .then((articles) => {
  //       return articles;
  //     })
  //     .catch((e) => {
  //       throw e;
  //     });
  // };
  return {
    articles,
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
