import { Routes, Route } from "react-router-dom";

import Navigation from "components/Layout/Navigation";
import Footer from "components/Layout/Footer";
import Homepage from "pages/Homepage";
import { ArticleProvider } from "service/ArticleService";
import KnowledgeBase from "pages/KnowledgeBase";
import SearchResult from "pages/SearchResult";
import ArticlePage from "pages/ArticlePage";
import ArticlesList from "components/singleArticle/ArticlesList";

function App() {
  return (
    <>
      <ArticleProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </ArticleProvider>
    </>
  );
}

export default App;
