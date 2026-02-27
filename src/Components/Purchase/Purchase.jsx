import React from "react";
import { WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet-async";

export default function Purchase() {
  return (
    <>
      <Helmet>
        <title>Miracle Medical - Purchase</title>
        <meta
          name="description"
          content="Learn how to purchase high-quality orthopedic and medical support products from Miracle Medical Industries. Contact us via WhatsApp or email for custom sizes and orders."
        />
        <meta
          name="keywords"
          content="Miracle Medical Industries, Purchase Medical Products, Orthopedic Products, Medical Support Products, Custom Sizes, Contact Miracle Medical, Buy Medical Equipment, Miracle Medical Purchase Options"
        />
      </Helmet>
      {/* Banner */}
      <div className="purchase-banner"></div>

      {/* Content */}
      <section className="purchase-section">
        <h3>How You Can Get Our Products</h3>

        <div className="purchase-card">
          <div className="purchase-item">
            <WhatsAppOutlined />
            <div>
              <span>Get Product</span>
              <p>
                Contact us on WhatsApp
                <a
                  href="https://wa.me/20105330034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  +20 10 533 00 34
                </a>
              </p>
            </div>
          </div>

          <div className="purchase-item">
            <MailOutlined />
            <div>
              <span>Custom Sizes</span>
              <p>
                Need a specific size?
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
        </div>
      </section>
    </>
  );
}
