import React from "react";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import "./style.scss";
import {
  BOOTSTARP,
  CSS_ICON,
  GITHUB,
  HTML_ICON,
  JAVASCIPT,
  REACT_ICON,
  REACT_REDUX_ICON,
  SASS_ICON,
} from "./Constant";

const MySkills = () => {
  return (
    <div>
      <div className=" my_Skills d-flex">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            481: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper_box">
              <img src={HTML_ICON} width="40px" height="40px" />
              <h3>HTML5</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_box">
              <img src={CSS_ICON} width="40px" height="40px" />
              <h3>CSS 3</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_box">
              <img src={REACT_ICON} width="40px" height="40px" />
              <h3>React JS</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_box">
              <img src={REACT_REDUX_ICON} width="40px" height="40px" />{" "}
              <h3>React Redux</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper_box">
              <img src={JAVASCIPT} width="40px" height="40px" />
              <h3>Javascript</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_box">
              <img src={BOOTSTARP} width="40px" height="40px" />
              <h3>Bootstrap </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper_box">
              <img src={SASS_ICON} width="40px" height="40px" />
              <h3>SASS </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_box">
              <img src={GITHUB} width="40px" height="40px" />
              <h3>Github</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MySkills;
