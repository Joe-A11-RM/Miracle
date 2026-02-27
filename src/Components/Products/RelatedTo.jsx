import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import data from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "antd";
const { Meta } = Card;

export default function RelatedTo({ product }) {
  const navigate = useNavigate();

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
                <Card
                  onClick={() => navigate(`/products/${item.id}`)}
                  hoverable
                  style={{ width: "100%", borderRadius: "16px" }}
                  cover={
                    <div
                      style={{
                        height: "240px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#f5f5f5",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        draggable={false}
                        alt={item.name}
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                        src={`../assets/Products${item.Coverimage}`}
                      />
                    </div>
                  }
                >
                  <Meta
                    title={item.name}
                    description={
                      <span style={{ fontSize: "14px", color: "#555" }}>
                        {item.sizes}
                      </span>
                    }
                  />
                </Card>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
