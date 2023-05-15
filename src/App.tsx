import { Routes, Route } from "react-router-dom";

import Homepage from "pages/Homepage";

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
  );
}

export default App;
