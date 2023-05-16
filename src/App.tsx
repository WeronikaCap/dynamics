import { Routes, Route } from "react-router-dom";

import Navigation from "components/Layout/Navigation";
import Footer from "components/Footer";
import Homepage from "pages/Homepage";
import KnowledgeBase from "pages/KnowledgeBase";

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
