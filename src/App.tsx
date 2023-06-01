import { Routes, Route } from "react-router-dom";

import Navigation from "components/Layout/Navigation";
import Footer from "components/Layout/Footer";
import Homepage from "pages/Homepage";
import { ArticleProvider } from "components/articleSection/service/ArticleService";
import KnowledgeBase from "pages/KnowledgeBase";
import SearchResult from "pages/SearchResult";

function App() {
  return (
    <>
      <ArticleProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/search/:slug" element={<SearchResult />} />
        </Routes>
        <Footer />
      </ArticleProvider>
    </>
  );
}

export default App;
