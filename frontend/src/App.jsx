import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import Ranks from "./pages/ranks/Ranks";
import Navbar from "./components/navbar/Navbar";
import Catalogue from "./pages/catalogue/catalogue";

function App() {
  const [count, setCount] = useState(0);

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

            {/* <Route
            path="/product-catalouge/product-page"
            element={<ProductPage />}
          /> */}
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
