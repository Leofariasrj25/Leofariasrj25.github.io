import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<div>Projects - Coming Soon</div>} />
        <Route path="/blog" element={<div>Blog - Coming Soon</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
