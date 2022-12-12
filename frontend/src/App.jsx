import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import Ranks from "./pages/ranks/Ranks";
import Project from "./pages/project/Project";
import ProjectPage from "./pages/projectPage/ProjectPage";
import Navbar from "./components/navbar/Navbar";
import Catalogue from "./pages/Catalogue/Catalogue";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="navb">
          <Navbar />
        </div>

        <div className="routesSection">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/ranks" element={<Ranks />} />
          
            <Route path="/projects/project-page" element={<ProjectPage/>} />

            <Route path="/projects/list" element
            ={<Catalogue />} />

            
          </Routes>
        </div>

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
