import { useState } from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Blogs from './pages/blogs/Blogs';
import Ranks from './pages/ranks/Ranks';
import Navbar from './components/navbar/Navbar';
import Catalogue from './pages/catalogue/Catalogue';
import ProjectPage from './pages/projectPage/ProjectPage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import NewProject from './pages/newProject/NewProject';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <div className="navb">
          <Navbar />
        </div>

        <div className="routesSection">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/ranks" elemnet={<Ranks />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/upload" element={<NewProject />} />
            <Route path="/list" element={<Catalogue />} />
            <Route path="/list/:id" element={<ProjectPage />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
