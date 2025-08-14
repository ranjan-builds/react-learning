import { Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Layout from "./pages/Layout";
import Work from "./pages/Work";
import About from "./pages/About";

import Nopage from "./pages/Nopage";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Work />} /> {/* Your Home page */}
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
