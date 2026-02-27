import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../../data";
import { Button, Card, Result } from "antd";
import { Helmet } from "react-helmet-async";
const { Meta } = Card;

export default function Categories() {
  const { name } = useParams();
  const navigate = useNavigate();
  const categoryItems = data
    ?.filter((item) => item.category === name)
    .map((item) => (
      <div
        key={item.id}
        className="col-lg-3 col-md-4 col-sm-6 mb-4"
        onClick={() => navigate(`/products/${item.id}`)}
      >
        <Card
          hoverable
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
    ));
  console.log(categoryItems);
  if (categoryItems.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-50">
        <Result
          status="404"
          title="Category Not Found"
          subTitle="Sorry, the category you are looking for does not exist or has been removed."
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
  return (
    <>
      <Helmet>
        <title>Miracle Medical - {name.toUpperCase()} Products</title>
        <meta
          name="description"
          content={`Explore our wide range of ${name} products at Miracle Medical. Discover high-quality orthopedic and medical support solutions designed to enhance patient care and rehabilitation.`}
        />
        <meta
          name="keywords"
          content={`Miracle Medical, ${name} Products, Orthopedic Products, Medical Support Solutions, Patient Care, Rehabilitation Products, Medical Devices`}
        />
      </Helmet>
      <div className="category-header text-center py-5">
        <h1>{name}</h1>
        <p className="text-muted">
          Explore all products under the <strong>{name}</strong> category
        </p>
      </div>

      {/* Product Grid */}
      <section className="category-products">
        <div className="container">
          <div className="row">{categoryItems}</div>
        </div>
      </section>
    </>
  );
}
