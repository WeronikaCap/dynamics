import { Routes, Route } from "react-router-dom";

import Homepage from "pages/Homepage";
import ArticlePage from "components/ArticlePage";
import PageWrapper from "components/Layout/PageWrapper";

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/article" element={<ArticlePage />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
