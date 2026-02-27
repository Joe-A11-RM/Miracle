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
import { Link, useNavigate } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;
export default function Arrivals() {
  const navigate = useNavigate();
  return (
    <div className="arrivals text-center">
      <h3>Fresh Arrivals</h3>
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
          pauseOnMouseEnter: true, // ✅ THIS LINE
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
          .filter((item) => item.type === "fresh")
          .map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-content">
                <Card
                  onClick={() => navigate(`/products/${item.id}`)}
                  hoverable
                  style={{ width: 240, height: "auto" }}
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
                  <Meta title={item.name} description={item.sizes} />
                </Card>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
