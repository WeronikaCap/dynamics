import React, { createContext, useContext, FC } from "react";
import { Article } from "../article";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { useState } from "react";

export const getURI = (endpoint: string) =>
  `https://capgeminidcxnl.api.crm4.dynamics.com/api/data/v9.2/${endpoint}`;

export interface ArticleService {
  // getAll: () => Promise<void | Article[]>;
  getAll: (myHeaders: any) => Promise<Article[]>;
}

export const ArticleContext = createContext<ArticleService>(
  {} as ArticleService
);

export const useArticles = () => {
  // @ts-ignore
  const { instance, accounts } = useMsal();
  const tokenRequest = {
    account: accounts[0],
    scopes: ["https://capgeminidcxnl.crm4.dynamics.com/user_impersonation"],
  };

  const getAll: ArticleService["getAll"] = (myHeaders: any) => {
    return fetch(getURI("knowledgearticles"), {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((articles) => {
            console.log(articles);
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

//   const getAll: ArticleService["getAll"] = () => {
//     return instance
//       .acquireTokenSilent(tokenRequest)
//       .then((response) => {
//         let myHeaders = new Headers();
//         myHeaders.append("Authorization", `Bearer ${response.accessToken}`);
//         fetch(getURI("knowledgearticles"), {
//           method: "GET",
//           headers: myHeaders,
//           redirect: "follow",
//         })
//           .then((response) => response.json())
//           .then((articles) => {
//             console.log(articles);
//             return articles;
//           })
//           .catch((e) => {
//             console.log(e);
//           });
//       })
//   };
//   return {
//     getAll,
//   };
// };



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
