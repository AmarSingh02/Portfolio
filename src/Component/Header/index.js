import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <div>
      <section className="header_Sec">
        <div className="container-fluid">
          <div className="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-blue my_name_logo">
              <Link to='/' >
              <span className="my_name_logo_text">  Amar Singh</span>
              
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul class="navbar-nav header_ul ">
                  <li class="nav-item active">
                    <Link to='/' class="nav-link" >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/about" class="nav-link" >
                      About me
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      My Skiils
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
