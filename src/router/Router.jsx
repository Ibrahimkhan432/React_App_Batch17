import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import Layout from "../pages/Layout";
import ThemeContext from "../context/ThemeContext";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectDetail from "../pages/ProjectDetail";

const RouterPage = () => {
  return (
    <>
      <ThemeContext>
        <Navbar />
        <Routes>
          <Route path="*" element={< NotFoundPage/>} />
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:title" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeContext>
    </>
  );
};

export default RouterPage;
