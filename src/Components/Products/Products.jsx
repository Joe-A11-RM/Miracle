import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import RelatedTo from "./RelatedTo";
import ControlledCarousel from "../Home/Carousel/Carousel";
import { Card, Tag, Typography, Space, Result, Button } from "antd";
import {
  AppstoreOutlined,
  BarcodeOutlined,
  TagsOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
export default function Products() {
  const { id } = useParams();
  const product = data.find((item) => item.id === Number(id));
  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-50">
        <Result
          status="404"
          title="Product Not Found"
          subTitle="Sorry, the product you are looking for does not exist or has been removed."
          extra={
            <Link to="/">
              <Button
                type="default"
                className="primary-hover-btn"
                style={{ backgroundColor: "#1AA19A", color: "white" }}
              >
                Back to Home
              </Button>
            </Link>
          }
        />
      </div>
    );
  }

  function ProductGallery() {
    const images = [
      "/assets/Shoulder.png",
      "/assets/Elbow.png",
      "/assets/Shoulder.png",
    ];

    const [selectedImage, setSelectedImage] = useState(product?.images[0]);

    return (
      <div className="col-lg-6">
        <div
          style={{
            width: "100%",
            height: "400px",
            borderRadius: "16px",
            background: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src={`../assets/Products${selectedImage}`}
            alt="product"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* الصور الصغيرة */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {product?.images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "12px",
                border:
                  selectedImage === img
                    ? "2px solid #1677ff"
                    : "1px solid #ddd",
                cursor: "pointer",
                overflow: "hidden",
                padding: "5px",
                background: "#fff",
              }}
            >
              <img
                src={`../assets/Products${img}`}
                alt="thumb"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      {/* <ControlledCarousel /> */}
      <div className="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <Card
                bordered={false}
                className="w-100"
                style={{
                  borderRadius: 16,
                  border: "1px solid #e8e8e8",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: "100%" }}
                >
                  <Title
                    level={2}
                    style={{ marginBottom: 0, color: "#1AA19A" }}
                  >
                    {product.name}
                  </Title>

                  <Paragraph type="secondary">{product.description}</Paragraph>

                  {/* Category */}
                  <Space>
                    <AppstoreOutlined />
                    <Text strong>Category:</Text>
                    <Link to={`/categories/${product.category}`}>
                      <Tag color="blue" className="text-capitalize">
                        {product.category}
                      </Tag>
                    </Link>
                  </Space>

                  {/* Sizes */}
                  <Space align="start">
                    <TagsOutlined />
                    <Text strong>Sizes:</Text>
                    <Space wrap>
                      {Array.isArray(product.sizes) ? (
                        product.sizes.map((size) => (
                          <Tag key={size}>{size}</Tag>
                        ))
                      ) : (
                        <Tag>{product.sizes}</Tag>
                      )}
                    </Space>
                  </Space>

                  {/* Code */}
                  <Space>
                    <BarcodeOutlined />
                    <Text strong>Code:</Text>
                    <Text type="secondary">{product.code}</Text>
                  </Space>
                </Space>
              </Card>
            </div>

            <ProductGallery />
          </div>
        </div>
      </div>
      <RelatedTo product={product} />
    </>
  );
}
