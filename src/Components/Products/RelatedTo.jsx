import React from "react";
import { Link } from "react-router-dom";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import data from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RelatedTo({ product }) {
  return (
    <div className="arrivals text-center">
      <h3>Related To</h3>
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
        breakpoints={{
          1399: {
            slidesPerView: 5,
          },
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data
          .filter((item) => item.category === product.category)
          .map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-content">
                <div className="product-card">
                  <div className="product-card-image-layout">
                    <img src="/assets/Product.png" alt="img" />
                  </div>
                  <div className="description">
                    <h6>{item.name}</h6>
                    <div className="d-flex">
                      <span className="fw-semibold me-1">Category: </span>
                      <Link
                        to={`/categories/${item.category}`}
                        className="category"
                      >
                        {item.category}
                      </Link>
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
