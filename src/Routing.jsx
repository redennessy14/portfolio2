import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route index element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routing;
