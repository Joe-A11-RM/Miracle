import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Helmet } from "react-helmet-async";

export default function Contactus() {
  return (
    <>
      <Helmet>
        <title>Miracle Medical - Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Miracle Medical Industries for inquiries, support, and information about our orthopedic and medical support products. We're here to assist you with your healthcare needs."
        />
        <meta
          name="keywords"
          content="Contact Miracle Medical Industries, Customer Support, Medical Inquiries, Orthopedic Products, Medical Support Products, Healthcare Assistance, Miracle Medical Contact Information"
        />
      </Helmet>
      {/* Banner */}
      <div className="contact-us-banner"></div>

      {/* Content */}
      <section className="contact-us-section">
        <h3>Let’s Communicate</h3>

        <div className="contact-card">
          <div className="contact-item">
            <EnvironmentOutlined />
            <div>
              <span>Mailing Address</span>
              <p>
                Head Office: 4, Fawzi St (Facing Presidential Palace), Saraya
                El-Koba, Cairo, Egypt
              </p>
            </div>
          </div>

          <div className="contact-item">
            <MailOutlined />
            <div>
              <span>Email</span>
              <p>
                <a
                  href="mailto:miracle@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  miracle@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <PhoneOutlined />
            <div>
              <span>Phone</span>
              <p>+20 10 533 00 34</p>
            </div>
          </div>

          <div className="contact-item">
            <PhoneOutlined />
            <div>
              <span>Telephone</span>
              <p>
                +20 2 228 44 655 <br />
                +20 2 222 34 742 <br />
                +20 2 228 41 780
              </p>
            </div>
          </div>

          <div className="contact-item">
            <EnvironmentOutlined />
            <div>
              <span>Plant Location</span>
              <p>Industrial Area of Al Obour City</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
