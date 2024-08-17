import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./style.scss";
import SlideAnimationButton from "../ContactButton";
import SwipeContactButton from "../SwipeContactButton";

const Header = () => {
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
                data-toggle="collapse"
                data-target="#navbarNav"
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
                      activeClassName="active" // Apply 'active' class when this link is active
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/about"
                      className="nav-link"
                      activeClassName="active" // Apply 'active' class when this link is active
                    >
                      About me
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/skills"
                      className="nav-link"
                      activeClassName="active" // Apply 'active' class when this link is active
                    >
                      My Skills
                    </NavLink>
                  </li>
                </ul>

               
              </div>
              <div className="slide_btn d-flex align-items-center">
                <div className="slide_btn_right">
                <SlideAnimationButton url='/about' btnName="Contact Us"> </SlideAnimationButton>
                {/* <SwipeContactButton url='/about'  btnName="Contact Us"></SwipeContactButton> */}
                </div>
                
                </div>
            </nav>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
