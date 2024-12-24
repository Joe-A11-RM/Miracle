import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import RelatedTo from "./RelatedTo";
import ControlledCarousel from "../Home/Carousel/Carousel";
export default function Products() {
  const { id } = useParams();
  const product = data.find((item) => item.id === Number(id));

  return (
    <>
      <ControlledCarousel />
      <div className="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-items-center d-flex">
              <div className="product-content ">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="d-flex align-items-center">
                  <span>Category :</span>
                  <Link
                    to={`/categories/${product.category}`}
                    className="category text-capitalize"
                  >
                    {product.category}
                  </Link>
                </div>
                <div className="d-flex align-items-center">
                  <span>Sizes :</span>
                  <div>{product.sizes}</div>
                </div>
                <div className="d-flex align-items-center">
                  <span>Code :</span>
                  <div>{product.code}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                loop={true}
              >
                <SwiperSlide>
                  <img src="/assets/Shoulder.png" alt="i" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/Elbow.png" alt="i" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/Shoulder.png" alt="i" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <RelatedTo product={product} />
    </>
  );
}
