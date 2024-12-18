import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import data from "../../../data";

export default function DailySupport() {
  return (
    <div className="arrivals text-center">
      <h3>Your Daily Support</h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={4}
        spaceBetween={10}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data
          .filter((item) => item.type === "daily")
          .map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-content">
                <div className="product-card">
                  <div className="product-card-image-layout">
                    <img src="assets/Product.png" alt="img" />
                  </div>
                  <div className="description">
                    <h6>{item.name}</h6>
                    <div className="d-flex">
                      <span className="fw-semibold me-1">Category: </span>
                      <div className="category">{item.category}</div>
                    </div>
                    <div>
                      <span className="fw-semibold">Sizes: </span> {item.sizes}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
