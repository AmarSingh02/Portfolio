import React from "react";
import "./style.scss";
import SlideAnimationButton from "../../Component/ContactButton";
import { Link } from "react-router-dom";
import SwipeContactButton from "../../Component/SwipeContactButton";
import { EDUCATION_LOGO, EXPERIENCE, MY_IMG } from "./Constant";
import { ReactTyped, Typed } from "react-typed";
import Heading from "../../Utils/Heading";
import MySkills from "../../Component/MySkills";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <section className="home_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="home_content_right">
                <div className="hello_container">
                  <Fade direction="up" delay={100}>
                    <h3>
                      Hello I'm
                      <br />
                    </h3>
                  </Fade>
                </div>

                <div className="typeed">
                  <h2
                    style={{
                      fontSize: "44px",
                      fontWeight: "bold",
                      fontFamily: "roboto",
                      color: "#32a4d5 ",
                    }}
                  >
                    <ReactTyped
                      strings={[" Amar Singh", " Frontend Developer"]}
                      typeSpeed={100}
                      loop
                    />
                  </h2>
                </div>
                <Fade direction="up" triggerOnce>
                  <p>
                    I am excited to dive into the world of web development and
                    make a meaningful contribution to any team I am a part of.
                  </p>
                </Fade>
                <Fade direction="up" delay={200}>
                  <div className="swipper_buttton text-center">
                    <SwipeContactButton />
                  </div>
                </Fade>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="my_profile_img">
                <img src={MY_IMG} alt="" />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <Fade direction="up" triggerOnce>
                <div className="about_me_heading">
                  <Heading heading="About me" uppercase="text-uppercase" />
                </div>
              </Fade>

              <div className="about_my_Self mt-4">
                <Fade direction="up" delay={200}>
                  <p>
                    Hi, I’m Amar Singh, a passionate and dedicated frontend
                    developer with over 1.6 years of experience. I hold a
                    Bachelor’s degree in Information Science and Engineering.
                    Currently, I am working at Sakshath Technologies as a Junior
                    Frontend Developer, where I specialize in building
                    responsive and user-friendly web applications.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

  

      <section className="my_skil_Section">
        <Fade direction="up" triggerOnce>
          <div className="skill_heading text-center">
            <Heading heading="Skills" />
          </div>
        </Fade>
        <div className="container my_skill_container">
          <div className="row">
            <div className="col-md-12 MT-5">
              <MySkills />
            </div>
          </div>
        </div>
      </section>

      {/* my experience */}

      <section className="experience_Exp">
        <div className="container">
          <div className="row text-ceter">
            <Fade direction="up" triggerOnce>
              <div className="exp_heading text-center">
                <Heading heading="Experience & Education" />
              </div>
            </Fade>

            <div className="col-md-6">
              <Fade direction="left" triggerOnce>
                <div className="experince_box text-center ">
                  <div className="experience_container d-flex justify-content-around">
                    <div className="exp_content mt-5">
                      <h3>Sakshath Technologies </h3>

                      <p>Jr.Software Developer (Frontend) </p>
                      <i>(Sept 2023 - Present)</i>
                    </div>

                    <div className="icon mt-5">
                      <img src={EXPERIENCE} alt="" width="40px" height="40px" />
                    </div>
                  </div>

                  <div className="experience_container d-flex justify-content-around">
                    {/* 2nd */}

                    <div className="exp_content mt-5">
                      <h3>Sakshath Technologies</h3>
                      <p>Intenship (PowerPlatforms) &nbsp; &nbsp;</p>

                      <i>(May 2023 - Aug 2023)</i>
                    </div>

                    <div className="icon mt-5">
                      <img src={EXPERIENCE} alt="" width="40px" height="40px" />
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            {/* eduction right half */}
            <div className="col-md-6">
              <Fade direction="right" triggerOnce>
                <div className="education_container">
                  <div className="edu_box">
                    <div className="icon mt-5">
                      <img
                        src={EDUCATION_LOGO}
                        alt=""
                        width="45px"
                        height="45px"
                      />
                    </div>
                    <div className="edu_content mt-5">
                      <h3>Bachelor’s Degree</h3>
                      <p>Sapthagiri College of Engineering (ISE)</p>

                      <i>(Aug 2029 - Aug 2023 ) Bangalore</i>
                    </div>
                  </div>

                  <div className="edu_box">
                    <div className="icon mt-5">
                      <img
                        src={EDUCATION_LOGO}
                        alt=""
                        width="45px"
                        height="45px"
                      />
                    </div>
                    <div className="edu_content mt-5">
                      <h3>Secondary School </h3>
                      <p>ST.Joseph PU College</p>

                      <i>(May 2017 - Mar 2019 ) Hassan</i>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
