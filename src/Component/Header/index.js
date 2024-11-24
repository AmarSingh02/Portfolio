import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import SlideAnimationButton from "../ContactButton";

const Header = () => {
  
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
     
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <div>
      <section className="header_Sec">
        <div className="container-fluid">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-blue my_name_logo">
              <NavLink to="/" className="navbar-brand">
                <div className="logo">
                  <span className="my_name_logo_text">Amar Singh</span>
                </div>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav header_ul">
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/"
                      className="nav-link"
                      activeClassName="active"
                      onClick={handleNavLinkClick} // Collapse menu on click
                    >
                      Home
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink
                      exact
                      to="/about"
                      className="nav-link"
                      activeClassName="active"
                      onClick={handleNavLinkClick} // Collapse menu on click
                    >
                      About
                    </NavLink>
                  </li> */}
                </ul>
              </div>
              <div className="slide_btn d-flex align-items-center">
                <a href="tel:7337777938">
                  <SlideAnimationButton url="/" btnName="Contact Us" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
