import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import data from "../../../data";

export default function Arrivals() {
  return (
    <div className="arrivals">
      <h3>Fresh Arrivals</h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data
          .filter((item) => item.type === "fresh")
          .map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-content">
                <h4>{item.name}</h4>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
