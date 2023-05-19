import { Routes, Route } from "react-router-dom";

import Homepage from "pages/Homepage";
import { ArticleProvider } from "components/articleSection/service/ArticleService";

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
    <ArticleProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </ArticleProvider>
  );
}

export default App;
