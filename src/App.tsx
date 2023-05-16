import { Routes, Route } from "react-router-dom";

import Homepage from "pages/Homepage";
import KnowledgeBase from "pages/KnowledgeBase";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
      </Routes>
  );
}

export default App;
