import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function OEM() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Miracle Medical - OEM Manufacturing Services</title>
        <meta
          name="description"
          content="Explore Miracle Medical Industries' OEM manufacturing services. We offer high-quality, customizable medical products designed to meet your brand's needs. Partner with us for reliable production, innovative design, and comprehensive support in bringing your medical solutions to market."
        />
        <meta
          name="keywords"
          content="Miracle Medical Industries, OEM Manufacturing, Custom Medical Products, Medical Product Design, Private Label Medical Solutions, Medical Device Production, Healthcare Product Manufacturing, Miracle Medical OEM Services"
        />
      </Helmet>
      <div>
        <div className="OEM-banner"></div>
        <div className="OEM text-center">
          <h3>OEM manufacturing services</h3>
          <div className="OEM-content container">
            <div>
              When you develop products or you want height quality with
              realistic prices, then you need a partner you can count on.
            </div>
            <div className="my-2">
              Our production capacity give us the facility to produce in mass
              production, we are able to design your own product and produce it
              under you own brand name, within short time and according to your
              own requirements
            </div>
            <div>
              As we focus on product development, we obtain the ISO 9001-200 and
              CE mark to insure our quality. We will do all the work for you,
              product design, material sourcing, printing your brand name,
              design your own package and packing it.
            </div>
            <div className="my-2">
              NOT just a OEM manufacturing services but WE are the Partner you
              can trust to improve your market share
            </div>
            <div>
              Feel free to{" "}
              <span onClick={() => navigate("/contact-us")}>contact</span> us
              for more details about our OEM ability
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
