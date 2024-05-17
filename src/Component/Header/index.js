import React from "react";
import { Link } from "react-router-dom";
import './style.scss'

const Header = () => {
  return (
    <div>
      <section className="header_section" >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <div className="left_header">
              <a href="/">
                <p>Amar Singh</p>
              </a>
            </div>
            </div>
            <div className="col-md-6 d-flex justify-content-around gap-3 header_right">
              <nav class="navbar navbar-expand-lg" >
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                  <li class="nav-item ">
                    <Link to='/' class="nav-link" >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to ='/about'>About</Link>
                  </li>
                  <li>
                    <Link to=''>Contact us</Link>
                  </li>
                  </ul>
              </div> 
              </nav>
            </div>
            {/* <nav class="navbar navbar-expand-lg navbar-light ">
              <a class="navbar-brand" href="/">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      AboutMe
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
