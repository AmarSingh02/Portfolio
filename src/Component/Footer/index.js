import React from "react";
import "./style.scss";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EMAIL, GITHUB_FOOTER, LINKEDIN } from "./Constant";
import { Fade } from "react-awesome-reveal";
import BackToTop from "../BackToTop";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  return (
    <div>
      <section>
        <div className="container">
          <div className="row text-center">
            <div className="footer_logo " style={{ marginBottom: "10px" }}>
              <h1 className="footer_logo"> Amar Singh</h1>

              <div className="footer_link d-flex text-center mb-3">
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sales_email">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="social_icon ">
                <div className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/amar-singh-733155247/"
                    target="is_blank"
                  >
                    <img src={LINKEDIN} alt="" />
                  </a>
                </div>
                <div className="linkedin">
                  <a href="https://github.com/AmarSingh02" target="is_blank">
                    <img src={GITHUB_FOOTER} alt="" />
                  </a>
                </div>
                <div className="linkedin">
                  <a href="mailto:asingh58885@gmail.com" target="is_blank">
                    <img src={EMAIL} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="privacy_footer">
                <Fade direction="up" cascade damping={0.1}>
                  <div className="madeby">
                    <p>Developed with love by Amar Singh © 2024</p>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="email_id d-flex">
                <div className="sales_id">
                  <a href="mailto:asingh58885@gmail.com">
                    asingh58885@gmail.com
                  </a>
                </div>

                <div className="support_id">
                  <a href="tel:7337777938">7337777938</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <BackToTop />
    </div>
  );
};

export default Footer;
