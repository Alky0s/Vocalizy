import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Comments from "./pages/Comments";
import Join from "./pages/Join";
import Partners from "./pages/Partners";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Comments" element={<Comments />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/Join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
