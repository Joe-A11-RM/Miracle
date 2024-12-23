import React from "react";
import CategoryItem from "../Home/Categories/CategoryItem";

export default function Aboutus() {
  return (
    <div>
      <div className="know-about-us"></div>
      <div className="about-us text-center">
        <h3>About Us</h3>
        <div className="container">
          <div className="about-us-content">
            Miracle Orthopedics is a global medical device company specializing
            in soft orthopedic Rehabilitation Products and medical support
            products the Company’s broad range of over 85 soft Orthopedic
            products, including 595 items, these products provide solutions
            throughout the patient’s continuum of care. The Company sells its
            products in Egypt and in more than 48 other countries through
            networks of agents, distributors. Customers include orthopedic,
            paediatric orthopedics and spine surgeons, pharmacies, , hospitals,
            distributors ,surgery centers, physical therapists, athletic
            trainers and other healthcare professionals. We are proud of our
            reputation as an innovator of Soft orthopedic And Medical Sporty
            products. Our innovation has its roots in our beginnings as a small
            start-up company fashioned Products from Pure Egyptian Cotton
            material{" "}
          </div>
          <div className="mission-strategy">
            <div className="row">
              <div className="col-lg-6">
                <div className="our-mission-strategy">
                  <div className="our-mission-strategy-title">
                    <img src="/assets/Mission.svg" alt="mission" />
                    <div>Our Mission</div>
                  </div>
                  <div className="our-mission-strategy-content">
                    To be the worldwide leader in high Quality Orthopedic
                    products within local And Export markets . With Continuous
                    research & Development within soft Orthopedic Products,
                    Rehabilitation and Prosthetic Devices ..
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="our-mission-strategy">
                  <div className="our-mission-strategy-title">
                    <img src="/assets/Mission.svg" alt="mission" />
                    <div>Our Strategy</div>
                  </div>
                  <div className="our-mission-strategy-content">
                    Our strategy is to increase revenue and profitability and
                    enhance cash flow by strengthening our market leadership
                    position. Our key initiatives to implement this strategy
                    include:Grow Our Regeneration Business. We have integrated
                    the sales force to selling our products direct.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="certifications">
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
      </div>
    </div>
  );
}
