import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";

const RouterPage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default RouterPage;
