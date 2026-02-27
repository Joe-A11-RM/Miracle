import React from "react";
import CategoryItem from "../Home/Categories/CategoryItem";
import { Helmet } from "react-helmet-async";
import { QRCode } from "antd";

export default function Aboutus() {
  return (
    <>
      <Helmet>
        <title>Miracle Medical - About Us</title>
        <meta
          name="description"
          content="Learn more about Miracle Medical Industries, a global leader in soft orthopedic rehabilitation and medical support products. Discover our mission, strategy, and commitment to enhancing patient care with innovative solutions crafted from 100% Egyptian cotton."
        />
        <meta
          name="keywords"
          content="Miracle Medical Industries, About Us, Orthopedic Products, Medical Support Products, Soft Orthopedic Rehabilitation, Patient Care, Medical Devices, Egyptian Cotton, Global Medical Company"
        />
      </Helmet>
      <div className="about-us-page">
        {/* Hero Section */}
        <div className="about-us-hero"></div>

        {/* About Content */}
        <div
          style={{
            borderBottom: "1px solid var(--SecondaryColor)",
            padding: "16px",
          }}
        >
          <section className="about-us-section text-center">
            <h3>About Us</h3>
            <div className="container">
              <p className="about-us-content">
                Miracle Orthopedics is a global medical device company
                specializing in soft orthopedic rehabilitation products and
                medical support products. Our broad range of over 85 soft
                orthopedic products, including 595 items, provides solutions
                throughout the patient’s continuum of care. We sell our products
                in Egypt and more than 48 countries through networks of agents
                and distributors. Our customers include orthopedic, pediatric
                orthopedics, and spine surgeons, pharmacies, hospitals,
                distributors, surgery centers, physical therapists, athletic
                trainers, and other healthcare professionals. We are proud of
                our reputation as an innovator in soft orthopedic and medical
                sporty products, crafted from 100% Egyptian cotton.
              </p>
            </div>
          </section>

          {/* Mission & Strategy */}
          <section className="mission-strategy-section container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="mission-strategy-card">
                  <div className="card-header">
                    <img src="/assets/Mission.svg" alt="mission" />
                    <h4>Our Mission</h4>
                  </div>
                  <p className="card-content">
                    To be the worldwide leader in high-quality orthopedic
                    products within local and export markets. We continuously
                    research & develop soft orthopedic products, rehabilitation,
                    and prosthetic devices.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mission-strategy-card">
                  <div className="card-header">
                    <img src="/assets/Mission.svg" alt="strategy" />
                    <h4>Our Strategy</h4>
                  </div>
                  <p className="card-content">
                    Our strategy is to increase revenue and profitability and
                    enhance cash flow by strengthening market leadership. Key
                    initiatives include growing our regeneration business and
                    integrating the sales force to sell products directly.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Certifications */}
        <section className="certifications">
          <h3>Our Certifications</h3>
          <div className="mt-5 container text-center">
            <div className="row">
              <CategoryItem img="Abdominal.svg" />
              <CategoryItem img="Back.svg" />
              <CategoryItem img="Elbow.png" />
              <CategoryItem img="Fingers.png" />
              <CategoryItem img="Foot.svg" />
              <CategoryItem img="Foot.svg" />
            </div>
          </div>
        </section>
        <section className="certifications">
          <h3>Learn More About Miracle Medical</h3>
          <p className="text-muted">
            Scan the QR code to view our full company profile & certifications
          </p>{" "}
          <div className="my-2 d-flex justify-content-center">
            <QRCode value="https://drive.google.com/file/d/1nD3B61zeaXxbSwpQ6BQT4wmnaJzS1Bzx/view" />
          </div>
        </section>
      </div>
    </>
  );
}
