import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Blogs from './pages/blogs/Blogs';
import Ranks from './pages/ranks/Ranks';
import Navbar from './components/navbar/Navbar';
import Catalogue from './pages/catalogue/catalogue';
import ProjectPage from './pages/projectPage/ProjectPage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import NewProject from './pages/newProject/NewProject';


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
            <Route path="/ranks" elemnet={<Ranks />} />
            <Route path="/projects" element={<Catalogue />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/upload" element={<NewProject />} />
            <Route path="/projects/project-page" element={<ProjectPage />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
