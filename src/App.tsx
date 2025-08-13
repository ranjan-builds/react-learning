import { Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

import Layout from "./pages/Layout";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Your Home page */}
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
