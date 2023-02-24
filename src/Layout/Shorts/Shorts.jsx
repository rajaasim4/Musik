import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Short1 from "../../assets/Short1.png";
import Short2 from "../../assets/Short2.png";
import Short3 from "../../assets/Short3.png";
import Short4 from "../../assets/Short4.png";
import Short5 from "../../assets/Short5.png";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Shorts.css";
import ShortsCard from "./ShortsCard";
const Shorts = () => {
  return (
    <div className="Shorts">
      <h3
        className="Common_heading shorts_heading"
        style={{ marginBottom: "30px" }}
      >
        See Our Best Shorts
      </h3>
      <div className="Shorts_main">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          autoplay={true}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            0: {
              //   width: 320,
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              //   width: 320,
              slidesPerView: 2,
              spaceBetween: 10,
            },
            769: {
              // widht: 370,
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1026: {
              //   widht: 400,
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ShortsCard imgsrc={Short1} />
          </SwiperSlide>
          <SwiperSlide>
            <ShortsCard imgsrc={Short2} />
          </SwiperSlide>
          <SwiperSlide>
            <ShortsCard imgsrc={Short3} />
          </SwiperSlide>
          <SwiperSlide>
            <ShortsCard imgsrc={Short4} />
          </SwiperSlide>
          <SwiperSlide>
            <ShortsCard imgsrc={Short5} />
          </SwiperSlide>
        </Swiper>
        {/* <ShortsCard /> */}
      </div>
    </div>
  );
};

export default Shorts;
