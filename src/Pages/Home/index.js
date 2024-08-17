import React from "react";
import "./style.scss";
import SlideAnimationButton from "../../Component/ContactButton";
import { Link } from "react-router-dom";
import SwipeContactButton from "../../Component/SwipeContactButton";
import { MY_IMG } from "./Constant";
import { ReactTyped, Typed } from "react-typed";
import Heading from "../../Utils/Heading";

const Home = () => {
  return (
    <>
      <section className="home_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="home_content_right">
                <h3>
                  Hello I'm
                  <br />
                 
                  <h2 style={{fontSize:'44px', fontWeight:'bold', fontFamily:'roboto'}}>
                    <ReactTyped
                      strings={[" Amar Singh", " Frontend Developer"]}
                      typeSpeed={100}
                      loop
                    />
                  </h2>
                </h3>

                <p>
                  I am excited to dive into the world of web development and
                  make a meaningful contribution to any team I am a part of.
                </p>
                <SwipeContactButton />
              </div>
            </div>
            <div className="col-md-6 profile">
              <div className="my_profile">
                <img src={MY_IMG} alt="my_profile" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
          <div className="col-md-6">
<div className="about_me_heading">
  <Heading heading ="About me" uppercase="text-uppercase"/>
</div>
          </div>
          <div className="col-md-6"></div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
