import React from "react";
import "./catalogue.css";
import filter from "../../assets/filter.png";
import drop from "../../assets/arrow-down.png";

const Catalogue = () => {
  return (
    <>
      <section className="header">
        <h1>NFT Projects</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </section>

      <section className="heroes">

        <div className="left-side">

          <div className="filters">
            <img src={filter} alt="funnel" className="funnel" />
            Filters
          </div>

          <div className="drop-box">
            
            <button class="dropbtn">All
            <img src={ drop} alt="drop" className="drop" />
            </button>

            <div class="dropdown">
              <button class="dropbtn">Infrastructure
              <img src={ drop} alt="drop" className="drop" />
              </button>
              <div class="dropdown-content">
                <a href="#">Project name 1#</a>
                <a href="#">Project name 2#</a>
                <a href="#">Project name 3#</a>
                <a href="#">Project name 4#</a>
                <a href="#">Project name 5#</a>
                <a href="#">Project name 6#</a>
              </div>
            </div>

            <button class="dropbtn">NFT
            <img src={ drop} alt="drop" className="drop" />
            </button>

            <button class="dropbtn">Gaming
            <img src={ drop} alt="drop" className="drop" />
            </button>

            <button class="dropbtn">Ecosystem
            <img src={ drop} alt="drop" className="drop" />
            </button>


          </div>

        </div>
        <div className="right-side"></div>
      </section>
    </>
  );
};

export default Catalogue;
