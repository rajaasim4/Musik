import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Avatar from "../../assets/Avatar.png";
const Testimonials = () => {
  return (
    <>
      <div className="Space"></div>
      <div className="Testimonials">
        <h3 className="Common_heading">Testimonials</h3>
        <div className="Testimonials_main">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            autoplay={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // 300: {
              //   width: 320,
              //   slidesPerView: 1,
              //   spaceBetween: 30,
              // },
              // 500: {
              //   widht: 400,
              //   slidesPerView: 2,
              //   spaceBetween: 40,
              // },
              // 769: {
              //   widht: 400,
              //   slidesPerView: 3,
              //   spaceBetween: 40,
              // },
              // 1024: {
              //   widht: 400,
              //   slidesPerView: 3,
              //   spaceBetween: 40,
              // },
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
                widht: 370,
                slidesPerView: 3,
                spaceBetween: 15,
              },
              // 1026: {
              //   //   widht: 400,
              //   slidesPerView: 4,
              //   spaceBetween: 10,
              // },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SwiperSlider />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlider />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlider />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlider />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlider />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
const SwiperSlider = () => {
  return (
    <>
      <div className="Slider_main">
        <div className="Slider_top">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            optio voluptates earum voluptas, quisquam autem natus cumque ipsam
            dignissimos culpa deleniti perferendis nesciunt error! Sunt aliquam
            iusto nulla quibusdam dicta.
          </p>
        </div>
        <div className="Slider_bottom">
          <img src={Avatar} alt="" />
          <h4>Johny Doe</h4>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
