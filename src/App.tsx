import { Routes, Route } from "react-router-dom";

import Homepage from "pages/Homepage";
import ArticlePage from "pages/ArticlePage";
import PageWrapper from "components/Layout/PageWrapper";
import ArticlesList from "components/singleArticle/ArticlesList";

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
