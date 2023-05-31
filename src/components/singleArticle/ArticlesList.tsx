import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [data, setData] = useState<any>();

  const tokenRequest = {
    account: accounts[0],
    scopes: ["https://capgeminidcxnl.crm4.dynamics.com/user_impersonation"],
  };

  useEffect(() => {
    if (isAuthenticated) {
      instance.acquireTokenSilent(tokenRequest).then((response) => {
        // Call your API with the access token and return the data you need to save in state
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${response.accessToken}`);
        fetch(
          "https://capgeminidcxnl.api.crm4.dynamics.com/api/data/v9.2/knowledgearticles?$orderby=knowledgearticleviews%20desc",
          {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          }
        )
          .then((response) => response.json())
          .then((result) => setData(result.value))
          .catch((error) => console.log("error", error));
      });
    }
  }, [isAuthenticated]);

  if (!data) return null;
  return (
    <ul className="text-center">
      {data.map((article: any, index: string) => (
        <li key={index}>
          <Link to={`${index}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default ArticlesList;
