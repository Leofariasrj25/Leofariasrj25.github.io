import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";

const Blog: React.FC = () => (
  <div className="max-w-[800px] mx-auto px-6 py-16">
    <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Blog</h1>
    <p className="text-neutral-600 dark:text-neutral-400">Coming soon...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
