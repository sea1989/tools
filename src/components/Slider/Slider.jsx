import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";
// import required modules

import Banner1 from '../../assets/images/banner1.png';

import './Slider.css';

const Slider = () => {

  return (
    <div className="container">
      <section className='slider'>

        <Swiper
          pagination={true}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider__wrapper">
              <img src={Banner1} alt="banner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__wrapper">
              <img src={Banner1} alt="banner" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider__wrapper">
              <img src={Banner1} alt="banner" />
            </div>
          </SwiperSlide>
        </Swiper>

      </section>
    </div>
  );
};

export default Slider;
